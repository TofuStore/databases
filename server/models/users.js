var db = require('../db');

module.exports = {
  getAll: function (callback) {
    //use db to get all the messages
    db.dbConnection.query('SELECT * FROM users', [], (err, results) => {
      callback(err, results);
    });

  }, // a function which produces all the messages
  create: function (username, callback) {
    db.dbConnection.query('INSERT INTO users (username) VALUES (?)', username, (err, results) => {
      callback(err, results);
    });
  }
};
