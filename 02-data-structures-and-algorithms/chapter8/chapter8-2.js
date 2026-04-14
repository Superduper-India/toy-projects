/**
 * ❌ p.179 연습문제 2
 */

function getFirstDuplicate(arr) {
  const hashTable = {};

  // 중복값 반환하거나, 해시테이블에 저장
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) return arr[i];
    else hashTable[arr[i]] = true;
  }
}

console.log(getFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f']));
