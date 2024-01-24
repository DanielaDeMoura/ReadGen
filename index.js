const fs = require("fs");
const path = require("path");
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
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
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
    const fileName = "README.md";
    writeToFile(fileName, markdown);
  });
}

// function call to initialize program
init();
