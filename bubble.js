const bubble = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }

  return arr;
}

const bubbleRecursive = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      return bubbleRecursive(arr);
    }
  }

  return arr;
};

const arr = [23, 34, 56, 1, 23, 4];
console.log(bubbleRecursive(arr));
console.log(bubble(arr));
