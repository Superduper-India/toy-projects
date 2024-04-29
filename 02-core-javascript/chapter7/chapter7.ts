// 7-2 자바스크립트의 클래스

// 아래에서 arrInstance라는 인스턴스가 생성됐다.
// 이때 Array를 일종의 클래스라고 하면,
// Array의 prototype 객체 내부 요소들만 해당 인스턴스에 '상속'된다고 볼 수 있다.
const arrInstance = new Array();

// ## 스태틱 메서드, 프로토타입 메서드

// 2. rect1인스턴스엔 아래와 같이 width, height프로퍼티에 각각 3,4의 값이 할당된다.
var Rectangle = function (width, height) { // 생성자함수
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () { // 프로토타입 메서드
    return this.width * this.height
}

Rectangle.isRectangle = function (instance) { // 스태틱 메서드
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
}

// 1. 아래에서 생성된 인스턴스를 rect1에 할당한다.
var rect1 = new Rectangle(3, 4)
// 아래처럼 인스턴스에서 직접 호출할 수 있는 메서드가 프로토타입 메서드이다.
// console.log(rect1.getArea())
// 아래처럼 인스턴스에서 직접 접근할 수 없는 메서드를 스태틱 메서드라고 한다.
// console.log(rect1.isRectangle(rect1))
// 스태틱 메서드는 아래와 같이 생성자 함수를 this로 해야만 호출 할 수 있다.
console.log(Rectangle.isRectangle(rect1))
