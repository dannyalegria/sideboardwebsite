/*##############################
  External Modules:
##############################*/

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var port = 3000;

/*##############################
  Config:
##############################*/

var config = require('./config');

/*##############################
  Express:
##############################*/

var app = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

/*##############################
  Session and Passport:
##############################*/

// var passport = require('./services/passport');
app.use(session({
	secret: config.secret,
	saveUninitialized: false,
	resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

// NOTE fix the placement of this? NOTE //

var massiveServer = massive.connectSync({
	connectionString: "postgres://postgres:postgres@localhost/sideboarddatabase"
});

app.set('db', massiveServer);
var db = app.get('db');

/*##############################
  Controllers:
##############################*/

var mainController = require('./controllers/mainController');
var userController = require('./controllers/userController');
var orderController = require('./controllers/orderController');

/*##############################
  Middleware:
##############################*/

app.use(bodyParser.json());

/*##############################
  Policies:
##############################*/

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

/*##############################################################################
                          *** CRUD Endpoints: ***
##############################################################################*/

// NOTE maybe organize these by controller first, not by 'get put post delete etc.' first.

/*##############################
  Read-Only:
##############################*/

//  GET   //

//shop:
app.get('/api/shop/:id', mainController.getOneProduct);
app.get('/api/shop', mainController.getAllProducts);

//auth and passport:
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
  successRedirect: '/#/shop',
  failureRedirect: '/#!/'
}))
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// User:
app.get('/api/me', userController.me);

// Order:
app.get('/api/order', orderController.read);

/*##############################
  Writeable:
##############################*/

// NOTE This shouldn't be hardcoded in here, put it back in passport.js NOTE //
// CONFIG //
// var config = require('./../config.js');

// RUN WHEN LOGGING IN //
passport.use(new Auth0Strategy({
  domain:'danielalegria.auth0.com',
  clientID: 'kAa0so05bJdOFweKVoH8MnxqXa5esGN0',
  clientSecret: 'Gl2LARHmlh4xIS8fvfXxsJtTVTVqYEGmuk3wvrT97k2r5s1ZY2GZQLdcZ6chBXba',
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  db.user.search_email([profile.displayName], function(err, user) {
    if (err) {
      return done(err);
    }
    else if (!user.length) {
      db.user.create([profile.nickname, profile.displayName], function(err, user) {
        if (err) {
          return done(err);
        }
        console.log('User created');

        db.order.insert([user[0].id], function(err, order) {
          if (err) {
            console.log('DB Create, durring user create: ', err);
          }

          user[0].order_id = order[0].id;
          return done(null, user[0]);
        })
      })
    }
    else {
      console.log('User found');
      db.order.read_incomplete([user[0].id], function(err, order) {
        if (err) {
          return console.log("Find User Auth, Order not found", err);
        }

        console.log('order: ', order);
        user[0].order_id = order[0].id;
        return done(null, user[0]);
      });
    }
  });
}));

// Puts the user on the session
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
  console.log('user: ', user);
	done(null, user);
});

//  POST  //

  //Order:
app.post('/api/order/add', orderController.addToCart);

//  PUT   //

  //User:
app.put('/api/user/current', isAuthed, userController.update);

  //Order:
app.put('/api/order/complete', orderController.complete);
app.put('/api/order/update/:id', orderController.updateItemInCart);

//  DELETE  //

  //Order:
app.delete('/api/order/delete/:id', orderController.deleteFromCart);


/*##############################
  Listen:
##############################*/

app.listen(port, function(){
  console.log("Listening on port " + 3000);
});
