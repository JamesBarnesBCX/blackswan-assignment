var db = require('../dbconnection');

var Task = {

  getAllTasks: function(username, callback) {
    return db.query("Select * from tasks where username=?", [username], callback);
  },
  getTaskById: function(username, id, callback) {
    return db.query("select * from tasks where username=? and id=?", [username, id], callback);
  },
  addTask: function(username, Task, callback) {
    return db.query("insert into tasks (name,description,date_time,username) values(?,?,?,?)",[Task.name,Task.description,Task.date_time, username],callback);
  },
  updateTask: function(username, id, Task, callback) {
    return db.query("update tasks set name=IFNULL(?, name), description=IFNULL(?, description), status=IFNULL(?, status), date_time=IFNULL(?, date_time), updated_at=NOW() where username=? and id=?", [Task.name, Task.description, Task.status, Task.date_time, username, id], callback);
  },
  deleteTask: function(username, id, callback) {
    return db.query("delete from tasks where username=? and id=?", [username, id], callback);
  }
};
module.exports = Task;
