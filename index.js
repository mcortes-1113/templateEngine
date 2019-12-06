const inquirer = require('inquirer');



//create prompts for favorite color and username.
inquirer
  .prompt([

    // * Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to 
// prompt the user for their email, id, and specific information based on their role with the company.
//  For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
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
        name: "ID"
    },
    {
        type: "input",// change to options
        message: "What is your role?",
        name: "name"
    },
    //Move to second prompt---------------------------
    {
      type: "input",
      message: "What is your github user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your school?",
      name: "school"
    }
  ])
  //---------------------------------------------------
  .then(function(response) {
    name = response.name;
    email = response.email;
    id = response.id;
    role = response.role;
    username = response.username;
    school = response.school;
    //call next function------------------
});




// * Your app will run as a Node CLI to gather information about each employee.

// * Below is an example of what your application may look like. Remember, the styling is completely up to you so try to make it unique.

// ![Employee Summary 1](./Assets/10-OOP-homework-demo-1)
// ![Employee Summary 2](./Assets/10-OOP-homework-demo-2)

// In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

// The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

// There are also unit tests to help you build the classes necessary.

// It is recommended that you follow this workflow:

// 1. Run tests
// 2. Create or update classes to pass a single test case
// 3. Repeat

// 🎗 Remember, you can run the tests at any time with `npm run test`

// It is recommended that you start with a directory structure that looks like this:

// ```
// lib/           // classes and helper code
// output/        // rendered output
// templates/     // HTML template(s)
// test/          // jest tests
//   Employee.test.js
//   Engineer.test.js
//   Intern.test.js
//   Manager.test.js
// app.js         // Runs the application
// ```

// ### Hints

// * Create multiple HTML templates for each type of user. For example, you could use the following templates:

//   * `main.html`

//   * `engineer.html`
  
//   * `intern.html`
  
//   * `manager.html`

// * You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

// * The different employee types should all inherit some methods and properties from a base class of `Employee`.

// * In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.