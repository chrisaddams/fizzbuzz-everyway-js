module.exports = {
  fizzyElseContinue: function() {
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
      } else if (i % 7 == 0) {
        console.log("bang");
        continue;
      } else if (i % 9 == 0) {
        console.log("wizz");
        continue;
      } else {
        console.log(i);
        continue;
      }
    }
  }
};
