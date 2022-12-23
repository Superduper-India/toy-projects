import { configureStore } from '@reduxjs/toolkit';

// ui(컴포넌트)의 관심사에 따라 reducer를 분리할 수 있다.
// 즉, toDoReducer, counterReducer등의 모든 리듀서 함수를 가져와서
// {reducer: {todo: toDoReducer}}와 같은 형태로 넣어줄 수 있고,
// 여기서 키값 todo는 최종 상태 값의 키를 정의한다.
import toDoReducer from './reducer';

// configureStore함수는 reducer를 인수로 받아 스토어 객체를 반환한다.
const store = configureStore({ reducer: toDoReducer });

export default store;
