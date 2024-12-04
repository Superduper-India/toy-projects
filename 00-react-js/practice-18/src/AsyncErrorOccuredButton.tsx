// 렌더링 중 발생하는 비동기 오류를 발생시키는 버튼 컴포넌트
const AsyncErrorOccuredButton = () => {
  const handleClickError = <T extends string | null>(status: T): void => {
    if (status !== null) {
      throw new Error("에러가 발생했습니다!");
    }
  };

  return (
    <button type="button" onClick={() => handleClickError("에러")}>
      🚫클릭하면 비동기 에러가 발생하는 버튼🚫
    </button>
  );
};

export default AsyncErrorOccuredButton;
