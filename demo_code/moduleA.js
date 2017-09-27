/**
 * @copyright Qianqian Li 2017
 * moduleA.js and moduleB.js, circular reference in module
 */

import { bar } from './moduleB.js';

console.log('a.js');
console.log(bar);
export let foo = 'foo';

/*
b.js
undefined
a.js
bar
*/