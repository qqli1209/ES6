/**
 * @copyright Qianqian Li 2017
 * a.js and b.js, circular reference
 */

console.log('a starting');
exports.done = false;
var b = require('./b.js');
console.log('in a.js, b.done =', b.done);
exports.done = true;
console.log('a done');