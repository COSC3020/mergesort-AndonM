function mergesort(arr) {
  const n = arr.length;
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(arr, leftStart, mid, rightEnd);
    }
  }
  return arr;
}
function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const leftArr = new Array(n1);
  const rightArr = new Array(n2);
  for (let i = 0; i < n1; ++i) {
    leftArr[i] = arr[left + i];
  }
  for (let j = 0; j < n2; ++j) {
    rightArr[j] = arr[mid + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}
