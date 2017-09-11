var express = require('express');
var router = express.Router();
var Users = require('../models/User');

router.get('/:username?', function(req, res, next) {
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

router.post('/', function(req, res, next) {
  Users.addUser(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put('/:username', function(req, res, next) {
  Users.updateUser(req.params.username, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
