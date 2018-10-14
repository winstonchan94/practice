const mergeTwo = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      [arr1[i], arr2[0]] = [arr2[0], arr1[i]];
      arr2.sort();
    }
  }
};
