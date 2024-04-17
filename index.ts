#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright("\t\tWELCOME TO MY WORD COUNTER\t\n\n"))
// declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers : {
    sentence : string
} = await inquirer.prompt([
    {
        name: "sentence",
        type : "input",
        message : (chalk.green("Enter your sentence to count the words : \n"))
        
    }
])

const words = answers.sentence.trim().split(" ")

// print the array of word to the console

console.log(words)

// print the word count of the sentence to the console

console.log(chalk.blue( `Your Sentence Word count is ${words.length}`));