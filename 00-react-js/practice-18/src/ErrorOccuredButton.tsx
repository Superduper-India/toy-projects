import { useState } from "react";

// 렌더링 중 발생하는 비동기 오류를 동기 오류로 처리하는 버튼
const AsyncErrorOccuredButton = () => {
  const [err, setErr] = useState<string | null>(null);

  const handleClickError = <T extends string | null>(status: T): void => {
    if (status !== null) {
      console.log("버튼 클릭", status);
      setErr(status);
    }
  };

  if (err) {
    console.log("에러 발생");
    throw new Error("에러가 발생했습니다!");
  }

  return (
    <button type="button" onClick={() => handleClickError("에러")}>
      🚫클릭하면 동기 에러가 발생하는 버튼🚫
    </button>
  );
};

export default AsyncErrorOccuredButton;
