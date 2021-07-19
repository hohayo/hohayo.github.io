// esm
import { add, subtract } from "./utils/esm";
import MyClass from './utils/esm';

// 以上兩行可以整合成一行
// import MyClass, { multiply, divide } from './utils/esm';

console.log("3 + 3 =", add(3, 3));
console.log("10 - 5 =", subtract(10, 5));

var myClass = new MyClass();
myClass.foo();

// commonjs
const utils = require('./utils/commonjs');

console.log('2 * 2 = ', utils.multiply(2, 2));
console.log('2 / 2 = ', utils.divide(2, 2));
