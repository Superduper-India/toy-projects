import { useQuery } from "react-query";

// 렌더링 중 데이터 페칭 오류를 발생시키는 컴포넌트 - 서드파티 라이브러리를 활용
const DataFetchingComponent = () => {
  const { data } = useQuery(
    "example",
    () => fetch("https://example.com/data").then((res) => res.json()),
    { suspense: true }
  );

  return <div>{data.title}</div>;
};

export default DataFetchingComponent;
