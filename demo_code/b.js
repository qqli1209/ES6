/**
 * @copyright Qianqian Li 2017
 * a.js and b.js, circular reference
 */

console.log('b starting');
exports.done = false;
var a = require('./a.js');
console.log('in b.js, a.done =', a.done);
exports.done = true;
console.log('b done');
