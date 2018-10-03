// add up the digits of a number; if the resulting number is greater than 10 repeat it until the result is a single digit number

const digitalRoot = (num) => {
  if (num < 10) {
    return num;
  } else {
    num = (num % 10) + (Math.floor(num / 10));
  }
  return digitalRoot(num);
};

//recursive solution
