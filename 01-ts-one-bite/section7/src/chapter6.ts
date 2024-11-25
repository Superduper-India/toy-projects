// 프로미스
// 프로미스는 제네릭 클래스로 구현되어 있다.
// 따라서 새로운 Promise를 생성할 때 다음과 같이 타입 변수에 할당할 타입을 직접 설정해주면 해당 타입이 바로 resolve 결과값의 타입이 된다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    // reject함수에 인수로 전달하는 값, 즉 실패의 결과값 타입은 정의할 수 없다.
    // 그래서 catch메서드에서 사용하려면 타입 좁히기를 통해 안전하게 사용하는걸 권장한다.
    reject('실패!!');
  }, 3000);
});

promise.then((response) => {
  // response는 number타입
  console.log(response * 10);
});

promise.catch((error) => {
  if (typeof error === 'string') {
    console.log(error);
  }
});

type Post = {
  id: number;
  title: string;
  content: string;
};

// 어떤 함수가 Promise 객체를 반환한다면 함수의 반환값 타입을 직접 명시할 수 있다.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 본문',
      });
    }, 3000);
  });
}
