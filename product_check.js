// product_check.js
// This program lets the user enter numbers and checks if
// the product of any two numbers equals a third one.
// It uses Node.js to run in the terminal.

// Set up input/output system using Node's readline module
const readline = require("readline");

// This creates an interface to read what the user types
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// We'll store all the numbers the user enters in this array
let numbers = [];

console.log("Welcome!");
console.log("Enter whole numbers one at a time.");
console.log("Type 'q' or 'Q' when you're done.\n");

// This function will keep asking the user for numbers
function getInput() {
  rl.question("Enter a number (or 'q' to quit): ", function (input) {
    // If the user wants to quit
    if (input.toLowerCase() === 'q') {
      // If no numbers were entered at all
      if (numbers.length === 0) {
        console.log("No numbers entered. Goodbye!");
      } else {
        console.log("\nYou entered:", numbers);

        // Check if any two numbers multiply to equal a third one
        let conditionMet = false;

        for (let i = 0; i < numbers.length; i++) {
          for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
              let product = numbers[i] * numbers[j];
              if (numbers.includes(product)) {
                console.log(`✅ Condition met: ${numbers[i]} x ${numbers[j]} = ${product}`);
                conditionMet = true;
                break;
              }
            }
          }
          if (conditionMet) break;
        }

        if (!conditionMet) {
          console.log("❌ Condition was not met.");
        }
      }

      rl.close(); // Stop asking for input
      return;
    }

    // Try to turn the input into a number
    const num = Number(input);

    // If it's not a valid number, show an error
    if (isNaN(num)) {
      console.log("Oops! Please enter a whole number or 'q' to quit.");
    } else {
      numbers.push(num); // Save the number
    }

    // Ask again
    getInput();
  });
}

// Start the input process
getInput();
