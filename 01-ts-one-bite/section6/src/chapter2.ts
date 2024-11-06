// 타입스크립트의 클래스
class Employee {
  // 필드
  name: string = '';
  age: number = 0;
  position: string = '';

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

// 타입스크립트의 클래스는 타입으로도 활용할 수 있다.
const employeeA = new Employee('선영', 32, '개발자');
