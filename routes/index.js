var express = require('express');
var router = express.Router();
var Product = require('../models/ProductModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  products = Product.find();
  // console.log(products.name);
  res.render('index',{products});
});

module.exports = router;
