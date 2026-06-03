/**
 * ❌ p.239 연습문제 3
 */

function getTriangularNumber(n) {
  if (n === 1) return 1;
  return n + getTriangularNumber(n - 1);
}

console.log(getTriangularNumber(7));
