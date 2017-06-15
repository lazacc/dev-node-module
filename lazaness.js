const chalk = require('chalk');
const commander = require('commander');
const packageJson = require('./package.json');

let projectName;

console.log(`package.json.name: ${packageJson.name}`);

const program = new commander.Command(packageJson.name)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

console.log(`Project Name: ${projectName}`);
