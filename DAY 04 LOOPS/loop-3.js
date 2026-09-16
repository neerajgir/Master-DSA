//do while 
// let i = 1;
// do{
//     console.log("Hello")
//     i++
// }while(i<=5);

// let user;
// do{
//     console.log("Namaste Duniya")
//     user = prompt("app continue chahte ho kya? yes/no").toLowerCase();
// }while(user === 'yes')

//guess the number

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let userGuess;

// do{
//     userGuess = Number(prompt("Guess a number between 1 and 10:"));
//     if(isNaN(userGuess) || userGuess < 0 || userGuess > 100){
//         console.log("Please enter a valid number between 1 and 100.");
//         continue;
//     }
//     if(userGuess > randomNumber){
//         console.log("Too high! Try again.");
//     }else if(userGuess < randomNumber){
//         console.log("Too low! Try again.");
//     }
// }while(userGuess !== randomNumber);

// console.log("Congratulations! You guessed the correct number:", randomNumber);


//calculator
// let userInput;
// do{
//     let num1 = Number(prompt("Enter first number:"));
//     let num2 = Number(prompt("Enter second number:"));
//     let operator = prompt("Enter operator (+, -, *, /):");

//     let result;

//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid operator");
//             continue;
//     }

//     console.log("Result:", result);

//     userInput = prompt("Do you want to continue? (yes/no)").toLowerCase();
// }while(userInput === 'yes');


