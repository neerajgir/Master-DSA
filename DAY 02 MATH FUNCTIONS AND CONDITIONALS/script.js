//Math functions

console.log(Math.ceil(10.5)); //11 - rounds up
console.log(Math.floor(10.5)); //10 - rounds down
console.log(Math.round(10.2)); //10 - rounds to nearest integer
console.log(Math.round(10.5)); //11 - rounds to nearest integer
console.log(Math.abs(-20)); //20 - convert negative value into positive
console.log(Math.trunc(9.4456566565645)); //9 - remove decimal values
console.log(Math.pow(5, 2)); //5^2 = 25
console.log(Math.sqrt(25)); //5 - square root
console.log(Math.cbrt(27)); //3 - cube root
console.log(Math.min(10, 20, 30, 40, 50)); //10 - minimum value from the list
console.log(Math.max(10, 20, 30, 40, 50)); //50 - maximum value from the list
console.log(Math.random()); //random number between 0 and 1
console.log(Math.random() * 100); //random number between 0 and 100
let a = 304.4345366;
console.log(a.toFixed(2)); //304.43 - round to 2 decimal places
console.log(Math.PI); //3.141592653589793 - value of PI

//Q01- calculate the compound interest
// let p = Number(prompt('Enter Principle'));
// let r = Number(prompt('Enter Rate'));
// let t = Number(prompt('Enter Time'));

// /*
// A = P * (1 + r/100)^t
// CI = A - P
// */
// let b = p * Math.pow((1 + r / 100), t);
// let ci = b - p;
// console.log(`Compound Interest is ${ci}`);

//Q02- Generate a  otp
console.log(Math.floor(Math.random() * 10000 + 1)); //random number between 1 and 10000

//Q03- Area of triangle by Heron's formula
let x = 10,
  y = 20,
  z = 30;
let s = (x + y + z) / 2;
let area = Math.sqrt(s * (s - x) * (s - y) * (s - z));
console.log(area);


//Q04- circumference of a circle
let radius = 10;
let circumference = 2 * Math.PI * radius;
console.log(circumference);









