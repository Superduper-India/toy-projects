import React from "react";

// 비동기 오류를 발생시키는 컴포넌트
const LazyComponent = React.lazy(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // 성공적으로 로드하거나 오류 발생
        Math.random() > 1
          ? resolve(import("./Comments")) // 성공
          : reject(new Error("Failed to load LazyComponent")); // 실패
      }, 2000);
    })
);

export default LazyComponent;
