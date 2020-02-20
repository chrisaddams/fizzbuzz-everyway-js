module.exports = {
  fizzyIf: function() {
    console.time("fizzy");
    let i = 0;
    for (i; i <= 10000; i++) {
      if (i % 15 == 0) {
        console.log("fizzbuzz");
      }
      if (i % 3 == 0) {
        console.log("fizz");
      }
      if (i % 5 == 0) {
        console.log("buzz");
      }
      if (i % 3 != 0 && i % 5 != 0);
      {
        console.log(i);
      }
    }
    console.timeEnd("fizzy");
  }
};
