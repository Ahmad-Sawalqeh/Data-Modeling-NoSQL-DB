
// eslint-disable-next-line strict
'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number},
  company: {type: String, required: true},
  type: { type: String, required: true, enum: ['electronic', 'furniture'] }
});

module.exports = mongoose.model('product', product);