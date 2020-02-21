module.exports = {
  fizzyTer: function() {
    for (let i = 0; i <= 10000; i++) {
      console.log(
        i % 15
          ? i % 9
            ? i % 7
              ? i % 5
                ? i % 3
                  ? i
                  : "fizz"
                : "buzz"
              : "bang"
            : "wizz"
          : "fizzbuzz"
      );
    }
  }
};
