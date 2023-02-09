# 리액트 쿼리(React Query)
📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념
> ### 참고자료
> [리액트 쿼리 공식문서 v3](https://react-query-v3.tanstack.com/) <br/> [리액트 쿼리 공식문서 v4](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

## 리액트 쿼리란?

리액트 쿼리는 전역 상태를 건드리지 않고, 리액트앱에서 서버 상태(데이터) 가져오기, 캐싱, 동기화 및 업데이트를 쉽게 만든다. 즉, **서버 상태를 관리하기 위한 라이브러리** 중 하나다.

대부분의 상태관리 라이브러리는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 상태 작업에는 적합하지 않다. 다음은 서버 데이터의 특징들이다.

- 우리가 갖고있지 않는 위치에 원격으로 유지된다.
- 가져오기 및 업데이트를 위한 비동기 API가 필요하다.
- 내가 모르는 사이 다른 사람이 변경할 수 있다.
- 데이터가 오래되었을 수도 있다.

<br/>

## 리액트 쿼리의 장점
- 앱에서 많은 줄의 코드를 몇 줄의 리액트 쿼리 로직으로 대체할 수 있어서 코드의 복잡성을 줄이고, 유지보수를 쉽게하여 새 기능을 더 쉽게 추가할 수 있다.

- 캐싱하여 메모리 성능을 높여주기 때문에 앱의 응답이 빨라져서 사용자 경험이 좋아진다.

<br/>

## 리액트 쿼리의 사용법
아래는 리액트 쿼리의 3가지 핵심 개념이다.

- queries(쿼리): GET, POST메서드를 포함한 promise기반 메서드와 함께 쿼리를 사용해 서버에서 데이터를 가져올 수 있다. 주로 GET요청시 사용한다.

- mutations(변이): 쿼리와 달리 데이터를 생성/업데이트/삭제할때 사용한다. 주로 POST요청시 사용하며, 따로 설정을 안하면 자동으로 데이터를 캐싱한다. 여기서 캐싱이란 주어진 리소스의 복사본을 갖고있다가 요청시에 그것을 제공해서 메모리 성능을 높여준다.

- query invalidation(쿼리 무효화): POST요청할때 따로 설정안하면 자동으로 데이터를 캐싱한다. 여기서 캐싱이란 주어진 리소스의 복사본을 갖고있다가 요청시에 그것을 제공해서 메모리를 절약하는 기술이다. 특정값에 따라 계속 변해야하는 페이지라 컴포넌트가 바뀔때마다 데이터를 요청해야하는 경우에 무효화한다. 여기서 캐싱이란 주어진 리소스의 복사본을 저장하고 있다가 요청시에 그것을 제공하는 기술이다.

  `캐시: url입력해면 index.html안에 이미지태그로 저장된 리소스를 다운받는게 불편하니까 브라우저가 기억하고있는 것. 요청할때마다 미국을 갔다오는게 아니라 브라우저 내부적으로 가져오는 것(리소스의 복사본을 브라우저가 저장하고 있다가 요청시에 그것을 제공하는 기술임). 캐싱이 캐시하는 작업임 네트워크탭 유효시간 5분, 1시간 지나면 서버에 다시 요청함.`

아래 예제에서 queries(쿼리)는 고유한 키에 연결된 데이터의 비동기 소스에 대한 선언적 종속성이다. 컴포넌트 혹은 커스텀훅에서 쿼리를 구독하려면, useQuery훅을 고유한 키, 데이터나 에러를 응답하는 promise를 리턴하는 함수를 인자로 주어 호출해야한다.

```jsx
import { useQuery } from '@tanstack/react-query';
import { getPost } from './api';

const queries = useQuery({ queryKey: ['posts'], queryFn: getPost });
```

위 useQuery함수가 리턴하는 객체엔 다음과 같은 상태 중 하나가 포함되어있다. 대부분의 쿼리에서 isLoading, isError상태를 각각 확인한 뒤에 데이터를 사용할 수 있다고 가정하고 성공 상태를 렌더링한다.

- isLoading or status === 'loading' - The query has no data yet
- isError or status === 'error' - The query encountered an error
- isSuccess or status === 'success' - The query was successful and data is available
- error - If the query is in an isError state, the error is available via the error property.
- data - If the query is in a success state, the data is available via the data property.

```jsx
// status를 활용하는 방법
if (status === 'loading') {
  return <span>Loading...</span>;
}

// boolean값을 활용하는 방법
if (isLoading) {
  return <span>Loading...</span>;
}

if (isError) {
  return <span>Error</span>;
}
```

아래는 useMutation함수(hook)의 예이다. 참고로 mutation은 조건문(스코프)아래에 있으면 동작을 안한다. 그리고 queryClient는 무효 및 새로고침으로, 예를들어 버튼을 클릭했을 때 가져온 서버데이터를 바로 가져올 수 있어서 이벤트가 발생했을 때 바로 데이터를 업데이트 할 수 있다.

```jsx
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: addPost,
  onSuccess: () => {
    alert('다이어리 추가완료!');
    // 무효 및 새로고침 => 캐싱대신 새로 데이터를 가져옴(새로고침)
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});
```
