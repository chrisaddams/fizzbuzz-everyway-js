module.exports = {
  fizzyElse: function() {
    let i = 0;
    for (i; i <= 10000; i++) {
      if (i % 15 == 0) {
        console.log("fizzbuzz");
      } else if (i % 3 == 0) {
        console.log("fizz");
      } else if (i % 5 == 0) {
        console.log("buzz");
      } else if (i % 7 == 0) {
        console.log("bang");
      } else if (i % 9 == 0) {
        console.log("wizz");
      } else {
        console.log(i);
      }
    }
  }
};
