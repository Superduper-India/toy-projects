// 서로소 유니온 타입 (tagged 유니온 타입)
// 교집합이 없는 타입들, 즉 서로소(공집합) 관계에 있는 타입들을 모아 만든 유니온 타입

// 아래와 같이 tag프로퍼티의 스트링 리터럴 타입은 1개의 값만 포함하기 때문에 교집합은 있을 수 없다. 즉 never(공집합)다.
type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

// User는 서로소 유니온 타입이 됐다.
type User = Admin | Member | Guest;

function login(user: User) {
  if (user.tag === 'ADMIN') {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === 'MEMBER') {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}
