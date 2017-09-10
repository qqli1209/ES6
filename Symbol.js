var s1 = Symbol("foo");
console.log(s1, typeof s1, s1.toString()); //symbol(foo) symbol symbol(foo)
var s2 = Symbol("foo");

console.log(s1==s2); //false

console.log(Boolean(s1), Boolean(Symbol())); //true true
if(s1){
    console.log("touch here");
}


console.log("---------------------------");
var temp = Symbol("temp");
var a = {
    [temp]:"hi"
};
var mySymbol = Symbol("mySymbol");
a[mySymbol] = "hello";
console.log(a, a[temp], a[mySymbol]);
var key = Object.getOwnPropertySymbols(a);
console.log(key);




const color_red = Symbol();
const color_green = Symbol();
function getComplement(color){
    switch(color){
        case color_red:
            return "red";
        case color_green:
            return "green";
        default:
            throw new Error("none");
    }
}

console.log(getComplement(color_red));

console.log("-----------------------------");



var shapeType = {
    triangle : Symbol(),
    rectangle : Symbol()
};

function getArea(shape,options) {
    var area = 0;
    switch(shape){
        case shapeType.triangle:
            area = 0.5*options.height*options.width;
            break;
        case shapeType.rectangle:
            area = options.height*options.width;
            break;
        default:
            break;
    }
    return area;
}

console.log(getArea(shapeType.triangle, { width:100, height:100 }));
console.log(getArea(shapeType.rectangle, { width:100,height:100 }));




console.log("-----------------------------");
var a0 = Symbol("a");
var a1 = Symbol.for("a");
var a2 = Symbol.for("a");
console.log(a0===a1); //false
console.log(a1===a2); //true

console.log(Symbol.keyFor(a0), Symbol.keyFor(a1)); //undefined "a"
















