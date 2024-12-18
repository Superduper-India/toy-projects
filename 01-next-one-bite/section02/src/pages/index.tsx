// 프리페칭
// 페이지를 사전에 불러온다.
// 즉, 현재 사용자가 보고있는 페이지에서 링크들을 통해 이동할 수 있는 연결된 페이지들을 사전에 불러오는 기능

// 1. 초기 접속 요청 시에 하이드레이션을 더 빠르게 처리할 수 있도록 만든다.
// 2. 프리페칭을 통해서 초기 접속 요청 이후에 페이지 이동까지 빠르게 처리할 수 있게한다.

export default function Page() {
  return <h1>홈</h1>;
}