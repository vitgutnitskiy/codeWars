function validParentheses(parens) {
  const arrayParens = parens.split("");
  let s = 0;
  for (let i = 0; i < parens.length; i++) {
    if (arrayParens[i] === "(") s = s + 1;
    else if (arrayParens[i] === ")") s = s - 1;
    if (s < 0) return false;
  }
  if (s === 0) return true;

  return false;
}
function roundToFive(numbers) {
  return numbers.map((a) => (a % 5 >= 2.5 ? a + (5 - (a % 5)) : a - (a % 5)));
}

// Change code below this line
const someAdjective = "someAdjective";
let myStr = "Learning to code is ";
myStr += someAdjective;
