const chalk = require("chalk");
const { default: validator } = require("validator");
const val = require("validator");

console.log(chalk.red("hello"));
console.log(chalk.blue("hello"));
console.log(chalk.green.inverse("hello"));
console.log(chalk.green.bgRed("hello"));

const res = validator.isEmail("Denverrai2012@gmail.com");
console.log(res ? chalk.green(res) : chalk.red(res));
