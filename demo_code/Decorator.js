/**
 * @copyright Qianqian Li 2017
 * Decorator.js
 */

function testable(target) {
  target.ieTestable = true;
}

@testable
class Test {
  @readonly
  name() {
    return 'lqq';
  }
  print() {
    console.log('hello world');
  }
}













