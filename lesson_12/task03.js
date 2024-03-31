'use strict';

const rectangle = {
  width: 5,
  height: 5,

  set widthValue(a) {
    this.width = a;
  },

  set heightValue(b) {
    this.height = b;
  },

  get perimeter() {
    const str = ' см.';
    return 2 * (this.width + this.height) + str;
  },

  get area() {
    const str = ' кв. см.';
    return this.width * this.height + str;
  },
};

rectangle.widthValue = 13;
rectangle.heightValue = 15;
console.log(rectangle.height, rectangle.width);
console.log(rectangle.perimeter);
console.log(rectangle.area);


