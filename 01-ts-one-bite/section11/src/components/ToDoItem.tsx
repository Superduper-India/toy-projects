import { Todo } from "../types";

interface ToDoItemProps extends Todo {
  onClickDelete: (idProp: number) => void;
}

function ToDoItem({ id, content, onClickDelete }: ToDoItemProps) {
  return (
    <div>
      {id}번: {content}
      <button type="button" onClick={() => onClickDelete(id)}>
        삭제
      </button>
    </div>
  );
}

export default ToDoItem;
