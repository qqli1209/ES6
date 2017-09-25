/**
 * @copyright Qianqian Li 2017
 * Decorator.js
 */

import {
  autobind,
  deprecate,
  readonly
} from 'core-decorators';

class Person {
  @autobind
  getPerson() {
    return this;
  }
}

let person = new Person();
let getPerson = person.getPerson;

console.log(getPerson() === person); // true

class P {
  @deprecate
  facepalm() {}

  @deprecate('We stopped facepalming')
  facepalmHard() {}

  @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
  facepalmHarder() {}
}

let p = new P();
// DEPRECATION Person#facepalm: This function will be removed in future versions.
p.facepalm();
p.facepalmHard();
// DEPRECATION Person#facepalmHard: We stopped facepalming

p.facepalmHarder();
// DEPRECATION Person#facepalmHarder: We stopped facepalming


class Meal {
  @readonly
  test() {
    console.log('test');
  }
}
var m = new Meal();
m.test();
/*
m.test = function() {
  console.log('changed'); // Cannot assign to read only property 'test' of object '#<Meal>'
}
*/







