/**
 * ❌ p.239 연습문제 5
 */

function getUniquePath(rows, columns) {
  if (rows === 1 || columns === 1) return 1;
  return getUniquePath(rows - 1, columns) + getUniquePath(rows, columns - 1);
}

console.log(getUniquePath(3, 7));
