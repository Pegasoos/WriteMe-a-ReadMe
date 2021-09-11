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
        name: "contributing",
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
        choices:["GNU_GPL_v3_License","MIT_License","Mozilla_Public_Licence_2.0", "Apache_2.0_Licence", "IBM_Public_Licence_Version_1.0"]
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

const generateMarkdown = (responses) => 

`# ${responses.projectName}

![GitHub license](https://img.shields.io/badge/license-${responses.license}-blue.svg)

## Table of Contents
 1. [Description](#description)
 2. [Installation](#installation)
 3. [Usage](#usage)
 4. [Contributing](#contributing)
 5. [Tests](#tests)
 6. [License](#license)
 7. [Questions](#questions)

## Description
### ${responses.description}
## Installation
### ${responses.installation}
## Usage
### ${responses.usage}
## Contributing
### ${responses.contributing}
## Tests
### ${responses.test}
## License
### Distributed under the ${responses.license}
## Questions
### Email: ${responses.email}
### Github: [https://github.com/${responses.github}](https://github.com/${responses.github})`;

userPrompts().then((responses) => asyncWriteFile('readme.md', generateMarkdown(responses)))
.then(() => console.log("Success!"))
.catch((err) => console.error(err));