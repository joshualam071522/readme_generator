//* 3 open source licenses, badges are in index[0], links to the licenses are in index[1] of each license array
const licenseDetails = {
  MIT: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT'],
  Apache: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://opensource.org/licenses/Apache-2.0'],
  GPL: ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0'],
  None: ['']
}

//* function that generates the badge based on the one you chose in the prompt
function renderLicenseBadge(license) {
    return licenseDetails[license[0]];  
}

//* renders link to the license based on the one you chose in the prompt
function renderLicenseLink(license) {
  if (license == None) {
    return '';
  } else {
    licenseDetails[license[1]];
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == None) {
    return '';
  } else {
    return `## License\n 
    ${renderLicenseBadge(license)}\n 
    This project is licensed under the ${license} license.\n 
    ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n ${data.description}\n
  ## Installation\n ${data.installation}\n
  ## Usage\n ${data.usage}\n
  ## Credits\n ${data.credits}\n
  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
