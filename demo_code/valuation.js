var [a,b,c] = [1,2,3];
console.log(a,b,c);
var [[a],[[b],c]] = [[4],[[5],6]];
console.log(a,b,c);

let [x,...y] = [1,2,3,4];
console.log(x,y); //1 [2,3,4]


//自己写的迭代器
function* fibs(){
    var a = 0;
    var b = 1;
    while(true){
        yield a;
        [a,b] = [b,a+b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);
console.log();



var arr = [1,2,3,4,5];
//Built-in iterables
for(let value of arr){
    console.log(value);
}
console.log();



function fe(){
    console.log("aaa");
    return null;
}
let [aaa=fe()] = [1];
console.log(aaa); //1

var {baz} = {baz:"aaa"};
console.log(baz); //aaa



var {max,min,sin} = Math;
console.log(max(1,2)); //2
console.log(min(1,2)); //1
console.log(sin(1)); //0.8415


var t = [[1,2],[3,4]].map(([a,b])=>a+b);
console.log(t);


var dic = new Map();
dic.set("a",true);
dic.set("b",false);
for(let [key,value] of dic){
    console.log(key,":",value);
}












