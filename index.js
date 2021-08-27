// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { promptDesc, promptInstall, promptUse, promptScreenshot, promptCollab, promptAssets, promptTutor, promptLicense,
  promptBadges, promptFeature, promptTest, promptTable, promptCont, promptQnA } = require('./utils/initPrompts');
const { recursiveDesc } = require('./utils/recursivePrompts');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    `Provide a title for your project (Required)`,
    `Provide a description of your project (Required: Hit enter to end your current paragraph.
      You will be prompted about whether you want to add another paragraph.)`,
    `Would you like to add another paragraph to your description?`,
    `Provide another paragraph for your description (Required)`,
    `Concerning the installation of your project, provide a step-by-step description of how to
      get the development environment running (Required: Hit enter to end your current
      paragraph. You will be prompted about whether you want to add another paragraph.)`,
    `Would you like to add another paragraph to your installation instructions?`,
    `Provide another paragraph of installation instructions (Required)`,
    `Provide instructions and examples for use of your project (Required: Hit enter to end
      your current paragraph. You will be prompted about whether you want to add another
      paragraph.)`,
    `Would you like to add another paragraph to your usage instructions?`,
    `Provide another paragraph for your usage instructions (Required)`,
    `Would you like to include a screenshot to clarify usage? To add a screenshot, create an
      assets/images folder in your repository and upload your screenshot to it.`,
    `Provide the relative path to the screenshot (Required)`,
    `Would you like to include another screenshot to clarify usage?`,
    `Did you have any collaborators to credit for your project?`,
    `List one of your collaborators (Required)`,
    `Provide their GitHub username (Required)`,
    `Would you like to credit another collaborator?`,
    `Did you use any third-party assets that require attribution?`,
    `List one of the creators of these assets (Required)`,
    `Provide a link to their primary web presence (Required)`,
    `Would you like to credit another third-party asset creator?`,
    `Did you follow any tutorials to create this project?`,
    `Provide a link to one of the tutorials used (Required)`,
    `Would you like to credit another tutorial?`,
    `Select a license for your project:`,
    `Would you like to add badges to your project README? A license badge will automatically be added if applicable.`,
    `Provide your GitHub username (Required)`,
    `Provide the name of your project repository (Required)`,
    `What badges would you like to include? (Check all that you would like to include)`,
    `Would you like to list the features of your project?`,
    `Please list one of the features of your project (Required)`,
    `Would you like to list another feature of your project?`,
    `Have you written and would you like to include tests for your project?`,
    `Provide your tests and examples on how to run them (Required: Hit enter to end your current paragraph.
      You will be prompted about whether you want to add another paragraph.)`,
    `Would you like to add another paragraph to your tests and their examples?`,
    `Provide another paragraph for your tests and their examples (Required)`,
    `Would you like to include a table of contents?`,
    `Which sections would you like to display on your table of contents? 
      (Check all that you would like to include)`,
    `Would you like to include contribution guidelines for your project?`,
    `Provide contribution guidelines for your project (Required: Hit enter to end your current paragraph.
      You will be prompted about whether you want to add another paragraph.)`,
    `Would you like to add another paragraph to your contribution guidelines?`,
    `Provide another paragraph to your contribution guidelines (Required)`,
    `Would you like to include a Questions section?`,
    `Provide your email (Required)`
];

// TODO: Create a function to write README file
function writeToFile(markdown) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', markdown, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ===================
    Create a New README
    ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[26],
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please provide your GitHub username!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[43],
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please provide your email!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: questions[27],
            validate: repoInput => {
                if (repoInput) {
                  return true;
                } else {
                  console.log("Please provide the name of your project repository!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a title for your project!');
                  return false;
                }
            }
        }
    ])
        .then(initData => {
          if (!initData.questions) { initData.questions = questions; }
          return initData;
      });
};

// Function call to initialize app
init()
    .then(promptDesc)
    .then(promptInstall)
    .then(promptUse)
    .then(promptScreenshot)
    .then(promptCollab)
    .then(promptAssets)
    .then(promptTutor)
    .then(promptCont)
    .then(promptLicense)
    .then(promptBadges)
    .then(promptFeature)
    .then(promptTest)
    .then(promptQnA)
    .then(promptTable)
    .then(generateMarkdown)
    .then(writeToFile)
    .then(writeFileResponse => {
      console.log(writeFileResponse);
    })
    .catch(err => {
    console.log(err);
    });
