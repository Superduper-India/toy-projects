type ToDoFormProps = {
  taskTitle: string,
  taskContent: string,
  onClickAddTask: () => unknown;
  // void가 함수의 리턴값인 경우, 리턴값이 없거나 undefined
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToDoForm({
  taskTitle, taskContent,
  onClickAddTask, onChangeTitle, onChangeContent,
}: ToDoFormProps) {
  return (
    <form className='to-do-form'>
      <div>
        <label htmlFor="taskTitle">제목
          <input
            type="text"
            id="taskTitle"
            onChange={onChangeTitle}
            value={taskTitle}
          />
        </label>
        <label htmlFor="taskContent">내용</label>
        <input
          type="text"
          id="taskContent"
          onChange={onChangeContent}
          value={taskContent}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => onClickAddTask()}
        >
          추가하기
        </button>
      </div>
    </form >
  );
}