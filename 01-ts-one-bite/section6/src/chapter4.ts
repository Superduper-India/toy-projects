// 인터페이스와 클래스
// 타입스크립트의 인터페이스는 클래스의 설계도 역할을 할 수 있다.
// Character클래스의 설계도 역할을 한다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character는 CharacterInterface를 구현한다.
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number, private extra: string) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
