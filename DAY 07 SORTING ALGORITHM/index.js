//binary search
// let arr = [10, 45, 67, 69, 23, 190, 200];

// if(binarySearch(arr, 67) == -1){
//     console.log("Not Found");
// }else {console.log("element found");}

// function binarySearch(arr, target){
//     let s = 0;
//     let e = arr.length - 1
//     while(s<=e){
//         let mid = Math.floor((s+e)/2)
//         if(arr[mid]== target){
//             return mid;
//         }else if(arr[mid]> target){
//             e = mid - 1;
//         }else{
//             s = mid + 1;    
//         }
//     }
//     return -1
// }


//sorting algorithms
//bubble-sort - loop inside loop
// let arr = [3, 5, 1, 9, 7];
// for(let i = 0; i<arr.length-1; i++){
//     for(let j = 0; j<arr.length-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

//selection sort - loop inside loop

// let arr = [10, 1, 5, 3, 15];
// for(let i = 0; i<arr.length-1; i++){
//     let min = i;
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[j]<arr[min]){
//             min = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
// }
// console.log(arr)

//insertion sort

let arr = [2, 10, 3, 5, 15, 9];
for(let i = 1; i<arr.length; i++){
    let current = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>current){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
}
console.log(arr)