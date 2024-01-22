const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What does your project do? Describe your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Instructions on how to use your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do I install your project?",
    },
  ];
  
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`Successfully generated ${fileName}`);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        const fileName = "ReadMe.md";
        writeToFile(fileName, markdown);
    });
}

// function call to initialize program
init();
