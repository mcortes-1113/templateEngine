const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');


//data input
//use inquirer to prompt user for data
//prompt data for manager
//prompt data for additional employees
//assign data to html elements

//code to run data input for manager
//code to run data input for 

function getManager() {

  inquirer
    .prompt([
      {
          type: "input",
          message: "What is your name?",
          name: "name"
      },
      {
          type: "input",
          message: "What is your email?",
          name: "email"
      },
      {
          type: "input",
          message: "What is your ID?",
          name: "id"
      },
      {
        type: "input",
        message: "What is your department?",
        name: "department"
      },
      {
        type: "input",
        message: "How many directs?",
        name: "directs"
      }
    ])
      .then(function(response) {
        const mgr = new manager(
          response.name,
          response.email,
          response.id,
          'manager',
          response.department,
          response.directs
        )
        console.log(mgr);
  })

}

getManager();