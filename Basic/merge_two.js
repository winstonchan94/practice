//given two sorted arrays, arr1 and arr2, merge the values such that all the values in arr1 are less than those of arr2..a

const mergeTwo = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      [arr1[i], arr2[0]] = [arr2[0], arr1[i]];
      arr2.sort();
    }
  }
};
