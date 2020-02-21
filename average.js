const lineByLine = require("n-readlines");
let line;
let count = 0;
let sum = 0;
let i = 1;
for (i; i <= 7; i++) {
  const fizz = {
    1: "Case",
    2: "IfElseCont",
    3: "IfElse",
    4: "IfOnly",
    5: "IfCont",
    6: "Hash",
    7: "Ternary"
  };
  const liner = new lineByLine("./" + i);
  while ((line = liner.next())) {
    let val = line.toString("ascii");
    sum = sum + parseFloat(val);
    count++;
  }
  let average = sum / count;
  for (let num in fizz) {
    if (i == num) {
      //output += fizz[num];
      console.log(
        "Average speed of " + fizz[num] + " is \t" + average.toFixed(2) + " ms"
      );
    }
  }
}
