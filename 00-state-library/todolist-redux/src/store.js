import { configureStore } from '@reduxjs/toolkit';

// 관심사에 따라 reducer를 분리할 수 있다.
// 즉, toDoReducer, counterReducer등의 함수를 임포트 해와서
import toDoReducer from './reducer';

// 아래 객체의 reducer값에 toDoReducer, counterReducer등을 넣어주면,
// 이 코드에서 우리는 리듀서를 configureStore함수로 전달하고, 
// 이는 스토어 객체를 반환한다.
const store = configureStore({ reducer: toDoReducer });

export default store;
