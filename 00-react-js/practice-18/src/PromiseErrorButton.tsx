import { useState } from "react";

function PromiseErrorButton() {
  const [error, setError] = useState<string | null>(null);

  const handleClickButton = () => {
    // 일반적인 Promise 오류 발생
    new Promise((resolve, reject) => {
      reject(new Error("일반적인 Promise 오류가 발생했습니다!"));
    }).catch((error) => {
      // Error Boundary에서 에러를 처리해주지 못하기 때문에 동기 오류를 발생시키기 위해 상태로 관리해야 함
      throw new Error("에러가 발생했습니다.");
      // setError(error.message);
    });
  };

  // if (error) {
  //   throw new Error("에러가 발생했습니다!");
  // }

  return (
    <button onClick={handleClickButton}>
      🚫클릭하면 Promise에러가 발생하는 버튼🚫
    </button>
  );
}

export default PromiseErrorButton;
