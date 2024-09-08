// Data for Mark and John
let markMass = 78; // kg
let markHeight = 1.69; // m
let johnMass = 92; // kg
let johnHeight = 1.95; // m

// Calculate BMIs
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// Determine who has a higher BMI
let markHigherBMI = markBMI > johnBMI;

// Print a message based on the comparison
if (markHigherBMI) {
    document.getElementById("result").textContent = `Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`;
} else {
    document.getElementById("result").textContent = `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`;
}