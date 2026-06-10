/**
 * ❌ p.257 연습문제 3
 */

function uniquePaths(rows, columns, memo = {}) {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  const key = `${rows},${columns}`;

  if (!memo[key]) {
    memo[key] = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo);
  }

  return memo[key];
}

console.log(uniquePaths(2, 3));
