import { Task } from '../types/Task';

type TaskStatusProps = {
  tasks: Task[]; // 오직 Task Obj만 허용
  onClickDelete: (taskId: number) => void;
  onClickDone: (taskId: number) => void;
}

export default function TasksContainer({
  tasks,
  onClickDelete, onClickDone
}: TaskStatusProps) {
  return (
    <>
      <h2 className='tasks-title'>working... 🔥</h2>
      <ul className='tasks-box'>
        {tasks.map(task => (
          !task.isDone ?
            <li key={task.id} >
              <h2>{task.title}</h2>
              <p>{task.content}</p>
              <div className='buttons'>
                <button
                  type="button"
                  className='button-red'
                  onClick={() => onClickDelete(task.id)}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  className='button-green'
                  onClick={() => onClickDone(task.id)}
                >
                  완료
                </button>
              </div>
            </li>
            : null
        ))}
      </ul>
      <h2>done..! 🎉</h2>
      <ul className='tasks-box'>
        {tasks.map(task => (
          task.isDone ?
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.content}</p>
              <div className='buttons'>
                <button
                  type="button"
                  className='button-red'
                  onClick={() => onClickDelete(task.id)}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  className='button-green'
                  onClick={() => onClickDone(task.id)}
                >
                  취소
                </button>
              </div>
            </li>
            : null
        ))}
      </ul>
    </>
  );
}
