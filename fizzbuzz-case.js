module.exports = {
  fizzyCase: function() {
    let i = 0;
    for (i; i <= 10000; i++) {
      switch (true) {
        case i % 15 == 0:
          console.log("fizzbuzz");
          break;
        case i % 3 == 0:
          console.log("fizz");
          break;
        case i % 5 == 0:
          console.log("buzz");
          break;
        case i % 7 == 0:
          console.log("bang");
          break;
        case i % 9 == 0:
          console.log("wizz");
          break;
        default:
          console.log(i);
          break;
      }
    }
  }
};
