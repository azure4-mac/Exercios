/* 1 */
let note = prompt("Please enter a number between 0 and 10:");

// Check if the input is valid
while (note < 0 || note > 10) {
  // If not, show an error message and ask again
  alert("Invalid value! Please enter a number between 0 and 10.");
  note = prompt("Please enter a number between 0 and 10:");
}

// If the input is valid, show a success message
alert("Valid value! You entered: " + note);

