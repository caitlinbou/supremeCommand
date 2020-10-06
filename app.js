const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// function to render team.html document with information
const render = require("./lib/htmlRenderer");
// empty array to push employee data and then pass through render function
const employeeArr =[];
// inquirer question to identify class of employee
const getClass =
[
    {
      type: `list`,
      message:`What job title are you adding? Please add yourself (manager) first.`,
      name: `employeeClass`,
      choices: [`manager`, `engineer`, `intern`, `no more employees to add`]
    }
];
// inquirer questions to identify manager information
const managerInfo =
[ 
    {
      type: `input`,
      message:`What is the Employee's name?`,
      name: `name`
    },
    {
      type: `input`,
      message:`What is their employee ID?`,
      name: `id`
    },
    {
      type: `input`,
      message:`What is their email address?`,
      name: `email`
    },
    {
      type: `input`,
      message:`What is your office number?`,
      name: `officeNumber`
    }
]
// inquirer questions to identify intern information
const internInfo =
[    
    {
      type: `input`,
      message:`What is the Employee's name?`,
      name: `name`
    },
    {
      type: `input`,
      message:`What is their employee ID?`,
      name: `id`,
    
    },  
    {
      type: `input`,
      message:`What is their email address?`,
      name: `email`
    },
    {
      type: `input`,
      message:`What school does the Intern attend?`,
      name: `school`
    }
]
// inquirer questions to identify engineer information
const engineerInfo =
[
    {
      type: `input`,
      message:`What is the Employee's name?`,
      name: `name`
    },
    {
      type: `input`,
      message:`What is their employee ID?`,
      name: `id`
    },
    {
      type: `input`,
      message:`What is their email address?`,
      name: `email`
    },    
    {
      type: `input`,
      message:`What is the gitHub user profile for the Engineer?`,
      name: `github`
    },
]
// function to prompt for employee info and use info to create objects for each team member
const gatherInfo = () => {
    // get class
    inquirer.prompt(getClass).then((response) => {
        console.table(response)
        // promise return in event of manager selected
        if (response.employeeClass === `manager`){
            inquirer.prompt(managerInfo).then((response) => {
                let manager = new Manager (response.name, response.id, response.email, response.officeNumber);
                employeeArr.push(manager);
                gatherInfo();
            });
        }
          // promise return in event of engineer selected
        else if (response.employeeClass === `engineer`){
            inquirer.prompt(internInfo).then((response) => {
                let intern = new Intern (response.name, response.id, response.email, response.school);
                employeeArr.push(intern);
                gatherInfo();
            });
        }
          // promise return in event of intern selected
        else if (response.employeeClass === `intern`){
            inquirer.prompt(engineerInfo).then((response) => {
                let engineer = new Engineer (response.name, response.id, response.email, response.github);
                employeeArr.push(engineer);
                gatherInfo();
            });
        }
            // promise return in event employee data collection is complete
        else if (response.employeeClass === `no more employees to add`){
            fs.writeFile(outputPath, render(employeeArr), function(err){
                if (err){
                    console.log(err)
                }
            })
            return;
        
        }
      
    });
  
}
gatherInfo()



