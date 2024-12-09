import { useRef, useReducer } from "react";
import Editor from "./components/Editor";
import ToDoItem from "./components/ToDoItem";
import { Todo } from "./types";
import "./App.css";

// 서로소 유니언 타입을 사용하기 때문에 타이포 같은 실수를 방지할 수 있다.
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

function App() {
  // useReducer는 컴포넌트에 reducer를 추가하는 React Hook이다.
  const [toDos, dispatch] = useReducer(reducer, []);
  // useState는 초기값으로 전달하는 인수에 따라서 상태값의 타입을 자동으로 추론해준다.
  // => 제네릭 함수
  // const [toDos, setToDos] = useState<Todo[]>([]);
  const idRef = useRef(1);

  const handleClickAdd = (textProp: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: textProp,
      },
    });
  };

  const handleClickDelete = (idProp: number) => {
    dispatch({
      type: "DELETE",
      id: idProp,
    });
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Editor onClickAdd={handleClickAdd} />
      <div>
        {toDos.map((todo) => (
          <ToDoItem key={todo.id} {...todo} onClickDelete={handleClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
