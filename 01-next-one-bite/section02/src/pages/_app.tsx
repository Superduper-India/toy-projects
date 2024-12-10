import type { AppProps } from "next/app";

// app컴포넌트는 루트 컴포넌트의 역할을 한다.
// 그리고 페이지 역할을 하는 컴포넌트가 렌더링된다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h2>글로벌 헤더</h2>
      <Component {...pageProps} />
    </>
  );
}
