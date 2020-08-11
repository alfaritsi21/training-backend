const route = require("express").Router();

// import route disini
const product = require('./routes/product');

//buat middle disini
route.use('/product', product);



module.exports = route;
