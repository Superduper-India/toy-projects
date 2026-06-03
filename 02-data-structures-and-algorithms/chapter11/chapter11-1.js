/**
 * p.239 연습문제 1
 */

function getStringCount(strArr) {
  if (strArr.length === 1) return strArr[0].length;
  return strArr[0].length + getStringCount(strArr.slice(1, strArr.length));
}

console.log(getStringCount(['ab', 'c', 'def', 'ghij']));
