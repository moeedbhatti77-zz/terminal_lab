var express = require('express');
var router = express.Router();
const Users = require("../models/UsersModel");
/* GET users listing. */
router.get('/signup',async function(req, res, next) {
  res.render('signup');
});
router.get('/login',async function(req, res, next) {
  res.render('login');
});
router.post('/signup',async function(req, res, next) {
  user = new Users(req.body);
  await user.save();
  res.redirect('/users/login');
});

module.exports = router;
