'use strict';

const productsSchema = require('./products-schema.js')

class Product {
  constructor() {

  }

  get(_id) {
    if (_id) {
      return productsSchema.findOne({ _id });
    } else {
      return productsSchema.find({});
    }
  }

  create(record) {
    let newRecord = new productsSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return productsSchema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return productsSchema.findByIdAndDelete(_id);
  }
}

module.exports = Product;
