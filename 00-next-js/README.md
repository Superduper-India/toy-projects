# 넥스트js

📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br/>

# 💡 핵심 개념

> ### 참고자료
>
> [넥스트 공식문서](https://nextjs.org/) <br/> [넥스트 FOUNDATIONS](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website) <br/> [Next.js의 Hydrate란?](https://helloinyong.tistory.com/315)

## 넥스트js 란?

넥스트js는 빠른 웹 애플리케이션을 만들기 위한 빌딩 블록을 제공하는 유연한 React프레임워크이다.
프레임워크란 넥스트js가 리액트에 필요한 도구 및 구성을 처리하고 앱에 대한 추가 구조, 기능 및 최적화를 제공한다는 의미이다.
<br/>
최신 앱을 구축할 때 고려해야 할 사항들은 다음과 같다. 그리고 앱의 각 부분에 대해 솔루션을 직접 구축할지 아니면 라이브러리 및 프레임워크와 같은 다른 도구를 사용할지 결정해야 한다.

- 사용자 인터페이스(User Interface): 사용자가 앱을 소비하고 상호작용하는 방법
- 라우팅(Routing): 사용자가 앱의 여러 부분을 탐색하는 방법
- 데이터 가져오기(Data Fetching): 데이터가 있는 위치와 데이터를 가져오는 방법
- 렌더링(Rendering): 정적 또는 동적 콘텐츠를 렌더링하는 시기와 위치
- 통합(Integrations): 내가 사용하는 third-party(제 3자) 서비스(CMS, 인증, 결제 등) 및 연결 방법
- 인프라(Infrastructure): 앱 코드(서버리스, CDN, Edge 등)를 배포, 저장 및 실행하는 곳
- 성능(Performance): 최종 사용자를 위해 앱을 최적화하는 방법
- 확장성(Scalability): 팀, 데이터 및 트래픽이 증가함에 따라 앱이 적응하는 방식
- 개발자 경험(Developer Experience): 앱 구축 및 유지 관리 팀의 경험

<br/>

기존의 리액트js는 상호작용하는 사용자 인터페이스를 구축하기 위한 js라이브러리다. 사용자 인터페이스란 사용자가 화면에서 보고 상호작용하는 요소를 말한다.
<br/>
리액트는 라이브러리로서 UI를 빌드하는데 유용한 기능을 제공하지만 앱에서 해당 기능을 사용할 권한을 개발자에게 준다.

리액트의 성공 중 일부는 앱구축의 다른 측면에 대해 상대적으로 의견이 분분하다는 것이다. 이로 인해 타사 도구 및 솔루션이 번성하는 생태계가 탄생했다.

그러나 완전한 React앱을 처음부터 구축하려면 약간의 노력이 필요하다는 의미기도 하다. 개발자는 일반적인 앱 요구 사항에 맞게 도구를 설계하고 솔루션을 처음부터 다시 만드는데 시간을 할애해야 한다.

  <img src="./img/next-app.png" width="80%"/>

<br/>

## 하이드레이션(hydration) - 수화작용

웹 개발에서 hydrate는 다음과 같은 프로세스를 말한다.

- 서버단에서 Pre-Rendering된 html페이지와 번들링된 js파일을 클라이언트에게 보낸다.
- 클라이언트단에서 html코드와 js이벤트 리스너 및 상태를 연결한다.
  <img src="./img/hydration-steps.png" width="80%"/>

기존의 React는 js파일만을 이용하여 웹 화면을 구성하는 원리를 갖고있어서 html코드는 아래와 같이 안에 내용이 하나도 없다. 이는 CSR(Client Side Rendering)이 SEO에 적합하지 않은 이유기도 하다.

```javascript
// public/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

단순 뼈대만 있는 html document와 js파일들을 클라이언트로 모두 보낸 뒤, 클라이언트 단에서 js코드들을 통해 웹 화면을 렌더링하며 페이지를 그리게 된다. 그리고 렌더링을 한 뒤에도 페이지 내 동작하는 모든 이벤트 또한 js로 인해 일어나게 된다.
<br/>

아래 코드처럼 `index.js`의 js코드에서 모든 화면을 렌더링한 뒤 html dom요소 중 root라는 아이디를 가진 엘리먼트를 찾아서 하위로 주입을 하게 된다.

```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

넥스트js는 클라이언트에게 웹 페이지를 보내기 전에 서버단에서 미리 웹 페이지를 Pre-Rendering한다. 그리고 Pre-Rendering으로 인해 생성된 html document를 클라이언트에게 전송한다.
<br/>

그런데 이 시점에서 클라이언트가 받은 웹 페이지는 단순히 웹 화면만 보여주는 html일 뿐이고, js요소들이 하나도 없다. 이는 웹 화면을 보여주고 있지만, 특정 js모듈 뿐 아니라 단순 클릭과 같은 이벤트 리스너들이 각 웹 페이지의 dom요소에 하나도 적용되지 않은 상태임을 말한다.
<br/>

넥스트js 서버에서는 Pre-Rendering된 웹 페이지를 클라이언트에 보내고 나서, 바로 리액트가 번들링 된 js코드들을 클라이언트에 전송한다. 그리고 이 js코드들이 이전에 보내진 html dom요소 위에서 한번 더 렌더링을 하면서, 각자 자기 자리를 찾아가며 매칭된다.
<br/>

이 과정을 Hydrate라고 부른다. 이는 마치 js코드들이 dom요소 위에 물을 채우듯 필요로 하던 요소들을 채운다하여 이와같은 용어를 쓴다고 한다.
<br/>

서버에서 한 번 렌더링하고, 클라이언트에서도 한 번 더 렌더링하면 비효율적인 것이 아닌가 하는 의문이 들 수 있다. 하지만 서버단에서 빠르게 Pre-Rendering하고 유저에게 빠른 웹 페이지로 응답할 수 있다는 것에 더욱 큰 이점을 가져갈 수 있다. 심지어 Pre-Rendering한 document는 모든 js요소들이 빠진 굉장히 가벼운 상태이므로 클라이언트에게 빠른 로딩이 가능하다. 클라이언트 단에서 js가 렌더링할 때, 단지 각 dom요소에 js속성을 매칭시키기 위한 목적이므로 실제 웹 페이지를 다시 그리는 과정까지는 하지 않는다.(Paint과정이 생략된다.)
