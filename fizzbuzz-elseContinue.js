module.exports = {
  fizzyElseContinue: function() {
    console.time("fizzy");
    let i = 0;
    for (i; i <= 10000; i++) {
      if (i % 15 == 0) {
        console.log("fizzbuzz");
        continue;
      } else if (i % 3 == 0) {
        console.log("fizz");
        continue;
      } else if (i % 5 == 0) {
        console.log("buzz");
        continue;
      } else {
        console.log(i);
        continue;
      }
    }
    console.timeEnd("fizzy");
  }
};
