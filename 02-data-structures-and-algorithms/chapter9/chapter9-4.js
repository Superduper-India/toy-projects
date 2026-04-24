/**
 * p.200 연습문제 4
 */

function getReverse(str) {
  const stack = [];
  let answer = '';

  for (const char of str) {
    stack.push(char);
  }

  while (stack.length) {
    answer += stack.pop();
  }

  return answer;
}

console.log(getReverse('abcde'));
