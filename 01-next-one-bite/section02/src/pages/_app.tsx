import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// app컴포넌트는 루트 컴포넌트의 역할을 한다.
// 그리고 페이지 역할을 하는 컴포넌트가 렌더링된다.
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/test");
  };

  useEffect(() => {
    // 프리페칭을 명시적으로 하는법
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        {/* 프리페칭을 명시적으로 하지 않는 방법 */}
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button type="button" onClick={handleClickButton}>
            /test 페이지로 이동
          </button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
