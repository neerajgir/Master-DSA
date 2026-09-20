// let arr = [10,20,30,40,50]

// arr.push(60) - insert at last
// arr.unshift(60) - insert at first
// arr.pop() - del at last
// arr.shift() - del at first
// console.log(arr.length) check length
// console.log(arr[2])

// arr[2] = 100; - add value at 3rd index

// let size = Number(prompt("Enter array size."));

// let arr  = new Array(size)
// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter element"))
//     sum = sum + arr[i]
// }
// console.log(`sum: ${sum}`)


// let arr = [10, 4,3,6,8,33,55,55,66]
// let max = arr[0];

// for(let i = 1; i < arr.length; i++ ){
//     if(arr[i] > max) max = arr[i]
// }

// console.log(`max element: ${max}`)

let arr = [10, 4,3,6,8,33,55,55,66]
let min = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) min = arr[i]
}

console.log(`min element: ${min}`)

