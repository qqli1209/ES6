/**
 * @copyright Qianqian Li, 2017
 * file class.js
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static staticMethod() {
    return this.baz(); // this indicates class Point instead of instance
  }

  static baz() {
    return 'This is a static method';
  }

  baz() {
    return 'This is not a static method';
  }

  toString() {
    return '(' + this.x + ',' +this.y + ')';
  }

  get value() {
    return [this.x, this.y];
  }

  set value(newValue) {
    this.x = newValue.x;
    this.y = newValue.y;
  }
}

let p1 = new Point(1,2);
console.log(p1.toString());
console.log(p1.constructor === Point.prototype.constructor); // true
console.log(Point === Point.prototype.constructor); // true
console.log(Object.getOwnPropertyNames(Point)); // [ 'length', 'name', 'prototype' ]
console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'toString' ]

console.log(p1.value); // [1, 2]
p1.value = { x: 3, y: 4 };
console.log(p1.value); //[3, 4]

console.log(Point.staticMethod()); // This is a static method
// console.log(p1.staticMethod()); // error: p1.staticMethod is not a function


class SuperPoint extends Point {
  static staticMethod() {
    return super.staticMethod() + ' in SuperPoint.'
  }
}

console.log(SuperPoint.staticMethod()); // This is a static method

class Shape {
  constructor() {
    if(new.target === Shape) {
      console.error('Shape can not be Instantiated.');
    }
  }
}

class Rectangle extends Shape {
  constructor(props) {
    super(props);
    this.x = props.x;
    this.y = props.y;
  }
}

var s = new Shape(); // Shape can not be Instantiated.
var r = new Rectangle({ x: 1, y: 2 });

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString();
  }
}

var colorP1 = new ColorPoint(1, 2, 'red');
console.log(colorP1.toString()); // red (1,2)
