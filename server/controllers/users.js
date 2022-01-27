var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.users.getAll(function(err, results) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    models.users.create([req.body.username], function(err, results) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });

    // PARSE THE DATA OF THE BODY INTO AN OBJECT

  } // a function which handles posting a message to the database
};
