module.exports = {
  fizzyCase: function() {
    console.time("fizzycase");
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
        default:
          console.log(i);
          break;
      }
    }
    console.timeEnd("fizzycase");
  }
  //return fizzycase();
};
