type Task = {
  id: number,
  title: string,
  content: string,
  working: boolean,
  isDone: boolean,
}

type DoingTasksProps = {
  tasks: Task[]; // 오직 Task Obj만 허용
  onClickDelete: (taskId: number) => unknown;
  onClickDone: (task: Task) => unknown;
}

export default function DoingTasks({
  tasks,
  onClickDelete, onClickDone
}: DoingTasksProps) {
  return (
    <ul className='tasks-box'>
      <h2>working... 🔥</h2>
      <div className='tasks'>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.content}</p>
            <div className='buttons'>
              <button
                className='button-red'
                type="button"
                onClick={() => onClickDelete(task.id)}
              >
                삭제하기
              </button>
              <button
                className='button-green'
                type="button"
                onClick={() => onClickDone(task)}
              >
                완료
              </button>
            </div>
          </li>
        )
        )}
      </div>
    </ul>
  );
}
