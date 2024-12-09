import { useState } from "react";

interface EditorProps {
  onClickAdd: (textProp: string) => void;
}

function Editor({ onClickAdd }: EditorProps) {
  const [text, setText] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickButton = () => {
    onClickAdd(text);
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
