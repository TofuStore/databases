var db = require('../db');

module.exports = {
  getAll: function (callback) {
    //use db to get all the messages
    db.dbConnection.query('SELECT * FROM messages', [], (err, results) => {
      callback(err, results);
    });

  }, // a function which produces all the messages
  create: function (params, callback) {
    db.dbConnection.query('INSERT INTO messages (username, textField, roomname) VALUES (?, ?, ?)', params, (err, results) => {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};
