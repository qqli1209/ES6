/**
 * @copyright Qianqian Li 2017
 * module.js
 */

/*
import Rectangle, { getYear, mul, year } from './profile';

console.log(year); // 2017
getYear(); // This is 2017 speaking.
console.log(mul(2,3)); // 6

var rec = new Rectangle(4,5);
console.log(rec.getArea); // 20
*/

import * as profile from './profile';

import Rectangle from './profile';

console.log(profile.year); // 2017
profile.getYear(); // This is 2017 speaking.
console.log(profile.mul(2,3)); // 6

var rec = new Rectangle(4,5);
console.log(rec.getArea); // 20



