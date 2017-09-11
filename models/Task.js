var db = require('../dbconnection');

var Task = {

  getAllTasks: function(callback) {

    return db.query("Select * from tasks", callback);

  },
  getTaskById: function(id, callback) {

    return db.query("select * from tasks where Id=?", [id], callback);
  },
  addTask: function(Task, callback) {
    console.log("inside service");
    console.log(Task.Id);
    return db.query("Insert into tasks values(?,?,?)", [Task.Title, Task.Status], callback);
    //return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
  },
  deleteTask: function(id, callback) {
    return db.query("delete from tasks where Id=?", [id], callback);
  },
  updateTask: function(id, Task, callback) {
    return db.query("update tasks set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
  }
};
module.exports = Task;
