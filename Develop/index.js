//* packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//* questions to ask the user 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was your motivation? Why did you build this project? What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How did you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators with links to Github Profiles'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project'
        ['MIT', 'Apache 2.0', 'GNU GPL v3', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
