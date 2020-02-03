/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

// connect our DB to the app we are building
const mongoose = require('mongoose');

const Categories = require('./categories/categories-schema.js');

const Products = require('./products/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// for testing
const electronics = new Categories({ name: 'electronics' });

electronics.save();

const product = new Products({ price: 12, weight: 55, quantity_in_stock: 7 });

product.save();
console.log('product: ',product);
