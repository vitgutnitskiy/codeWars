function narcissistic(value) {
  const strValue = "" + value;
  const strLength = strValue.length;
  return (
    strValue
      .split("")
      .reduce((acc, item) => (acc += Math.pow(+item, strLength)), 0) === value
  );
}
