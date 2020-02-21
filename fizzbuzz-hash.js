module.exports = {
  fizzyHash: function() {
    const fizz = {
      3: "fizz",
      5: "buzz",
      7: "bang",
      9: "wizz"
    };
    for (let i = 0; i <= 10000; i++) {
      let output = "";
      for (let num in fizz) {
        if (i % num == 0) {
          output += fizz[num];
        }
      }
      if (output === "") {
        output = i;
      }
      console.log(output);
    }
  }
};
