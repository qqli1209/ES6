var arrayLike = {"0":"a","1":"b","2":"c",length:3};
var a = Array.from(arrayLike);
console.log(a);

console.log(Array.from("hello"));


var test = "1 2 3 4 5";
var b = Array.from(test.split(" "), x=>parseInt(x));
console.log("b:",b);

var c = b.find((x)=>x>3);
console.log(c); //4
var d = b.find(function(value,index,arr){
    return value>3;
});
console.log(d); //4

var e = b.findIndex(function(value,index,arr){
    return value>3;
});
console.log(e); //3

















