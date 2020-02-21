const cases = require("./fizzbuzz-case");
const elseContinue = require("./fizzbuzz-elseContinue");
const elses = require("./fizzbuzz-else");
const ifs = require("./fizzbuzz-if");
const ifsCont = require("./fizzbuzz-ifCont");
const hashes = require("./fizzbuzz-hash");
const short = require("./fizzbuzz-short");
const readline = require("readline");
const performance = require("perf_hooks").performance;
const fs = require("fs");

let value = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function select(answer) {
  const start = performance.now();
  console.time("fizz");

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
    case answer == 5:
      ifsCont.fizzyIfCont();
      break;
    case answer == 6:
      hashes.fizzyHash();
      break;
    case answer == 7:
      short.fizzyTer();
      break;
    default:
      console.log("woah");
      break;
  }
  const end = performance.now();
  console.timeEnd("fizz");
  console.log(end - start);
  //let filename = "./" + answer;
  fs.appendFile("./" + answer, end - start + "\n", function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

function start() {
  value.question(
    "what would you like to try? \n 1 for Case, 2 for if else continue, 3 for if else, 4 for if only, 5 for if only/continue, 6 for hash, 7 for shortest possible \n",
    answer => {
      console.log(`${answer}`);
      select(answer);
      value.close();
    }
  );
}
return start();
