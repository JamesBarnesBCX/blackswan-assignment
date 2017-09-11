var db = require('../dbconnection');
var User = {
  getAllUsers: function(callback) {
    return db.query("Select * from users", callback);
  },
  getUserByUsername: function(username, callback) {
    return db.query("Select * from users where username=?", [username], callback);
  },
  addUser: function(User, callback) {
    return db.query("Insert into users (`username`, `first_name`, `last_name`) values(?,?,?)", [User.username, User.first_name, User.last_name], callback);
  },
  updateUser: function(username, User, callback) {
    return db.query("update users set first_name=IFNULL(?, first_name),last_name=IFNULL(?, last_name), updated_at=NOW() where username=?", [User.first_name, User.last_name, username], callback);
  }
};
module.exports = User;
