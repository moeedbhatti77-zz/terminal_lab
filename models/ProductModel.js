const mongoose = require ('mongoose');

const productSchema =  mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    rating : Number
});

// const Faculty = mongoose.model('test',facultySchema);
const Product = mongoose.model('product',productSchema);
module.exports = Product;