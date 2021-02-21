const inquirer = require ("inquirer");
const fs = require("fs");
const util = require("util");

 const writeFileAsync = util.promisify(fs.writeFile);

function userQuestions() {
     return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "email",
      message: "Type out your email address please."
    },
    {
        type: "input",
        name: "github ",
        message: "What is your github username?"
      },
      {
        type: "input",
        name: "description",
        message: "Give a Description for your ReadMe."
      },
      {
        type: "input",
        name: "installation",
        message: "Describe how to install your project."
      },
      {
        type: "input",
        name: "usage",
        message: "How is your project used?"
      },
      {
        type: "list",
        name: "license",
        message: "What Licencing would you like for your project",
        choices: ["MIT","Apache 2.0","GNU General Public License v3.0","The Unlicense"]
      },
      {
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?(make sure to include yourself :^) )"
      },
      {
        type: "input",
        name: "tests",
        message: "What sort of testing did you use for your project."
      },
      {
        type: "input",
        name: "questions",
        message: "Leave a nice message for your questions section.(your email and github linke will be included)"
      },
    ])
    .then(answers => {
        console.info('Here are your inputs:');
        console.log(`Your Name: ${answers.name}`);
        console.log(`Project Name: ${answers.project}`)
        console.log(`Your Email: ${answers.email}`);
        console.log(`Your Github: ${answers.github}`);
        console.log(`Your Description: ${answers.description}`);
        console.log(`How to  install: ${answers.installation}`);
        console.log(`How to use: ${answers.usage}`);
        console.log(`Your License: ${answers.license}`);
        console.log(`Your Contributers: ${answers.contributers}`);
        console.log(`Your Tests: ${answers.tests}`);
        console.log(`Your Question Section: ${answers.questions}`);
      });

    } 

  function generateMarkdown(answers){
    return `
    # Project Title: ${answers.project}
  
  
  
    ## Description 
    
    Greetings my name is ${answers.name}! ${answers.description}
    
    ## Table of Contents 
    
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Conrtibuters](#credits)
    * [License](#license)
    * [Testing](#tests)
    * [Qustions](#qustions)
    
    
    ## Installation
    
    ${installation}
    
    
    
    ## Usage 
    
    ${answers.usage}
    
    
    
    ## License
    
    This project is covered under ${answers.license}
    
    
    
    ## Contributing
    
    The conrtibuters to this project are ${answers.contributers}
    
    
    
    ## Tests
    
    Testing Used for this project ${answer.test}
    
    
    
    ## Qustions
    
    ${answers.questions}
    
    I can  be reached at ${answer.email}.
    My Github: https://github.com/${answers.github}`
  }

  async function init() {
    console.log("ReadMe Generator")
    try {
      const answers = await userQuestions();
  
       const markdown = generateMarkdown(answers);
  
       await writeFileAsync("ReadMe.md", markdown);
  
       console.log("Successfully wrote to ReadMe.md");
        } catch(err) {
      console.log(err);
    }
  }
  init();