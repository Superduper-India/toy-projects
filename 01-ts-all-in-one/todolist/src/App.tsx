import { useState } from 'react';

import TopNavBar from './components/TopNavBar';
import TaskForm from './components/TaskForm';
import TasksContainer from './components/TasksContainer';

import { Contents } from './types/Contents';

import './App.css';
function App() {
  const [contents, setContents] = useState<Contents>({
    tasks: [],
    task: {
      id: 1,
      title: '',
      content: '',
      isDone: false,
    }
  });

  const { tasks, task } = contents;
  const { title, content } = task;

  const handleChangeContents = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { id, value } } = event;
    setContents({
      ...contents,
      task: {
        ...task,
        // name대신 id값을 참조할 수 있다
        // [keyName]이렇게 객체안에 들어가야 keyName을 키값으로 인식
        [id]: value,
      },
    })
  }

  // ToDo 따로 훅으로 빼서 사용하는 경우가 많음.
  const handleClickAddTask = () => {
    const nowTask = task;

    // 안에서 배열돌려서 새로운 배열을 받아보는 방법도 있음
    setContents({
      tasks: [...tasks, nowTask],
      task: {
        id: nowTask.id + 1,
        title: '',
        content: '',
        isDone: false,
      }
    })
  }

  const handleClickDelete = (selectedId: number) => {
    const leftTasks = tasks.filter(i => i.id !== selectedId);
    setContents({
      ...contents,
      tasks: leftTasks,
    })
  }

  function handleClickDone(selectedId: number) {
    // ToDo !대신 타입스크립트 문제를 해결하기
    const selectedTask = tasks.find(i => i.id === selectedId)!;
    const leftTasks = tasks.filter(i => i !== selectedTask);

    setContents({
      ...contents,
      tasks: [
        ...leftTasks,
        {
          ...selectedTask,
          isDone: !selectedTask.isDone,
        }
      ]
    })
  }

  return (
    <>
      <TopNavBar />
      <TaskForm
        title={title}
        content={content}
        onClickAddTask={handleClickAddTask}
        // 왼쪽에 있는거 기준으로 받아서 쓴다. 오른쪽은 넘겨주는함수
        onChangeContents={handleChangeContents}
      />
      <TasksContainer
        tasks={tasks}
        onClickDone={handleClickDone}
        onClickDelete={handleClickDelete}
      />
    </>
  );
}

export default App;
