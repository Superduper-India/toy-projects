// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 제네릭 클래스는 생성자 함수에 전달하는 인수를 기준으로 타입을 추론하기 때문에, 따로 타이핑을 해주지 않아도 된다.
// T는 숫자 타입으로 추론된다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// T는 문자열 타입으로 추론된다.
const stringList = new List(['dd']);
stringList.push('ddd');
stringList.print();
