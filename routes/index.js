var express = require('express');
var router = express.Router();
var Product = require('../models/ProductModel');


/* GET home page. */
router.get('/',async  function(req, res, next) {
  products = await Product.find();
  // console.log(products);
  res.render('index',{ products });
});
router.get('/add',async  function(req, res, next) {
  res.render('add');
});
router.get('/cart',async  function(req, res, next) {
  cart = req.cookies.cart;
  if(!cart)
  cart = [];
  res.render('cart',{cart});
});
router.get('/cart/:id',async  function(req, res, next) {
  product = await Product.findById(req.params.id);
  console.log(product);
  let cart = [];
  if(req.cookies.cart) cart =  req.cookies.cart;
  cart.push(product);
  res.cookie('cart',cart);
  res.redirect('/');
});
router.post('/add',async  function(req, res, next) {
  product = new Product(req.body);
  console.log(product);
  await product.save();
  res.redirect('/');
});
module.exports = router;
