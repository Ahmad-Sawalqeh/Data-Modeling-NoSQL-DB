// eslint-disable-next-line strict
'use strict';

require('@code-fellows/supergoose');

const Product = require('../products/products.js');
const product = new Product();

describe('Product Model', () => {
  it('can create() a new product item', () => {
    let obj = { name: 'iphone', price: 956, company: 'apple', type: 'electronic' };

    return product.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product item', () => {
    let obj = { name: 'S10+', price: 859, company: 'samsung', type: 'electronic'};

    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(productItem => {
            Object.keys(obj).forEach(key => {
              expect(productItem[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it.skip('can update() a product item', () => {
    let obj = { name: 'carpet', price: 159, company: 'seda', type: 'furniture'};

    return product.create(obj)
      .then(record => {
        let newData = record.price;
        newData = 149;
        return product.update(record._id, newData)
          .then(productItem => {
            expect(productItem.price).toEqual(149);
          });
      });
  });

  it.skip('can delete() a product item', () => {
    let obj = { name: 'S10+', price: 859, company: 'samsung', type: 'electronic'};

    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(productItem => {
            Object.keys(obj).forEach(key => {
              expect(productItem[key]).toEqual(obj[key]);
            });
          });
      });
  });

});
