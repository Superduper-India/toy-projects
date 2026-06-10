/**
 * p.257 연습문제 1
 */

function addUntil100(arr) {
  const balance = addUntil100(arr.slice(1));
  if (arr.length === 0) return 0;
  // 100을 초과한다면
  if (arr[0] + balance > 100) {
    return balance;
  } else return arr[0] + balance;
}

// console.log(addUntil100());
