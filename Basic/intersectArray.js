function intersectArray (arr1, arr2) {
  let results = [];
  let seen = {};
  for (let i; i < arr1.length; i++) {
    seen[arr1[i]] = false;
  }
  for (let j; j < arr2.length; j++) {
    if (seen[arr2[j]] && seen[arr2[j]] === false) {
      results.push(seen[arr2[j]]);
      seen[arr2[j]] = true;
    }
  }
  return results;
}
//given two arrays return a new array of all uniq intersecting values
