import { useState } from 'react';

import TopNavBar from './components/TopNavBar';
import TaskForm from './components/TaskForm';
import TasksContainer from './components/TasksContainer';

import { Contents } from './types/Contents';

import './App.css';

function App() {
  const [contents, setContents] = useState<Contents>({ // state의 useState의 인자로 초기 값을 넘겨준다.
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
    const { target: { name, value } } = event;
    setContents({
      ...contents,
      task: {
        ...task,
        [name]: value,
      },
    })
  }

  const handleClickAddTask = () => {
    const nowTask = task;
    if (nowTask !== undefined) {
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
  }

  const handleClickDelete = (selectedId: number) => {
    const leftTasks = tasks.filter(i => i.id !== selectedId);
    setContents({
      ...contents,
      tasks: leftTasks,
    })
  }

  function handleClickDone(selectedId: number) {
    const selectedTask = tasks.find(i => i.id === selectedId)!;
    const leftTasks = tasks.filter(i => i !== selectedTask);

    if (selectedTask.isDone) {
      setContents({
        ...contents,
        tasks: [
          ...leftTasks,
          {
            ...selectedTask,
            isDone: false,
          }
        ]
      })
    } else {
      setContents({
        ...contents,
        tasks: [
          ...leftTasks,
          {
            ...selectedTask,
            isDone: true,
          }
        ]
      })
    }
  }

  return (
    <>
      <TopNavBar />
      <TaskForm
        title={title}
        content={content}
        onClickAddTask={handleClickAddTask}
        onChangeContents={handleChangeContents}  // 왼쪽에 있는거 기준으로 받아서 쓴다. 오른쪽은 넘겨주는함수
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
