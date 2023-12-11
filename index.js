// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
}];

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => console.log(error))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers);
    })
}

// Function call to initialize app
init();
