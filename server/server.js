/*##############################
  Variables:
##############################*/

var express = require('express');
var bodyParser = require('body-parser')
var mainController = require('./controllers/mainController');
var app = express();
app.use(express.static(__dirname + './../public'));
var port = 3000;


/*##############################
  Middleware:
##############################*/

app.use(bodyParser.json());

/*##############################
  *** CRUD Endpoints: ***
##############################*/

/*##############################
  Read-Only:
##############################*/

//GET
app.get('/api/shop/:id', mainController.getOneProduct);
app.get('/api/shop', mainController.getAllProducts);

/*##############################
  Writeable:
##############################*/

//POST


//PUT


//DELETE


/*##############################
  Listen:
##############################*/

app.listen(port, function(){
  console.log("Listening on port " + 3000);
});
