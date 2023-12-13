// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [{
    type: 'input',
    name: 'title',
    message: 'Projects Title?',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
},
{
    type: 'input',
    name: 'instructions',
    message: 'How do you install the project',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use your project',
},
{
    type: 'input',
    name: 'contribution',
    message: 'What did you do to contribute to the project',
},
{
    type: 'input',
    name: 'test',
    message: 'How to test if the project works',
}
];

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
