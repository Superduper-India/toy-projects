/**
 * p.215 연습문제 4
 */

function getNumbers(numberArr) {
  numberArr.forEach((number) => {
    if (typeof number === 'number') {
      console.log(number);
    } else {
      getNumbers(number);
    }
  });
}

console.log(
  getNumbers([
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [8, [9, 10, 11, [12, 13, 14]]],
    [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
    33,
  ]),
);
