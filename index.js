const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util')

const asyncWriteFile = util.promisify(fs.writeFile);

const userPrompts = () => inquirer.prompt([
    {
        type: "input",
        name: "projectName",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Add some installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Add some usage instructions.",
    },
    {
        type: "input",
        name: "guidelines",
        message: "Add some guidelines for contributing to the project.",
    },
    {
        type: "input",
        name: "test",
        message: "Add some test instructions.",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license.",
        choices:["GNU GPL v3","The MIT License","Mozilla Public Licence 2.0"]
    },
    {
        type: "input",
        name: "github",
        message: "What is the name of your Github account?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
])
userPrompts()