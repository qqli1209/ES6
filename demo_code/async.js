/*
function* gen(x){
  try{
    var y = yield x + 2;
  } catch(e){
    console.log(e);
  }
  return y*2;
}
var g = gen(1);
console.log(g.next()); //{value:3, done:false}
console.log(g.next(5)); //{value:10, done:true}
console.log(g.next()); //{value:undefined, done:true}
//console.log(g.throw("an error!"));

var fetch = require('node-fetch');
function* gen1(){
  var url = "https://api.github.com/users/github";
  var res = yield fetch(url);
  console.log(res.bio);
}
var g1 = gen1();
var result = g1.next();
result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});

console.log("---------------------------------");


var Thunk = function(fn){
  return function(){
    var args = Array.prototype.slice.call(arguments);
    return function(callback){
      args.push(callback);
      return fn.apply(this,args);
    }
  }
};

var thunkify = require("thunkify");
*/

// 2017.9.14 review

var thunkify = require("thunkify");
var fs = require('fs');

import "isomorphic-fetch"

var readFile = function(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data)=> {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
};

var asyncReadFile = async function () {
  var f1 = await readFile('../text file/1.txt');
  var f2 = await readFile('../text file/2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};
asyncReadFile();


async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello, world', 1000);

async function test(){
  return 'test';
}

test().then((value) => {
  console.log(value); // test
});

async function errorTest() {
  return new Error('error');
}

// errorTest().then(v => {console.log(v)}, e => {console.log(e)}); // error

async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}

getTitle('https://tc39.github.io/ecma262/').then(console.log);











