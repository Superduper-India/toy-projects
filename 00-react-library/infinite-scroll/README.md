# 인피니트 스크롤 구현하기

> ### 참고자료
>
> - [MDN | Intersection Observer API](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)

- [Intersection Observer API의 사용법과 활용방법](http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/)

<br />

# Intersection observer API

Intersection observer API는 타겟 요소가 부모 요소, 또는 최상위 문서의 뷰포트의 교차영역에서 발생하는 변화를 비동기로 관찰하는 방법을 제공한다.

# Intersection observer을 언제 사용할까?

- 페이지 스크롤 시 이미지를 Lazy-loading(지연 로딩)할 때

- Infinite scrolling(무한 스크롤)을 통해 스크롤할 때 새로운 콘텐츠를 불러올 때
- 광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
- 사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

# Intersection observer의 생성 및 설정

아래와 같이 intersection observer를 생성할 수 있다. 생성자 함수의 첫번째 인자인 `callback`은 콜백은 다음과 같은 상황에 호출된다.

- target요소가 가시성이 변경될 때마다, 즉 `threshold`를 충족하면, 즉 기기 뷰포트나 root요소가 교차할 때 콜백 함수를 실행

- observer가 최초로 target을 관측하도록 요청받을 때마다 콜백 함수를 실행

```tsx
let observer = new IntersectionObserver(callback, options);
```

그 외 두번째 인자인 `options`객체는 콜백이 호출되는 상황을 조작할 수 있다. 각 필드값에 대한 설명은 아래와 같다.

- `root`: target의 가시성을 확인할 때 사용되는 뷰포트 요소. 기본값은 브라우저 뷰포트이며, null이거나 지정되지 않을 때 기본값으로 설정된다.

- `rootMargin`: root가 가진 여백. 기존값은 0이며, 교차성을 계산하기 전에 적용된다.

- `threshold`: 1.0은 target요소가 root에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미한다. 만약 25%단위로 요소의 가시성이 변경될 때마다 콜백이 실행되게 하고 싶다면 [0, 0.25, 0.5, 0.75, 1]과 같은 배열을 설정하라.

```tsx
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};
```

# 관찰할 요소 타겟팅

아래와 같이 관찰할 대상(target)을 선언하고, 해당 속성을 관찰시킨다. 그리고 `new`키워드로 `IntersectionObserver`를 등록하고 observer 인스턴스를 할당한다.

```tsx
//
const observer = new IntersectionObserver(callback);

let target = document.querySelector('#listItem');
observer.observe(target);
```

target이 지정된 `threshold`을 충족할 때마다 콜백이 호출된다. 콜백은 객체 목록(`entries`)과 관찰자(`observer`)를 수신한다. 각각 아래와 같다.

- `entries`: target요소가 가시성이 변경될 때마다, 즉 `threshold`를 충족하면, 즉 기기 뷰포트나 root요소가 교차할 때 콜백 함수를 실행

- `observer`: observer가 최초로 target을 관측하도록 요청받을 때마다 콜백 함수를 실행

그리고 각 타겟 요소인 `entry`의 속성은 아래와 같다.

- `entry.boundingClientRect`: 타겟 요소의 정보를 반환
- `entry.rootBounds`: root요소의 정보를 반환, root를 선언하지 않았을 경우 null을 반환
- `entry.intersectionRect` 교차된 영역의 정보를 반환
- ⭐️ `entry.intersectionRatio`: threshold와 비슷하다. 교차영역에 타겟 요소가 얼마나 교차되었는지 비율에 대한 정보를 반환한다. threshold와 같이 0.0부터 1.0사이의 값을 반환한다.
- ⭐️ `entry.isIntersecting`: 타겟 요소가 교차 영역에 있는 동안 true를 반환, 그 외의 경우 false를 반환
- ⭐️ `entry.target`: 타겟 엘리먼트를 반환
- ⭐️ `entry.time` 교차가 기록된 시간을 반환

```tsx
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // 각 entry는 변경된 entry에 대한 교차로 변경을 설명합니다.
    // 타겟 요소:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```
