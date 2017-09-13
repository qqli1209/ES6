/**
 * reading doc of ES6
 * @copyright Qianqian Li 2017
 */

var it = idMaker();

function idMaker() {
  var index = 0;
  return {
    next: function() {
      return { value: index++, done: false };
    }
  };
}

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2

// array has its iterator
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }

for (let item of arr) {
  console.log(item); // a b c
}

let generator = function* () {
  yield 1;
  yield* [2,3];
  yield 3;
};
let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('\n---------------------------------------------\n');

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next()); // { value: 'hello', done: false }
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
console.log(hw.next()); // { value: undefined, done: true }

console.log('\n---------------------------------------------\n');

// lazy evaluation
function* gen() {
  yield 123 + 456;
}
var temp = gen();
console.log(temp.next()); // { value: 579, done: false }
console.log(temp.next()); // { value: undefined, done: true }

console.log('\n---------------------------------------------\n');

function* fib() {
  let [prev, curr] = [0, 1];
  while(true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for(let n of fib()) {
  if(n>30) {
    break;
  }
  console.log(n);
}

console.log('\n---------------------------------------------\n');

var clock = function* () {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};


var test = clock();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

// application




