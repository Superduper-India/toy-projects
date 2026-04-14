/**
 * p.179 연습문제 1
 */

function getIntersection(arr1, arr2) {
  const answer = [];
  const hashTable = {};

  for (const value of arr1) {
    hashTable[value] = true;
  }

  for (const value of arr2) {
    if (hashTable[value]) answer.push(value);
  }

  return answer;
}

console.log(getIntersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));
