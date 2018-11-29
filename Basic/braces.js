function braces(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++ ) {
    results.push(isBalanced(arr[i]));
  }
  return results; 
}

function isBalanced(str) {
  let hash = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  let stack = [];
  if (str.length % 2 !== 0 || str[str.length - 1] == "[" || str[str.length - 1] == "{" || str[str.length - 1] == "(") {
    return "NO";
  }
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current == "[" || current == "(" || current == "{") {
      stack.push(current);
    } else {
      if (hash[stack.pop()] !== current || stack.length == 0) {
        return "NO";
      }
    }
  }
  return "YES";

}
