import { useRouter } from "next/router";

export default function Page() {
  // 여기서 useRouter훅에 대해서 두 번 렌더링 되는건?....
  // => 쿼리스트링의 값을 가져오기 위해서이다.
  const router = useRouter();
  console.log("dddd", router);
  const { question } = router.query;
  console.log("dddd 222", question);

  return <h1>검색 페이지 입니다.</h1>;
}
