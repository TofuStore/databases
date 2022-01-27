var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create([req.body.username, req.body.message, req.body.roomname], function(err, results) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  } // a function which handles posting a message to the database
};
