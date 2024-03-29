#! /usr/bin/env node

import inquirer from "inquirer";

// computer will never generate a random number
// user input for guessing number
// compare user input with computer generated number and show results

const randomnumber =Math.floor(Math.random() *10 + 5)
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    },
]);

if (answers.userGuessedNumber === randomnumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("Try again");
}


