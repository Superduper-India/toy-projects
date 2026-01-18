// Route Groups

// (auth)폴더는 url경로에 영향을 주지 않는다.
// (auth)폴더 안에 layout.tsx를 만들면, 로그인과 회원가입 페이지에만 배경색이나 로고가 다른 레이아웃을 한번에 적용할 수 있다.

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <h1>auth에만 적용되는 디자인</h1>
      <body>{children}</body>
    </html>
  )
}