/**
 * ❌ p.239 연습문제 2
 */

function getEvenNumber(arr) {
  if (arr.length === 0) return [];

  // 짝수면 배열에 포함
  if (arr[0] % 2 === 0) return [arr[0]].concat(getEvenNumber(arr.slice(1)));
  else return getEvenNumber(arr.slice(1));
}

console.log(getEvenNumber([1, 2, 3, 4, 5]));
