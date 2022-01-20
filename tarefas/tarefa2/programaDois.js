const inquirer = require("inquirer")
const chalk =require("chalk")

inquirer.prompt([{
name:'nome',message:'qual é seu nome?'},
{
name:'idade',message:'idade?'}
]).then((answers)=>{
  
const response = `seu nome é :${answers.nome},e sua idade é:${answers.idade}`;

console.log(chalk.bgYellow.black(response))
}).catch((err)=> console.log(err)
)


