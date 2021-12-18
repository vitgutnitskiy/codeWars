function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (current + 1 !== next) {
      return next;
    }
  }
}
