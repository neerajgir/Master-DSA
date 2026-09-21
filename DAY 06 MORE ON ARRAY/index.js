// let arr = [28, 6, 75, 48, 84, 79];
// let max = Math.max(arr[0], arr[1]);
// let sMax  = Math.min(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++){
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i];
//     }else if(arr[i]>sMax){
//         sMax = arr[i];
//     }
// }

// console.log(sMax);

//reverse the array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let start = 0;
// let end = arr.length - 1;
// while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log(arr);


//all zeros left and all one right
// let arr = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
// let start = 0;
// let end = arr.length - 1;

// while(start < end){
//     if(arr[start] == 0){
//         start++;
//     }else if(arr[end] == 1){
//         end--;
//     }else{
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// console.log(arr);


//array left rotation by 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let temp = arr[0];
// for(let i = 1; i < arr.length; i++){
//     arr[i-1] = arr[i];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

//array left rotation by k
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = 3;
// let temp = [];
// for(let i = 0; i < k; i++){
//     temp.push(arr[i]);
// }

// for(let i = k; i < arr.length; i++){
//     arr[i - k] = arr[i];
// }

// for(let i = 0; i < k; i++){
//     arr[arr.length - k + i] = temp[i];
// }

// console.log(arr);

//linear search in array if elem found print the index else print -1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let elem = 5;
// let index = -1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == elem){
//         index = i;
//         break;
//     }
// }
// console.log(index);

//array reverse without using extra space
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let start = 0;
let end = arr.length - 1;
while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr);