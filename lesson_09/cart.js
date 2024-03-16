"use strict";

const cart = {
  items: [], //товары
  totalPrice: 0, //общая стоимость корзины
  count: 0, // количество товаров
  getTotalPrice() {
    return this.totalPrice;
  },

  add: function (item, price, quantity = 1) {
    cart.items.push({
      item: item,
      price: price,
      quantity: quantity,
    });
    cart.increaseCount(quantity);
    cart.calculateItemPrice();
  },
  calculateItemPrice() {
    this.totalPrice = cart.items.reduce((totalSumm, item) => {
      totalSumm += item.price * item.quantity;
      return totalSumm;
    }, 0);
  },

  increaseCount(count) {
    this.count += count;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log("str: ", str);
    console.log("Total price: ", this.getTotalPrice());
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
};

const one = new cart.add("салфетка", 15, 20);
const two = new cart.add("вилка", 5, 23);
cart.print();
console.log(cart);
cart.clear();
console.log(cart);
