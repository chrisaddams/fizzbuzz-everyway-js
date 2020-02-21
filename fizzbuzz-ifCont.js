module.exports = {
  fizzyIfCont: function() {
    let i = 0;
    for (i; i <= 10000; i++) {
      if (i % 15 == 0) {
        console.log("fizzbuzz");
        continue;
      }
      if (i % 3 == 0) {
        console.log("fizz");
        continue;
      }
      if (i % 5 == 0) {
        console.log("buzz");
        continue;
      }
      if (i % 7 == 0) {
        console.log("bang");
        continue;
      }
      if (i % 9 == 0) {
        console.log("wizz");
        continue;
      }
      console.log(i);
    }
  }
};
