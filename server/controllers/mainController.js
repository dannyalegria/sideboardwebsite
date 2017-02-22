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

  //CREATE
  createOneProduct: function(req, res){
    db.create_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    ], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },

  //READ
  getAllProducts: function(req, res){
    db.read_products([], function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
      }
    })
  },

  getOneProduct: function(req, res){
    db.read_product([req.params.id],
    function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else if (results.length === 0){
        res.status(404).send("That product does not exist.");
      } else {
        res.send(results[0]);
      }
    })
  },

  //UPDATE
  updateProduct: function(req, res){
    db.update_product([
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl
    ],
    function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else {
        res.send(results[0]);
      }
    })
  },

  //DELETE

  deleteProduct: function(req, res){
  db.delete_product([req.params.id],
    function(err, results){
      if (err){
        console.error(err);
        res.send(err);
      } else if (results.length === 0){
        res.status(404).send("That product does not exist.")
      } else {
        res.send("Deleted " + results[0].name);
      }
    })
  }

}
