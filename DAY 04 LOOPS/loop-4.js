//nested looping - pattern 

for(let i = 1; i <= 5; i++){
    let row = '';
    for(let j = 1; j <= i; j++){
        row += '*';
    }
    console.log(row);
}

//1
//12
//123
//1234
//12345
// for(let i = 1; i <= 5; i++){
//     let row = '';
//     for(let j = 1; j <= i; j++){
//         row += j;
//     }
//     console.log(row);
// }

//A
//AB
//ABC
//ABCD
//ABCDE
// for(let i = 1; i <= 5; i++){
//     let row = '';
//     for(let j = 0; j<i; j++){
//         row += String.fromCharCode(65 + j);
//     }
//     console.log(row)
// }

let temp = 5;
for(let i = 1; i <= 5; i--){
    let row = '';
    for(let j = 1; j <= i; j++){
        row += '*';
    }
    console.log(row);
}


for (let i = 1; i <= n; i++) {
    let row = [];
        
    // Add spaces for left alignment
    for (let j = 1; j <= n - i; j++) {
        row.push(" ");
    }
        
    // Add stars
    for (let k = 1; k <= i; k++) {
        row.push("*");
    }
        
    console.log(row.join(" "));
}

for (let i = 0; i < n; i++) {
    let row = "";
        
    // Leading spaces
    for (let j = 0; j < i; j++) {
        row += " ";
    }
        
    // First star
    row += "*";
        
    // Middle spaces and second star (if not the last row)
    if (i < n - 1) {
        let innerSpaces = 2 * (n - 1 - i) - 1;
        for (let k = 0; k < innerSpaces; k++) {
            row += " ";
        }
        row += "*";
    }
        
    console.log(row);
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (i === j || i + j === n - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}