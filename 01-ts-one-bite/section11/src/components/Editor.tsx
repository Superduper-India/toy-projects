import { useState } from "react";
import { useToDoDispatch } from "../App";

function Editor() {
  const dispatch = useToDoDispatch();
  const [text, setText] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickButton = () => {
    dispatch.handleClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={handleChangeInput} />
      <button type="button" onClick={handleClickButton}>
        추가
      </button>
    </div>
  );
}

export default Editor;
