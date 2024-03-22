'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(item, price, quantity = 1) {
    this.items.push({
      item,
      price,
      quantity,
    });
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },
  calculateItemPrice() {
    return this.items.reduce((totalSumm, item) => {
      totalSumm += item.price * item.quantity;
      return totalSumm;
    }, 0);
  },

  increaseCount(count) {
    this.count += count;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log('str: ', str);
    console.log('Total price: ', this.totalPrice);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },
};

cart.add('салфетка', 15, 20);
cart.add('вилка', 5, 23);
cart.print();
cart.clear();
console.log(cart);
