//* 3 open source licenses, badges are in index[0], links to the licenses are in index[1] of each license array
const licenseDetails = {
  'MIT': ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'https://opensource.org/licenses/MIT'],
  'Apache': ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'https://opensource.org/licenses/Apache-2.0'],
  'GPL': ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'https://www.gnu.org/licenses/gpl-3.0'],
  'None': ['']
}

//* function that generates the badge based on the one you chose in the prompt
function renderLicenseBadge(license) {
    //* uses two-dimesional arrays to return the license's badge
    return licenseDetails[license][0];  
}

//* renders link to the license based on the one you chose in the prompt
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else {
    //* uses two-dimesional arrays to return the license's badge
    return licenseDetails[license][1];
  }
}

//* function that renders the license section
function renderLicenseSection(license) {
  //* if "None" option was picked during prompt, the license section will not be created
  if (license == 'None') {
    return '';
  } else {
    //* renders license section with badge, then statement about which license used, then a link with that license
    return `## License\nThis project is licensed under the ${license} license.\n${renderLicenseLink(license)}`
  }
}

//* Generates readme content
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)}\n
  ## Table of Contents\n
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Description\n ${data.description}\n
  ## Installation\n ${data.installation}\n
  ## Usage\n ${data.usage}\n
  ## Credits\n ${data.credit}\n
  ${renderLicenseSection(data.license)}\n
  ## Tests\n ${data.test}\n
  ## Questions\n Github: https://github.com/${data.github}\nTo reach me for additional questions, please send an email to: ${data.email}`;
}

module.exports = generateMarkdown;
