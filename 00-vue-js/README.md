# 뷰 라이브러리

📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념

> [뷰 공식문서](https://v2.vuejs.org/)

## Vue.js란 무엇인가?

Vue는 사용자 인터페이스 구축을 위한 진보적인 프레임워크이다. 다른 `모놀리식` 프레임워크와 달리 Vue는 처음부터 점진적으로 채택할 수 있도록 설계되었다.(?) 핵심 라이브러리는 **뷰 레이어**에만 중점을 두고 있으며, 다른 라이브러리나 기존 프로젝트를 쉽게 선택하고 통합할 수 있다. 반면, Vue는 최신 도구와 지원되는 라이브러리를 함께 사용하여 정교한 단일 페이지 앱을 만들 수 있다. => 결국은 프레임워크라는 말인건가?

```
여기서 모놀리식이란, 마이크로서비스 아키텍쳐의 반대되는 개념으로 전통의 아키텍쳐를 지칭하는 의미이다. 하나의 서비스 또는 앱이 하나의 거대한 아키텍쳐를 가질 때, 모놀리식(Monolithic)하다고 한다.
```

## 선언적 렌더링

아래와 같이 간단한 템플릿 구문을 사용하여 선언적으로 데이터를 DOM에 렌더링할 수 있다. 이제 데이터와 dom이 연결되어있기 때문에 `app.message`의 값에 따라 화면이 다르게 렌더링되는 것을 확인할 수 있다. 그렇기 때문에 더이상 html과 직접적으로 상호작용할 필요없다. Vue가 단일 DOM요소(아래의 경우엔 app)에 직접 접근하여 조작한다. 이제 모든 작업은 새로 생성된 Vue 인스턴스 내에서 이루어진다.

```html
<div id="app">{{ message }}</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});
```

텍스트 외에도 다음과 같이 요소 속성을 바인딩할 수도 있다. 여기서 `v-bind`속성을 지시어라고 한다. 지시어에는 Vue에서 제공하는 특수 속성임을 나타내는 접두사 `v-`가 붙으며, 렌더링된 DOM에 특별한 반응형 동작을 적용한다. 여기서는 기본적으로 이 요소의 `title`속성을 Vue인스턴스의 `message`속성으로 최신 상태로 유지한다는 의미이다.

```html
<div id="app-2">
  <span v-bind:title="message"> Hover your mouse over me for a few seconds to see my dynamically bound title! </span>
</div>
```

```javascript
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  },
});
```

## 조건부 및 루프

요소의 존재 여부도 쉽게 전환할 수 있다. `app3.seen = false`를 입력하면 메시지가 사라진다. 이는 **텍스트**와 **속성**뿐만 아니라 **DOM구조**에도 데이터를 바인딩할 수 있음을 보여준다. 또한 Vue는 요소를 삽입/업데이트/제거할 때 자동으로 전환 효과 시스템을 제공한다.

```html
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

```javascript
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

app3.seen = false;
```
