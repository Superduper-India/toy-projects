import { useState, useRef } from "react";
import Editor from "./components/Editor";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  // useState는 초기값으로 전달하는 인수에 따라서 상태값의 타입을 자동으로 추론해준다.
  // => 제네릭 함수
  const [toDos, setToDos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const handleClickAdd = (textProp: string) => {
    setToDos([
      ...toDos,
      {
        id: idRef.current++,
        content: textProp,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Editor onClickAdd={handleClickAdd} />
    </div>
  );
}

export default App;
