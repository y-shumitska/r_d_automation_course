const a = 9.99;
const b = 0;
const c = "Jane";
const d = "Anna";
const e = true;
const f = false;
let g = null;

console.log(a == 9); // logs 'false'
console.log(a > b && a <= 10); // logs 'true'
console.log(1 > b || 1 < a); // logs 'true'
console.log (b == f); // logs 'true'
console.log (b === f); // logs 'false'
console.log (d > c); // logs 'false' because A is lower in the alphabetical order than J
console.log(e != f); // logs 'true'
console.log(g ?? c); // logs 'Jane'
