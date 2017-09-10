
//默认参数
function log(x, y="world"){
    console.log(x,y);
}
log("hello"); //hello world
log("hello","lqq"); //hello lqq

function Point(x=0, y=0){
    this.x = x;
    this.y = y;
}
var p = new Point();
console.log(p); // Point { x: 0, y: 0 }
var p1 = new Point(1,1);
console.log(p1); // Point { x: 1, y: 1 }
const c = 5;
//c = 9; //error,不能改变const

var x = 99;
function foo(y=x+1){
    console.log(y);
}
foo(); //100
x = 299;
foo(); //300

//参数默认值与解构赋值默认值结合使用
function foo1({x,y=5}){
    console.log(x,y);
}
foo1({}); //undefined, 5
foo1({x:3}); //3, 5
//foo1(); //error,调用的参数不是对象，x和y就不会生成，就会报错

//e.g
function fetch(url,{body="",method="GET",headers={}}){
    console.log(method);
}
fetch("liqianqian.me",{}); //GET
//fetch("liqianqian.me");//error

//下面的可以省略第二个参数，因为第二个参数有默认值
function fetch1(url,{method="GET"} = {}){
    console.log(method);
}
//函数fetch没有第二个参数时，函数参数的默认值就会生效，
//然后才是解构赋值的默认值生效，变量method才会取到默认值GET。
fetch1("liqianqian.me"); //GET


var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}

foo(); // 3
console.log(x); // 1



//美团笔试题
console.log(16 == "0x10"); //true

console.log(NaN == NaN); //false

console.log(undefined === undefined); //true

console.log("1" === 1); //false
console.log("1" == 1); //true

var str = "Welcom to MeituanDianping";
var pattern = /(meituan)+|(dianping)+/ig;
var output = pattern.test(str);
console.log(output); //true



//普通队列事件 优先级要高于 process.nextTick(idle观察者)
//优先级要高于 setTimeout
//优先级要高于 setImmediate(check观察者)
//在每一轮循环检查中, idle观察者先于I/O观察者, I/O观察者先于check观察者.
var start = new Date;
setTimeout(function(){
    var end = new Date;
    console.log('timeout');
}, 500);
setImmediate(function(){
    var end = new Date;
    console.log('immediate');
});
process.nextTick(function(){
    var end = new Date;
    console.log('processnext tick');
});
while (new Date - start < 500){}; //processnext tick,timeout,immediate



//1 4 3 2

console.log("1");

setImmediate(function () {
    console.log("2");
});

setTimeout(function () {
    console.log("3");
},0);

process.nextTick(function () {
    console.log("4");
});