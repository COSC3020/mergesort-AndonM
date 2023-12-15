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
  let i, j, k;
  const n1 = mid - left + 1;
  const n2 = right - mid;
  for (i = 0; i < n1; i++) {
    let current = arr[left + i];
    k = left + i;
    for (j = mid + 1; j <= right && arr[j] < current; j++) {
      arr[k] = arr[j];
      k = j;
    }
    arr[k] = current;
  }
}
