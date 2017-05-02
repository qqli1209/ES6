var foo = "bar";
var baz = {foo};
console.log(baz); //{foo:"bar"}

function f(x,y){
    return {x,y};
}
var a = f(1,2);
console.log(a); //{x:1, y:2}

function getPoint(){
    var x = 3;
    var y = 4;
    return {x,y};
}
console.log(getPoint());

console.log("---------------commonJS module-------------");
var ms = {};
function getItem(key){
    return key in ms ? ms[key] : null;
}
function setItem(key,value){
    ms[key] = value;
}
function clear(){
    ms = {};
}
setItem("a",1);
setItem("b",2);
console.log(ms); //{a:1,b:2}
console.log(getItem("a"),getItem("c")); //1 null
clear();
console.log(ms); //{}


console.log("----------------------------");
console.log(Object.is("ddd","ddd"),Object.is(NaN,NaN)); //true true
console.log(Object.is(+0,-0)); //false

var target = {a:1,b:1};
var src1 = {b:2,c:2};
var src2 = {c:3};
Object.assign(target,src1,src2);
console.log(target); //{ a: 1, b: 2, c: 3 }

console.log(Object.getOwnPropertyDescriptor(target,"a"));



console.log("----------prototype----------------");
var proto = {};
var obj = {x:1};
Object.setPrototypeOf(obj,proto);
proto.y = 2;
proto.z = 3;
console.log(obj.x,obj.y,obj.z); //1 2 3
console.log(Object.getPrototypeOf(obj)); //{y:1,z:3}


console.log("---------------------------");


