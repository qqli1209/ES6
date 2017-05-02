(function(){
    console.log(0o11==011);
})();

/*//error
(function(){
    'use strict';
    console.log(0o11==011);
})();
*/

console.log(Number(0o11)); //9
console.log(Number(0b11)); //3

console.log(Number.EPSILON);

console.log(Math.trunc(4.3),Math.trunc(4.9),Math.trunc(-1.2),Math.trunc(-0.2));
console.log(Math.trunc("123.456"),Math.trunc("hi"));
















