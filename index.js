const inquirer = require("inquirer");
const fs = require("fs");
const generateTeams= require("./src/Webpage-template.js");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newTeamMember = [];

const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team members name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your team members ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your team members email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your team members role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])

      // If manager selected, answer these questions
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newTeamMember.push(newManager);
          
        // If engineer selected answer these questions
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newTeamMember.push(newEngineer);
          
        // If intern selected answer these questions
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newTeamMember.push(newIntern);          
      } 

}; 

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What's next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();

function createTeam () {
  fs.writeFileSync(
    "./output/index.html",
    generateTeams(newTeamMember),
    "utf-8"
  );
}