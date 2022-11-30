import { useState } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar';
import ToDoForm from './components/ToDoForm';
import DoingTasks from './components/DoingTasks';
import DoneTasks from './components/DoneTasks';

type Task = {
  id: number,
  title: string,
  content: string,
  working: boolean,
  isDone: boolean,
}

type Contents = {
  tasks: Task[],
  doneTasks: Task[],
  newId: number,
  taskTitle: string,
  taskContent: string,
}

function App() {
  const [contents, setContents] = useState<Contents>({
    tasks: [],
    doneTasks: [],
    newId: 100,
    taskTitle: '',
    taskContent: '',
  }); // state의 useState의 인자로 초기 값을 넘겨준다.

  const {
    tasks,
    doneTasks,
    newId, taskTitle, taskContent,
  } = contents;

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = event;
    setContents({
      ...contents,
      taskTitle: value,
    })
  }

  function handleChangeContent(event: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = event;
    setContents({
      ...contents,
      taskContent: value,
    })
  }

  function handleClickAddTask() {
    setContents({
      ...contents,
      tasks: [...tasks, {
        id: newId,
        title: taskTitle,
        content: taskContent,
        working: true,
        isDone: false,
      }],
      newId: newId + 1,
      taskTitle: '',
      taskContent: '',
    })
  }

  function handleClickDone(seletedTask: Task) {
    const remainTasks = tasks.filter((obj: Task) => obj.id !== seletedTask.id);

    setContents({
      ...contents,
      tasks: [...remainTasks],
      doneTasks: [...doneTasks, {
        id: seletedTask.id,
        title: seletedTask.title,
        content: seletedTask.content,
        working: false,
        isDone: true,
      }]
    })
  }

  function handleClickCancel(seletedTask: Task) {
    const workingTasks = doneTasks.filter(
      (obj: Task) => obj.id !== seletedTask.id
    );

    setContents({
      ...contents,
      doneTasks: [...workingTasks],
      tasks: [...tasks, {
        id: seletedTask.id,
        title: seletedTask.title,
        content: seletedTask.content,
        working: true,
        isDone: false,
      }]
    })
  }

  function handleClickDelete1(deletedId: number) {
    const woringTasks = tasks.filter((obj: Task) => obj.id !== deletedId);
    setContents({
      ...contents,
      tasks: [...woringTasks],
    })
  }

  function handleClickDelete2(deletedId: number) {
    const isDoneTasks = doneTasks.filter((obj: Task) => obj.id !== deletedId);
    setContents({
      ...contents,
      doneTasks: [...isDoneTasks],
    })
  }

  return (
    <>
      <TopNavBar />
      <ToDoForm
        onClickAddTask={handleClickAddTask}
        onChangeTitle={handleChangeTitle} // 왼쪽에 있는거 기준으로 받아서 쓴다. 오른쪽은 넘겨주는함수
        onChangeContent={handleChangeContent}
        taskTitle={taskTitle}
        taskContent={taskContent}
      />
      <DoingTasks
        tasks={tasks}
        onClickDone={handleClickDone}
        onClickDelete={handleClickDelete1}
      />
      <DoneTasks
        doneTasks={doneTasks}
        onClickCancel={handleClickCancel}
        onClickDelete={handleClickDelete2}
      />
    </>
  );
}

export default App;
