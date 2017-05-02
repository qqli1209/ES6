
console.log("\u{20BB7}");

var a = "𠮷a";
console.log(a.charAt(0));
console.log(a.length,a.charCodeAt(0),a.charCodeAt(1));
console.log(a.codePointAt(0),a.codePointAt(1),a.codePointAt(2));


function is32Bit(c){
    console.log(c.codePointAt(0)>0xFFFF);
}
is32Bit("𠮷");  //true
is32Bit("a"); //false

for(let ch of a){
    console.log(ch.codePointAt(0).toString(16));
}


console.log();
console.log(String.fromCharCode(0x20BB7),String.fromCharCode(0x0BB7));
console.log(String.fromCodePoint(0x20BB7));



var text = "hello,word!";
console.log(text.includes("llo"));
console.log(text.startsWith("llo",3));
console.log(text.startsWith("hel"));
console.log(text.endsWith("d!"));
console.log(`text.endsWith("d!"):
${text.endsWith("d!")}`);



var x1 = 1;
var x2 = 2;
console.log(`${x1}+${x2}=${x1+x2}`);
console.log();


let str = 'return ' + '`hello ${name}`';
let func = new Function('name',str);
console.log(func('Jack'));


console.log(/^\uD83D/u.test('\uD83D\uDC2A')); //false
console.log(/^\uD83D/.test('\uD83D\uDC2A')); //true




