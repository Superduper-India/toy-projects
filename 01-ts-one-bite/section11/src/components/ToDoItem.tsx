import { useToDoDispatch } from "../App";
import { Todo } from "../types";

function ToDoItem({ id, content }: Todo) {
  const dispatch = useToDoDispatch();
  return (
    <div>
      {id}번: {content}
      <button type="button" onClick={() => dispatch.handleClickDelete(id)}>
        삭제
      </button>
    </div>
  );
}

export default ToDoItem;
