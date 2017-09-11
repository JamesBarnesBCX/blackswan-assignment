var express = require('express');
var router = express.Router();
var Users = require('../models/User');
var Tasks = require('../models/Task');

// Get User and all Users
router.get('/:username', function(req, res, next) {
  if (req.params.username) {
    Users.getUserByUsername(req.params.username, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Users.getAllUsers(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

//  Get a Task or all Tasks for a User
router.get('/:username/tasks/:id?', function(req, res, next) {
  if (req.params.id) {
    Tasks.getTaskById(req.params.username, req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {

    Tasks.getAllTasks(req.params.username, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

//  Add a User
router.post('/', function(req, res, next) {
  Users.addUser(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

//  Add a Task
router.post('/:username/tasks/', function(req, res, next) {

  Tasks.addTask(req.params.username, req.body, function(err, count) {

    //console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

//  Update a User
router.put('/:username', function(req, res, next) {
  Users.updateUser(req.params.username, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//  Update a Task
router.put('/:username/tasks/:id?', function(req, res, next) {
  Tasks.updateTask(req.params.username, req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//  Delete a Task
router.delete('/:username/tasks/:id?', function(req, res, next) {
  Tasks.deleteTask(req.params.username, req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }

  });
});

module.exports = router;
