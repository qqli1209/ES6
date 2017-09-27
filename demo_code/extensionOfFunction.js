function log(x,y="lqq"){
    console.log(x,y);
}
log("hello");
log("hello","sbb");

function foo({x,y=5}){
    console.log(x,y);
}
foo({x:1});
foo({x:1,y:2});
foo({}); //undefined 5
console.log("--------------------------------");

function m1({x=0,y=0}={}){
    console.log([x,y]);
}
function m2({x,y} = {x:0,y:0}){
    console.log([x,y]);
}
m1(); //[ 0, 0 ]
m2(); //[ 0, 0 ]
m1({}); //[ 0, 0 ]
m2({}); //[undefined, undefined]
m1({x:1}); //[1,0]
m2({x:1}); //[1,undefined]

console.log(log.length, m1.length, m2.length); //1 0 0
console.log("--------------------------------");


function add(...values){
    var sum = 0;
    for(var i of values){
        sum += i;
    }
    console.log(sum);
}
add(); //0
add(1,2); //3
add(1,2,3,4); //10
console.log("--------------------------------");

var a = [1,2,3];
console.log(0,...a,4); //0 1 2 3 4

function myPush(arr,...items){
    arr.push(...items);
}
var d = [];
myPush(d,1,2);
console.log(d); //[1,2]

function myAdd(n1,n2){
    return n1+n2;
}
var nums = [5,6];
console.log(myAdd(...nums)); //11

var numbers = [3,5,2,33,67,89,2];
var max1 = Math.max.apply(null,numbers);
var max2 = Math.max(...numbers);
console.log("max: ",max1,max2);

//Array.prototype.push.apply(nums,numbers);
//nums.push(...numbers);
//console.log(nums);
console.log(...nums,...numbers);


var name = "lqq";
var nameArr = [...name];
console.log(nameArr); //[ 'l', 'q', 'q' ]

console.log("-----------------------------");
console.log(foo.name); //foo
var f1 = function(){};
console.log(f1.name); //f1



console.log("--------arrow function--------------");
var f1 = v => v*v;
console.log(f1(2)); //4

var f2 = ()=> null;
console.log(f2()); //null

var f3 = (n1,n2)=>n1+n2;
console.log(f3(5,6)); //11

var f4 = (n1,n2) => {n1 = n1*n1;return(n1+n2);};
console.log(f4(2,3)); //7

var getTempItem = id => ({id:id,name:"temp"});
console.log(getTempItem(18));

numbers.sort((n1,n2)=>n1-n2);
console.log(numbers);

console.log("-----------尾递归--------------");
function fac(n,total){
    if(n==1){
        return total;
    }
    return fac(n-1,n*total);
}
function fact(n){
    return fac(n,1);
}
console.log(fact(5));

function currying(f,n){
  return function(m){
    return f.call(this,m,n);
  };
}





















