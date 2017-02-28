/*##############################
  Require Database:
##############################*/

var db = require('./../massive');

/*##############################
  Exports:
##############################*/

module.exports = {

  /*##############################
    CRUD Functions:
  ##############################*/

  //NOTE Adapt these commented out functions for the menu when the admin page is created. NOTE

  // //CREATE
  // createOneProduct: function(req, res){
  //   db.shop.create_product([
  //     req.body.name,
  //     req.body.description,
  //     req.body.price,
  //     req.body.imageurl
  //   ], function(err, results){
  //     if (err){
  //       console.error(err);
  //       res.send(err);
  //     } else {
  //       res.send(results);
  //     }
  //   })
  // },

  //READ
  getMenuItems: function(req, res){
    db.menu.read_menu_items([], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getBeverageMenu: function(req, res){
    db.menu.read_beverage_menu(["beverage"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getWeekdayMorningMenu: function(req, res){
    db.menu.read_weekdaymorning_menu(["weekdaymorning"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getFridayMorningMenu: function(req, res){
    db.menu.read_fridaymorning_menu(["fridaymorning"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getWeekendMorningMenu: function(req, res){
    db.menu.read_weekendmorning_menu(["weekendmorning"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getLunchMenu: function(req, res){
    db.menu.read_lunch_menu(["lunch"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  getDinnerMenu: function(req, res){
    db.menu.read_dinner_menu(["dinner"], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  }

  // getOneProduct: function(req, res){
  //   db.shop.read_product([req.params.id],
  //   function(err, results){
  //     if (err){
  //       console.error(err);
  //       res.send(err);
  //     } else if (results.length === 0){
  //       res.status(404).send("That product does not exist.");
  //     } else {
  //       res.send(results[0]);
  //     }
  //   })
  // },
  //
  // //UPDATE
  // updateProduct: function(req, res){
  //   db.shop.update_product([
  //     req.params.id,
  //     req.body.name,
  //     req.body.description,
  //     req.body.price,
  //     req.body.imageUrl
  //   ],
  //   function(err, results){
  //     if (err){
  //       console.error(err);
  //       res.send(err);
  //     } else {
  //       res.send(results[0]);
  //     }
  //   })
  // },
  //
  // //DELETE
  //
  // deleteProduct: function(req, res){
  // db.shop.delete_product([req.params.id],
  //   function(err, results){
  //     if (err){
  //       console.error(err);
  //       res.send(err);
  //     } else if (results.length === 0){
  //       res.status(404).send("That product does not exist.")
  //     } else {
  //       res.send("Deleted " + results[0].name);
  //     }
  //   })
  // }

}
