// given two strings find the longest common substring between the two.

//this is a dynamic solution
const makeMatrix = (str1, str2) => {
  let matrix = [];
  for (let i = 0; i < str1.length + 1; i++) {
    matrix[i] = new Array(str2.length + 1);
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[0].length; k++) {
      matrix[j][k] = 0;
    }
  }
  for (let l = 0; l < str1.length; l++) {
    for (let m = 0; m < str2.length; m++) {
      if (str1.charAt(l) == str2.charAt(m)) {
        matrix[l + 1][m + 1] = matrix[l][m] + 1;
      }
    }
  }
  return matrix;
};

const longestSub = (str1, str2) => {
  let longSub = "";
  let matrix = makeMatrix(str1, str2);
  let length;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      length = matrix[row][col];
      if (length > longSub.length) {
        longSub = str2.slice((col - length), col);
      }
    }
  }
  return longSub;
};
