const answers = require("index.js")
 function generateMarkdown(answers){
  `# ${answers.title}



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


module.exports = generateMarkdown;
