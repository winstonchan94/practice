const partition = (arr, start, end) => {
  let pivot = arr[end];
  let pivIdx = start;
  let temp;
  for (let i = start; i < end; i++) {
    if (arr[i] <= arr[pivIdx]) {
      temp = arr[i];
      arr[i] = arr[pivIdx];
      arr[pivIdx] = temp;
      pivIdx++;
    }
  }
  return pivIdx;
};

const iterQuicksort = (arr) => {
  let stack = [];
  let a = 0;
  let b = arr.length - 1;
  let current;
  let pivIdx;
  stack.push([a,b]);
  while (stack.length > 0) {
    current = stack.pop();
    a = current[0];
    b = current[1];
    pivIdx = partition(arr, a, b);
    if (pivIdx - 1 > a) {
      stack.push([a, pivIdx - 1]);
    }
    if (pivIdx + 1 < b) {
      stack.push([pivIdx + 1, b]);
    }
  }
};
