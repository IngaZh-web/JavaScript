'use strict';

const cart = {
  items: [],
  count: 0,
  discount: '',
  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    this.discount = promocode;
    if (typeof promocode === 'string' && promocode === 'METHED') {
      this.discount = 15;
    } else if (typeof promocode === 'string' && promocode === 'NEWYEAR') {
      this.discount = 21;
    }
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
      totalSumm += (item.price - (item.price * this.discount) / 100) * item.quantity;

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
