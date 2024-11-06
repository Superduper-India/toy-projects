// 접근 제어자
// 접근 제어자(Access Modifier)는 타입스크립트에서만 제공되는 기능으로
// 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능이다.
// 타입스크립트에서는 다음과 같은 3개의 접근 제어자를 사용할 수 있다.
// - public : 모든 범위에서 접근 가능
// - private : 클래스 내부에서만 접근 가능
// - proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

class Employee {
  // 필드
  public age: number; // public => 어디서든 접근 가능하다.
  protected name: string; // protected => 클래스 외주에서는 접근이 안되지만 클래스 내부와 파생 클래스에서 접근이 가능하다.
  private position: string; // private => 클래스 내부에서만 이 필드에 접근할 수 있다.

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 다음과 같이 생성자 매개변수에 접근 제어자를 설정할 수도 있다. 그렇게 되면 필드와 생성자 내부 코드를 생략할 수 있다.
  //  constructor(
  //   private name: string,
  //   protected age: number,
  //   public position: string
  // ) {}

  // 메서드
  work() {
    console.log(`${this.position}`); // 여기서는 접근 가능
  }
}

// 아래는 Employee를 확장하는 파생 클래스
class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    this.name; // ✅ protected => 가능
    // this.position; // ❌ private => 오류
  }
}

const employee = new Employee('이정환', 27, 'devloper');

employee.age = 30; // public
// employee.name = '홍길동'; // protected
// employee.position = '디자이너'; // private
