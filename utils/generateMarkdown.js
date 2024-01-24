// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} License. 
## Questions
For questions or concerns, please contact me via [GitHub](https://github.com/${data.username}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;


