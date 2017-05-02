{
    let a =3;
    var b = 4;
}
console.log(b); //4
//console.log(a); //error

/*
{
    b = 5; //reference error
    let b;
}
*/

var a = [];
for(var i=0;i<10;i++){
    a[i] = function(){
        console.log(i);
    };
}
a[3](); //10

var b = [];
for(let i=0;i<10;i++){
    b[i] = function(){
        console.log(i);
    };
}
b[3](); //3
console.log("-----------------------------");


var c = [];
for(var i=0;i<10;i++){
    c[i] = (function(j){
        console.log(j);
    })(i);
} //0 1 2 3 4 5 6 7 8 9

console.log("-----------------------------");

var temp = 5;
function test(){
    console.log(temp);
    if(0){
        var temp = 100;
    }
}
test(); //undefined,函数内的temp声明提升导致temp为undefined

function test1(){
    let n = 1;
    {
        let n = 4;
    }
    console.log(n);
}
test1(); //1

{
    let a = "s";
    function f(){
        return a;
    }
}
var b = f();
console.log(b);

{
    const NAME = "lqq";
}
//console.log(NAME); //error

const foo = {};
foo.name="sbb"; //ok
console.log(foo);
//foo = {}; //error






