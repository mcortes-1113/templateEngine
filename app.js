const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const fs = require('fs');

var managersData = [];
var engineersData = [];
var internsData = [];

var htmlStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="assets/css/style.css" type="text/css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <div class="header-div">
        <h1 class="title">My Team</h1>
    </div>  
        <div class="container-fluid" id="main-cont">  
        `;

var htmlEnd = `
</div>
</body>
</html>`;


var htmlString = [htmlStart];

function createMgrEl(mgrData) {

  const {
      name,
      email,
      id,
      role,
      department,
      directs
  } = mgrData;

  const mgrEl =
`    
  <div class="row">
      <div class="col-md-3 card-div mgr-card" id="mgr-row">
          <h3 class="card-title">${name}</h3>
          <span class="data-text">${email}</span><br>
          <span class="data-text">ID: ${id}</span><br>
          <span class="data-text">Role: ${role}</span><br>
          <span class="data-text">Department: ${department}</span><br>
          <span class="data-text">${directs} direct reports</span><br>
      </div>    
  </div>
`
  htmlString.push(mgrEl);
  }

  function createEngEl(engData) {

    const {
        name,
        email,
        id,
        role,
        github,
        expYears
    } = engData;
  
    const engEl =
  `    
    <div class="row">
        <div class="col-md-3 card-div eng-card" id="eng-row">
            <h3 class="card-title">${name}</h3>
            <span class="data-text">${email}</span><br>
            <span class="data-text">ID: ${id}</span><br>
            <span class="data-text">Role: ${role}</span><br>
            <span class="data-text">Department: ${github}</span><br>
            <span class="data-text">${expYears} direct reports</span><br>
        </div>    
    </div>
  `
    htmlString.push(engEl);
    }

    function createIntEl(intData) {

      const {
          name,
          email,
          id,
          role,
          school,
          gradYear
      } = intData;
    
      const intEl =
    `    
      <div class="row">
          <div class="col-md-3 card-div int-card" id="int-row">
              <h3 class="card-title">${name}</h3>
              <span class="data-text">${email}</span><br>
              <span class="data-text">ID: ${id}</span><br>
              <span class="data-text">Role: ${role}</span><br>
              <span class="data-text">Department: ${school}</span><br>
              <span class="data-text">${gradYear} direct reports</span><br>
          </div>    
      </div>
    `
      htmlString.push(intEl);
      }

      function createFile() {
      htmlString.push(htmlEnd);
      var fileString = htmlString.join('');
      // htmlString.join('');
      fs.writeFile("MyTeam.html", fileString, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    }
      

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
      createFile();
  }
    });
  }

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
      var addMgr = new manager (
        response.name,
        response.email,
        response.id,
        response.role,
        response.department,
        response.directs);
        createMgrEl(addMgr);
      addMember();
    }
    else if (response.role === 'Engineer') {
      var addEng = new engineer (
        response.name,
        response.email,
        response.id,
        response.role,
        response.github,
        response.expYears);
      createEngEl(addEng);
      addMember();
    }
    else {
      var addInt = new intern (
        response.name,
        response.email,
        response.id,
        response.role,
        response.school,
        response.gradYear);
      createIntEl(addInt);
      addMember();
    }
})};

getMemberData();