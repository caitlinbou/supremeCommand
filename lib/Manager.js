// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(`./Employee.js`);
// const Engineer = require("./Engineer.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getRole(){
       return `Manager`
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
const Catilin = new Manager(`Caitlin`, 2727, `cait.feli@gmail.com`, 1)

module.exports = Manager