#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = 4;
console.log("\n\twellcome to \ 'code With vandana\' Number Guessing Game");
const randomNum = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your correct number",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guess a correct number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
