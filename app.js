const inquirer = require('inquirer');
// const engineer = require('./lib/engineer');
// const intern = require('./lib/intern');
// const manager = require('./lib/manager');
// const html = require(`./lib/html.js`);

var managersData = [];
var engineersData = [];
var internsData = [];

function addMember() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "addMember",
      message: "Add another Team Member?",
      choices: ['Yes', 'No'],
    }
  ])
  .then(function(response) {
    if (response.addMember === 'Yes') {
      getMemberData();
    }
    else {
      console.log(managersData.length + ' managers added');
      console.log(managersData);
      console.log(engineersData.length + ' engineers added');
      console.log(engineersData);
      console.log(internsData.length + ' interns added');
      console.log(internsData);
      
    }
    return
  })
};

function getMemberData() {
  inquirer
  .prompt([
    {
        type: "input",
        message: "Team Member's name?",
        name: "name"
    },
    {
        type: "input",
        message: "Team Member's email?",
        name: "email"
    },
    {
        type: "input",
        message: "Team Member's ID?",
        name: "id"
    },
    {
        type: "list",
        name: "role",
        message: "Team Member's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: "input",
      message: "What is your department?",
      name: "department",
      when: (answers) => answers.role === 'Manager'
    },
    {
      type: "input",
      message: "How many directs?",
      name: "directs",
      when: (answers) => answers.role === 'Manager'
    },
    {
      type: "input",
      message: "Team Member's GitHub?",
      name: "github",
      when: (answers) => answers.role === 'Engineer'
    },
    {
      type: "input",
      message: "Team Member's years of experience?",
      name: "expYears",
      when: (answers) => answers.role === 'Engineer'
    },
    {
      type: "input",
      message: "Intern's school?",
      name: "school",
      when: (answers) => answers.role === 'Intern'
    },
    {
      type: "input",
      message: "Intern's graduation year?",
      name: "gradYear",
      when: (answers) => answers.role === 'Intern'
    },
  ])
  .then(function(response) {
    if (response.role === 'Manager') {
      managersData.push(response);
      addMember();
    }
    else if (response.role === 'Engineer') {
      engineersData.push(response);
      addMember();
    }
    else {
      internsData.push(response);
      addMember();
    }
})};

getMemberData();

//       .then(function(response) {
//         const newmgr = new manager(
//           response.name,
//           response.email,
//           response.id,
//           'manager',
//           response.department,
//           response.directs
//         )
//         newmgr.addMgr(newmgr);
//         newmgr.addMgrEl();
//   })

// }
