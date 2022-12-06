import { createSlice } from '@reduxjs/toolkit';
// 리듀서 로직의 자세한 부분에 대해선 reducer-study.js 참고.
// 리듀서는 이전의 상태와 액션을 인자로 받아 상태변경이 일어나면 새상태를 반환하고,
// 변경이 필요하지 않다면 기존 상태를 그대로 반환한다.

// 아래는 위 리듀서 로직을 한가지 함수(createSlice)에 전부 넣은 것이다. 
export const toDoSlice = createSlice({
  name: 'toDo',
  // 초기상태
  initialState: {
    tasks: [],
    task: {
      id: 1,
      title: '',
      content: '',
      isDone: false,
    },
    selectedTask: {},
  },
  // 컴포넌트에서 action을 dispatch시 매칭되는 이름의 메서드가 실행된다.
  reducers: {
    changeInput: (state, { payload: { id, value } }) => {
      const { task } = state;
      return {
        ...state,
        task: {
          ...task,
          [id]: value,
        }
      };
    },
    clickAddTask: (state) => {
      const { tasks, task } = state;
      return {
        ...state,
        tasks: [...tasks, task],
        task: {
          ...task,
          id: task.id + 1,
          title: '',
          content: '',
        }
      };
    },
    clickDone: (state, { payload: selectedId }) => {
      const { tasks } = state;
      const selectedTask = tasks.find(task => task.id === selectedId);
      const otherTasks = tasks.filter(task => task !== selectedTask);

      return {
        ...state,
        tasks: [...otherTasks,
        {
          ...selectedTask,
          isDone: !selectedTask.isDone,
        }
        ]
      };
    },
    clickDelete: (state, { payload: selectedId }) => {
      const { tasks } = state;
      const otherTasks = tasks.filter(task => task.id !== selectedId);
      return {
        ...state,
        tasks: [...otherTasks]
      };
    },
  }
});

// toDoSlice의 actions객체를 구조분해할당으로 액션의 이름을 export한다.
export const {
  changeInput, clickAddTask, clickDone, clickDelete, clickSelectedTask
} = toDoSlice.actions;

// toDoSlice의 reducer함수를 toDoReducer에 할당한 뒤, export default한다.
const toDoReducer = toDoSlice.reducer;
export default toDoReducer;
