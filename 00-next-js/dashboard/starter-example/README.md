## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Why optimize fonts?

Google은 수집한 실제 데이터의 처음 세 가지 지표인 Largest Contentful Paint(LCP), Interaction to Next Paint(INP), Cumulative Layout Shift(CLS)에 따라 웹사이트의 성능과 사용자 경험을 평가하여, 애플리케이션의 순위를 변경한다.
`참고로, 2024년 3월 12일부터 INP가 FID(First Input Delay)를 대체 했다.`

글꼴의 경우 브라우저가 처음에 시스템 글꼴로 텍스트를 렌더링한 다음 로드된 후 사용자 지정 글꼴로 교체할 때 **레이아웃 이동**이 발생한다. 이에 따라 CLS가 변경되어 애플리케이션의 성능에 영향을 줄 수 있다.

NextJS는 `next/font` 모듈을 사용할 때 애플리케이션의 글꼴을 자동으로 최적화한다. 런타임이 아닌, 빌드 시점에 글꼴 파일을 다운로드하여 다른 static assets과 함께 호스팅한다. 즉, 사용자가 앱을 방문할 때 성능에 영향을 줄 수 있는 글꼴에 대한 추가 네트워크 요청이 없다.

<br/>
