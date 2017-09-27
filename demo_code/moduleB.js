/**
 * @copyright Qianqian Li 2017
 * moduleA.js and moduleB.js, circular reference in module
 */

import { foo } from './moduleA.js';

console.log('b.js');
console.log(foo);
export let bar = 'bar';

/*
a.js
undefined
b.js
foo
*/