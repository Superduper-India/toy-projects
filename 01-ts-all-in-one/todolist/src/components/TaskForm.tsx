type ToDoFormProps = {
  title: string,
  content: string,
  onClickAddTask: () => void;// void가 함수의 리턴값인 경우, 리턴값이 없거나 undefined
  onChangeContents: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TaskForm({
  title, content,
  onClickAddTask, onChangeContents,
}: ToDoFormProps) {
  return (
    <form className='to-do-form'>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChangeContents}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={onChangeContents}
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