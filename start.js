const cases = require("./fizzbuzz-case");
const elseContinue = require("./fizzbuzz-elseContinue");
const elses = require("./fizzbuzz-else");
const ifs = require("./fizzbuzz-if");
const readline = require("readline");
let value = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function select(answer) {
  switch (true) {
    case answer == 1:
      cases.fizzyCase();
      break;
    case answer == 2:
      elseContinue.fizzyElseContinue();
      break;
    case answer == 3:
      elses.fizzyElse();
      break;
    case answer == 4:
      ifs.fizzyIf();
      break;
    default:
      console.log("woah");
      break;
  }
}

function start() {
  value.question(
    "what would you like to try? \n 1 for Case, 2 for if else continue, 3 for if else or 4 for if only \n",
    answer => {
      console.log(`${answer}`);
      select(answer);
      value.close();
    }
  );
}
return start();
