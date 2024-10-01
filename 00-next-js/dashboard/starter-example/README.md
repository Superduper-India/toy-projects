## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

<br/>

## Why optimize fonts?

Google은 수집한 실제 데이터의 처음 세 가지 지표인 Largest Contentful Paint(LCP), Interaction to Next Paint(INP), Cumulative Layout Shift(CLS)에 따라 웹사이트의 성능과 사용자 경험을 평가하여, 애플리케이션의 순위를 변경한다.
`참고로, 2024년 3월 12일부터 INP가 FID(First Input Delay)를 대체 했다.`

글꼴의 경우 브라우저가 처음에 시스템 글꼴로 텍스트를 렌더링한 다음 로드된 후 사용자 지정 글꼴로 교체할 때 **레이아웃 이동**이 발생한다. 이에 따라 CLS가 변경되어 애플리케이션의 성능에 영향을 줄 수 있다.

NextJS는 `next/font` 모듈을 사용할 때 애플리케이션의 글꼴을 자동으로 최적화한다. 런타임이 아닌, 빌드 시점에 글꼴 파일을 다운로드하여 다른 static assets과 함께 호스팅한다. 즉, 사용자가 앱을 방문할 때 성능에 영향을 줄 수 있는 글꼴에 대한 추가 네트워크 요청이 없다.

<br/>

## Why optimize navigation?

`a`태그를 사용하면 페이지간 이동할때 전체 페이지가 새로고침 된다.
하지만 `Link`를 사용하면 앱의 일부가 서버에서 렌더링되지만 전체 페이지 새로고침이 없어서 웹 앱처럼 느껴진다. 그 이유가 뭘까?

### 자동 코드 분할 및 prefetching

nextJS는 경로 세그먼트별로 애플리케이션을 자동으로 코드 분할한다.
이는 브라우저 초기로드시 모든 애플리케이션 코드를 로드하는 기존의 React SPA와는 다르다.
경로별로 코드를 분할하면 페이지가 격리되어, 특정 페이지에서 오류가 나도 나머지 앱은 계속 작동한다.

또한 프로덕션 환경에서 `<Link>` 컴포넌트가 브라우저의 뷰포트에 표시될 때마다 nextJS는 링크된 경로의 코드를 백그라운드에서 자동으로 프리패치 한다. 사용자가 링크를 클릭할 때쯤이면 해당 페이지의 코드가 이미 백그라운드에서 로드되어 있으므로 페이지 전환이 거의 즉각적으로 이루어진다!

<br/>
