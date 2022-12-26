// 슬라이스 리듀서란 무엇일까?

// 아래는 여러개의 관심사(공통) 컴포넌트일 경우의 예시다.
// 이 예시에서 state.users, state.posts, state.comnments는 각각 리덕스 상태의 조각이다.
// 이를 슬라이스 리듀서 함수라고 한다.

import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})

// 그럼 위와 같은 조각들로 어떻게 단일 루트 리듀서를 얻고, 리덕스 스토어 상태의 내용을 정의할 수 있을까?

// 리덕스엔 combineReducers라는 기능이 있고, 슬라이스 리듀서를 인수로 받아서
// 액션이 디스패치될때마다 해당 함수가 자동으로 실행돼서 각 슬라이스 리듀서를 호출하는 함수를 반환한다.
// 각 슬라이스 리듀서의 반환값은 최종적으로 하나의 객체로 합쳐진다.
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})

// 아래와 같이 위 rootReducer를 configureStore의 인수로 전달 줄 수도 있고,
// 아니면 처음에 본 형태처럼 reducer에 대한 인수로 직접 combineReducers의 인수를 전달 줄 수도 있다.
const store = configureStore({
  reducer: rootReducer
})
