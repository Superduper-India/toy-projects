import type { AppProps } from "next/app";
import Link from "next/link";

// app컴포넌트는 루트 컴포넌트의 역할을 한다.
// 그리고 페이지 역할을 하는 컴포넌트가 렌더링된다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
      </header>
      <Component {...pageProps} />
    </>
  );
}
