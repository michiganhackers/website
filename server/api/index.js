const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./models/user');
const secrets = require('../secrets');

router.post('/v1/register', (req, res) => {
  var nick = new User({
    username: 'mrhackerman',
    password: 'hunter2',
    admin: false
  });
  
  nick.save( err => {
    if (err) throw err;
    
    res.json({ success: true });
  });
});

router.post('/v1/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found' })
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password' })
      } else {
        var token = jwt.sign(user, secrets.secret, {
          expiresIn: '24h'
        });
        
        res.json({
          success: true,
          message: 'Welcome',
          token: token
        });
      }
    }
  });
});

router.get('/v1/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

module.exports = router;