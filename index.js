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
    
    ${answers.installation}
    
    
    
    ## Usage 
    
    ${answers.usage}
    
    
    
    ## License
    
    This project is covered under ${answers.license}
    
    
    
    ## Contributing
    
    The conrtibuters to this project are ${answers.contributers}
    
    
    
    ## Tests
    
    Testing Used for this project ${answers.test}
    
    
    
    ## Qustions
    
    ${answers.questions}
    
    I can  be reached at ${answers.email}.
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