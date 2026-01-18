// [...slug] (Catch-all Segments)
// 이 방식은 경로가 최소 하나 이상의 세그먼트를 가져야만 한다.
// /blog => 404 not found

// [[...slug]] (Optional Catch-all Segments)
// 대괄호를 두 번 사용하면 선택적이 된다. 즉, 경로에 아무것도 없어도 해당 페이지를 보여준다.

export default function Page() {
  return <h1>블로그 페이지 입니다.</h1>
}