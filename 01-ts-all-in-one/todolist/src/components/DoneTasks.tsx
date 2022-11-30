type Task = {
  id: number,
  title: string,
  content: string,
  working: boolean,
  isDone: boolean,
}

type DoneTasksProps = {
  doneTasks: Task[]; // 오직 Task Obj만 허용
  onClickDelete: (taskId: number) => unknown;
  onClickCancel: (task: Task) => unknown;
}

export default function DoneTasks({
  doneTasks,
  onClickDelete, onClickCancel
}: DoneTasksProps) {
  return (
    <ul className='tasks-box'>
      <h2>done..! 🎉</h2>
      <div className='tasks'>
        {doneTasks.map(task => (
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
                onClick={() => onClickCancel(task)}
              >
                취소
              </button>
            </div>
          </li>
        )
        )}
      </div>
    </ul>
  );
}
