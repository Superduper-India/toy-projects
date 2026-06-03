/**
 * p.239 연습문제 4
 */

function getFirstX(strArr) {
  if (strArr[0] === 'x') return 0;
  return 1 + getFirstX(strArr.slice(1));
}

console.log(getFirstX('heex'));
