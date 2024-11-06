// 자바스크립트의 클래스 소개
// 클래스는 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법이다.
class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부 함');
  }

  // this 현재 자신이 속한 객체를 의미한다.
  // 그래서 this를 활용해 객체 프로퍼티의 값을 활용할 수 있다.
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // super:
    // name, grade, age값을 설정하기 위해
    // 상속받는 클래스의 생성자를 함께 호출해주는 메서드
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentB = new StudentDeveloper('홍길동', 'A+', 27, 'ts');

console.log(studentB);
