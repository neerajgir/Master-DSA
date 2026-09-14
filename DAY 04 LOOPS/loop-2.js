//break and continue

let c = 10;
for (let i = 1; i <= c; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

let b = 10;

for (let i = 1; i <= b; i++) {
    if (i % 2 == 0) {
        break;
    }
    console.log(i);
}

//while
// let i = 10;
// let j = 1;
// while (j<=i) {
//     console.log("Hello World");
//     i++
// }

// let a = 563;
// let sum = 0;
// while (a>0) {
//     let rem = a%10;
//     sum = sum + rem;
//     a = Math.floor(a/10)
// }
// console.log(sum);


//reverse a number

let p = Number(prompt("Enter a number"));

let rev  = 0;
while(p>0){
    let rem = p%10;
    rev = (rev * 10) + rem;
    p = Math.floor(p/10);
}

console.log(rev)


//automorphic number

let a = Number(prompt("Enter a number"));
let copy = a;
let sqr = a * a;

let count = 0;
while (a>0) {
    count++
    a = Math.floor(a/10);
}

if (sqr%Math.pow(10, count)== copy) {
    console.log("Automorphic number")
}else{
    console.log("no automorphic num")
}


//switch 
let num = Number(prompt("Enter a number"));
switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
    console.log("Sunday")
}

