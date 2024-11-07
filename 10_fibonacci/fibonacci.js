const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fib = [0, 1];
    for (i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
  }
};
// Do not edit below this line
module.exports = fibonacci;
