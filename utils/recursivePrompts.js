const inquirer = require('inquirer');

const recursiveDesc = initData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'description',
          message: initData.questions[3],
          validate: descInput => {
              if (descInput) {
                return true;
              } else {
                console.log('Please enter another description paragraph!');
                return false;
              }
          }
        },
        {
          type: 'confirm',
          name: 'confirmDesc',
          message: initData.questions[2],
          default: false
        }
    ])
        .then(descData => {
          initData.desc.push(descData);
          if (descData.confirmDesc) {
              return recursiveDesc(initData);
          } else {
              return initData;
          }
        });
};

const recursiveInstall = initData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'install',
          message: initData.questions[6],
          validate: installInput => {
              if (installInput) {
                return true;
              } else {
                console.log('Please provide another paragraph on how to install your project!');
                return false;
              }
          }
        },
        {
          type: 'confirm',
          name: 'confirmInstall',
          message: initData.questions[5],
          default: false
        }
    ])
        .then(installData => {
          initData.install.push(installData);
          if (installData.confirmInstall) {
              return recursiveInstall(initData);
          } else {
              return initData;
          }
        });
};

const recursiveUse = initData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'use',
          message: initData.questions[9],
          validate: useInput => {
              if (useInput) {
                return true;
              } else {
                console.log('Please provide another paragraph on how to use your project!');
                return false;
              }
          }
        },
        {
          type: 'confirm',
          name: 'confirmUse',
          message: initData.questions[8],
          default: false
        }
    ])
        .then(useData => {
          initData.use.push(useData);
          if (useData.confirmUse) {
              return recursiveUse(initData);
          } else {
              return initData;
          }
        });
};

const recursiveScreenshot = initData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'screenshot',
          message: initData.questions[11],
          validate: screenshotInput => {
              if (screenshotInput) {
                return true;
              } else {
                console.log('Please provide the relative path to your screenshot!');
                return false;
              }
          }
        },
        {
            type: 'confirm',
            name: 'confirmNewScreenshot',
            message: initData.questions[12],
            default: false
        }
    ])
        .then(screenshotData => {
          initData.screenshot.push(screenshotData);
          if (screenshotData.confirmNewScreenshot) {
              return recursiveScreenshot(initData);
          } else {
              return initData;
          }
        });
};

const recursiveCollab = initData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'collab',
            message: initData.questions[14],
            validate: collabInput => {
                if (collabInput) {
                  return true;
                } else {
                  console.log('Please provide the name of the collaborator!');
                  return false;
                }
            }
          },
        {
            type: 'input',
            name: 'collabGitHub',
            message: initData.questions[15],
            validate: collabGitHubInput => {
                if (collabGitHubInput) {
                  return true;
                } else {
                  console.log("Please provide a link to your collaborator's GitHub!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewCollab',
            message: initData.questions[16],
            default: false
        }
    ])
        .then(collabData => {
          initData.collab.push(collabData);
          if (collabData.confirmNewCollab) {
              return recursiveCollab(initData);
          } else {
              return initData;
          }
        });
};

const recursiveAssets = initData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'assets',
          message: initData.questions[18],
          validate: assetsInput => {
              if (assetsInput) {
                return true;
              } else {
                console.log('Please provide the name of one of the creators of these assets!');
                return false;
              }
          }
        },
        {
            type: 'input',
            name: 'assetsLink',
            message: initData.questions[19],
            validate: assetsLinkInput => {
                if (assetsLinkInput) {
                  return true;
                } else {
                  console.log("Please provide a link to the creator's primary web presence!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewAssets',
            message: initData.questions[20],
            default: false
        }
    ])
        .then(assetsData => {
          initData.assets.push(assetsData);
          if (assetsData.confirmNewAssets) {
              return recursiveAssets(initData);
          } else {
              return initData;
          }
        });
};

const recursiveTutor = initData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'tutorLink',
            message: initData.questions[22],
            validate: tutorLinkInput => {
                if (tutorLinkInput) {
                  return true;
                } else {
                  console.log("Please provide a link to the tutorial!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTutor',
            message: initData.questions[23],
            default: false
        }
    ])
        .then(tutorData => {
          initData.tutor.push(tutorData);
          if (tutorData.confirmNewTutor) {
              return recursiveTutor(initData);
          } else {
              return initData;
          }
        });
};

const recursiveFeature = initData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'feature',
            message: initData.questions[30],
            validate: featureInput => {
                if (featureInput) {
                  return true;
                } else {
                  console.log("Please list one of the features of your project!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewFeature',
            message: initData.questions[31],
            default: false
        }
    ])
        .then(featureData => {
          initData.feature.push(featureData);
          if (featureData.confirmNewFeature) {
              return recursiveFeature(initData);
          } else {
              return initData;
          }
        });
};

const recursiveTest = initData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'test',
            message: initData.questions[35],
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log("Please provide your tests and examples on how to run them!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTest',
            message: initData.questions[34],
            default: false
        }
    ])
        .then(testData => {
          initData.test.push(testData);
          if (testData.confirmNewTest) {
              return recursiveTest(initData);
          } else {
              return initData;
          }
        });
};

const recursiveCont = initData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'cont',
            message: initData.questions[41],
            validate: contInput => {
                if (contInput) {
                  return true;
                } else {
                  console.log("Please provide another paragraph of contribution guidelines for your project!");
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewCont',
            message: initData.questions[40],
            default: false
        }
    ])
        .then(contData => {
          initData.cont.push(contData);
          if (contData.confirmNewCont) {
              return recursiveCont(initData);
          } else {
              return initData;
          }
        });
};

module.exports = { recursiveDesc, recursiveInstall, recursiveUse, recursiveScreenshot, recursiveCollab, recursiveAssets,
    recursiveTutor, recursiveFeature, recursiveTest, recursiveCont };