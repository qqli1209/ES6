/**
 * @copyright Qianqian Li 2017
 * profile.js
 */

export var year = 2017;
export function getYear() {
  console.log('This is 2017 speaking.');
}

export function mul(x, y) {
  return x*y;
}

export default class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get getArea(){
    return this.height*this.width;
  }
}

