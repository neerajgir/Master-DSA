function calculateCurrency(amount) {
    let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let result = {};

    for (let note of denominations) {
        if (amount >= note) {
            result[note] = Math.floor(amount / note);
            amount %= note;
        }
    }

    return result;
}

let amount = parseInt(prompt("Enter amount in Indian Rupees: "), 10);
if (!isNaN(amount) && amount > 0) {
    let notes = calculateCurrency(amount);
    console.log("Currency breakdown:");
    for (let [note, count] of Object.entries(notes)) {
        console.log(`₹${note}: ${count}`);
    }
} else {
    console.log("Please enter a valid amount.");
}

//q02

function categorizeMovie(rating, movieName) {
    let category;

    if (rating >= 0.0 && rating <= 2.0) {
        category = "Flop";
    } else if (rating >= 2.1 && rating <= 3.4) {
        category = "Semi-hit";
    } else if (rating >= 3.5 && rating <= 4.5) {
        category = "Hit";
    } else if (rating >= 4.6 && rating <= 5.0) {
        category = "Super Hit";
    } else {
        console.log("Invalid rating. Please enter a rating between 0.0 and 5.0.");
        return;
    }

    console.log(`${movieName} is a ${category}.`);
}

// Example usage
let rating = parseFloat(prompt("Enter movie rating (0.0 - 5.0):"));
let movieName = prompt("Enter movie name:");

if (!isNaN(rating) && movieName) {
    categorizeMovie(rating, movieName);
} else {
    console.log("Invalid input. Please enter a valid rating and movie name.");
}


//q03

function calculateSalary(gender, yearsOfService, qualification) {
    let salary = 0;

    if (gender === "Male") {
        if (yearsOfService >= 10) {
            salary = qualification === "Post-Graduate" ? 15000 : 10000;
        } else {
            salary = qualification === "Post-Graduate" ? 10000 : 7000;
        }
    } else if (gender === "Female") {
        if (yearsOfService >= 10) {
            salary = qualification === "Post-Graduate" ? 12000 : 9000;
        } else {
            salary = qualification === "Post-Graduate" ? 10000 : 6000;
        }
    } else {
        console.log("Invalid gender input.");
        return;
    }

    console.log(`The salary for a ${gender} with ${yearsOfService} years of service and ${qualification} qualification is ₹${salary}.`);
}

// Example usage:
let gender = prompt("Enter Gender (Male/Female):");
let yearsOfService = parseInt(prompt("Enter Years of Service:"), 10);
let qualification = prompt("Enter Qualification (Post-Graduate/Graduate):");

if (!isNaN(yearsOfService) && (gender === "Male" || gender === "Female") && (qualification === "Post-Graduate" || qualification === "Graduate")) {
    calculateSalary(gender, yearsOfService, qualification);
} else {
    console.log("Invalid input. Please enter correct values.");
}
