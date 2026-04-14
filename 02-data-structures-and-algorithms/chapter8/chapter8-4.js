/**
 * p.179 연습문제 4
 */

function getCharacter(str) {
  const hashTable = {};

  for (const char of str) {
    hashTable[char] = 0;
  }

  for (const char of str) {
    hashTable[char] = hashTable[char] + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (hashTable[str[i]] === 1) return str[i];
  }
}

console.log(getCharacter('minimum'));
