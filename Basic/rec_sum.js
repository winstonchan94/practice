//takes an array of integers and returns their sum recursivelyy

const recSum = (arr) => {
  if (arr.length == 1) {
    return arr[0];
  }
  return arr[0] + recSum(arr.slice(1, arr.length));
};
