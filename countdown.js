var countdownGenerator = function (x) {
  /* your code here */
  var currentNum = x;

  return function countdown() {
    // Determining which text line to log by evaluating currentNum against different if statments
    if (currentNum >= 1) {
      console.log("T-minus " + currentNum + "...");
    }

    if (currentNum == 0) {
      console.log("Blast Off!!!!!")
    }

    if (currentNum <= 0){
      console.log("Rockets already gone bub. Go home!")
    }
    // lowers currentNum by 1
    currentNum --;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!