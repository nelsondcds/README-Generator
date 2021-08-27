const inquirer = require('inquirer');
const { recursiveDesc, recursiveInstall, recursiveUse, recursiveScreenshot, recursiveCollab, recursiveAssets, recursiveTutor,
    recursiveFeature, recursiveTest, recursiveCont } = require('./recursivePrompts');

const promptDesc = initData => {
    if (!initData.desc) { initData.desc = []; }
    return inquirer.prompt([
        {
          type: 'input',
          name: 'description',
          message: initData.questions[1],
          validate: descInput => {
              if (descInput) {
                return true;
              } else {
                console.log('Please enter a description of your project!');
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

const promptInstall = initData => {
    if (!initData.install) { initData.install = []; }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'install',
            message: initData.questions[4],
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide a description of how to install your project!');
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

const promptUse = initData => {
    if (!initData.use) { initData.use = []; }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'use',
            message: initData.questions[7],
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please provide a description of how to use your project!');
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

const promptScreenshot = initData => {
    if (!initData.screenshot) { initData.screenshot = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmScreenshot',
            message: initData.questions[10],
            default: false
        },
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
            },
            when: ({ confirmScreenshot }) => {
                if (confirmScreenshot) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewScreenshot',
            message: initData.questions[12],
            default: false,
            when: ({ confirmScreenshot }) => {
              if (confirmScreenshot) {
                return true;
              } else {
                return false;
              }
            }
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

const promptCollab = initData => {
    if (!initData.collab) { initData.collab = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmCollab',
            message: initData.questions[13],
            default: false
        },
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
            },
            when: ({ confirmCollab }) => {
                if (confirmCollab) {
                    return true;
                } else {
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
            },
            when: ({ confirmCollab }) => {
                if (confirmCollab) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewCollab',
            message: initData.questions[16],
            default: false,
            when: ({ confirmCollab }) => {
              if (confirmCollab) {
                return true;
              } else {
                return false;
              }
            }
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

const promptAssets = initData => {
    if (!initData.assets) { initData.assets = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAssets',
            message: initData.questions[17],
            default: false
        },
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
            },
            when: ({ confirmAssets }) => {
                if (confirmAssets) {
                    return true;
                } else {
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
            },
            when: ({ confirmAssets }) => {
                if (confirmAssets) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewAssets',
            message: initData.questions[20],
            default: false,
            when: ({ confirmAssets }) => {
              if (confirmAssets) {
                return true;
              } else {
                return false;
              }
            }
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

const promptTutor = initData => {
    if (!initData.tutor) { initData.tutor = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTutor',
            message: initData.questions[21],
            default: false
        },
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
            },
            when: ({ confirmTutor }) => {
                if (confirmTutor) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTutor',
            message: initData.questions[23],
            default: false,
            when: ({ confirmTutor }) => {
              if (confirmTutor) {
                return true;
              } else {
                return false;
              }
            }
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

const promptLicense = initData => {
    if (!initData.license) { initData.license = []; }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'license',
            message: initData.questions[24],
            choices: ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0',
                'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            default: 'None'
        }
    ])
        .then(licenseData => {
          initData.license.push(licenseData);
          return initData;
        });
};

const promptBadges = initData => {
    if (!initData.badges) { initData.badges = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: initData.questions[25],
            default: false
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: initData.questions[28],
            choices: ['Number of Open Issues', 'Number of Closed Issues', 'Number of Open Pull Requests',
            'Number of Closed Pull Requests', 'Language Count', 'Top Language', 'Repo Size'],
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                  return true;
                } else {
                  return false;
                }
            }
        }
    ])
        .then(badgesData => {
          initData.badges.push(badgesData);
          return initData;
        });
};

const promptFeature = initData => {
    if (!initData.feature) { initData.feature = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmFeature',
            message: initData.questions[29],
            default: false
        },
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
            },
            when: ({ confirmFeature }) => {
                if (confirmFeature) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewFeature',
            message: initData.questions[31],
            default: false,
            when: ({ confirmFeature }) => {
              if (confirmFeature) {
                return true;
              } else {
                return false;
              }
            }
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

const promptTest = initData => {
    if (!initData.test) { initData.test = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTest',
            message: initData.questions[32],
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: initData.questions[33],
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log("Please provide your tests and examples on how to run them!");
                  return false;
                }
            },
            when: ({ confirmTest }) => {
                if (confirmTest) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTest',
            message: initData.questions[34],
            default: false,
            when: ({ confirmTest }) => {
              if (confirmTest) {
                return true;
              } else {
                return false;
              }
            }
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

const promptTable = initData => {
    if (!initData.table) { initData.table = []; }
    if (!initData.contents) { initData.contents = []; }
    if (initData.feature[0].confirmFeature) { initData.contents.push('Features'); }
    initData.contents.push('Installation', 'Usage');
    if (initData.test[0].confirmTest) { initData.contents.push('Tests'); }
    if (initData.cont[0].confirmCont) { initData.contents.push('Contributions'); }
    if (initData.qna[0].confirmQnA) { initData.contents.push('Questions'); }
    if (initData.collab[0].confirmCollab || initData.assets[0].confirmAssets || initData.tutor[0].confirmTutor) {
        initData.contents.push('Credits');
    }
    initData.contents.push('License');
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTable',
            message: initData.questions[36],
            default: false
        },
        {
          type: 'checkbox',
          name: 'contents',
          message: initData.questions[37],
          choices: initData.contents,
          when: ({ confirmTable }) => {
            if (confirmTable) {
              return true;
            } else {
              return false;
            }
        }
        }
    ])
        .then(tableData => {
          initData.table.push(tableData);
          return initData;
        });
};

const promptCont = initData => {
    if (!initData.cont) { initData.cont = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmCont',
            message: initData.questions[38],
            default: false
        },
        {
            type: 'input',
            name: 'cont',
            message: initData.questions[39],
            validate: contInput => {
                if (contInput) {
                  return true;
                } else {
                  console.log("Please provide contribution guidelines for your project!");
                  return false;
                }
            },
            when: ({ confirmCont }) => {
                if (confirmCont) {
                  return true;
                } else {
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewCont',
            message: initData.questions[40],
            default: false,
            when: ({ confirmCont }) => {
              if (confirmCont) {
                return true;
              } else {
                return false;
              }
            }
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

const promptQnA = initData => {
    if (!initData.qna) { initData.qna = []; }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmQnA',
            message: initData.questions[42],
            default: false
        }
    ])
        .then(qnaData => {
          initData.qna.push(qnaData);
          return initData;
        });
};

module.exports = { promptDesc, promptInstall, promptUse, promptScreenshot, promptCollab, promptAssets, promptTutor, promptLicense,
    promptBadges, promptFeature, promptTest, promptTable, promptCont, promptQnA };