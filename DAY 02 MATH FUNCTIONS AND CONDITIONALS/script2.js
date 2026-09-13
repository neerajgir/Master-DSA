//if - else

if (100 >= 10 && 100 <= 100) {
    console.log('I am true');
} else {
    console.log('I am false');
}

//Q01 - accept two numbers and display the larger number
var num1 = 10;
var num2 = 20;
if (num1 > num2) {
    console.log(true);
} else {
    console.log(false);
}

//Q02 - accept a int and display whether it is even or odd
var num = 10;
if (num % 2 == 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

//Q03 - accept a name and age and display whether the person is eligible to vote
var name = 'John';
var age = 20;
if (age >= 18) {
    console.log(name + ' is eligible to vote');
} else {
    console.log(name + ' is not eligible to vote');
}

//Q04 - accept a three numbers and display the largest number
var num1 = 10;
var num2 = 20;
var num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' is the largest number');
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' is the largest number');
} else {
    console.log(num3 + ' is the largest number');
}

//Q05 - accept a year and display whether it is a leap year
var year = 2020;
if (year % 4 == 0) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

//Q06 - shop discount
var amount = 1000;
if (amount > 5000) {
    console.log('Discount is 20%');
} else if (amount > 3000) {
    console.log('Discount is 15%');
} else if (amount > 1000) {
    console.log('Discount is 10%');
} else {
    console.log('No Discount');
}

//Q07 - bijli bill
var units = 100;
var bill = 0;
if (units <= 100) {
    bill = units * 1.20;
} else if (units <= 300) {
    bill = units * 1.50;
} else if (units <= 500) {
    bill = units * 1.80;
} else {
    bill = units * 2.00;
}
console.log ('Bill is ' + bill);
