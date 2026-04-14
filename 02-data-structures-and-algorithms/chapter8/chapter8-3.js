/**
 * p.179 연습문제 3
 */

function getCharacter(str) {
  const alphabetList = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  const hashTable = {};

  for (const value of str.replaceAll(' ', '')) {
    hashTable[value] = true;
  }

  for (const char of alphabetList) {
    if (!hashTable[char]) return char;
  }
}

console.log(getCharacter('the quick brown box jumps over a lazy dog'));
