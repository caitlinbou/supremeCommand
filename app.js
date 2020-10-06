const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const manager = [];
const intern = [];
const engineer = [];
const questions =[
    {
      type: `list`,
      message:`What job title are you adding? Please add yourself (manager) first.`,
      name: `employeeClass`,
      choices: [`manager`, `engineer`, `intern`]
    },
    
    {
      type: `list`,
      message:`What is the Employee's name?`,
      name: `name`
    },
    {
      type: `list`,
      message:`What is their employee ID?`,
      name: `id`
    },
    {
      type: `list`,
      message:`What is their email address?`,
      name: `email`
    },
    {
      type: `number`,
      message:`What is your office number?`,
      name: `officeNumber`
    },
    {
      type: `list`,
      message:`What school does the intern attend?`,
      name: `school`
    },
    {
      type: `list`,
      message:`What is the gitHub user profile for the Engineer?`,
      name: `github`
    },
]
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt(questions).then((response) => {

});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

fs.writeFile(outputPath, employee, function(err){
    if (err){
        console.log(err)
    }
})

// TODO: verify all of this starter stuff is done.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

