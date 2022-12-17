import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';

import {
  ErrorContainer,
  LoadingContainer,
} from '.././styles/Styles';

import error from '.././assets/error.json';
import loading from '.././assets/loading.json';

export default function ExceptionPage() {
  const { status } = useSelector((state) => state.postReducer);

  return (
    <>
      {status === 'loading' ?
        <LoadingContainer>
          <Lottie animationData={loading} />
        </LoadingContainer>
        : null}
      {status === 'error' ?
        <ErrorContainer>
          <Lottie animationData={error} />
          <div>
            <h2>뭔가 이상합니다..!</h2>
            <p>문제가 발생한 거 같네요</p>
          </div>
        </ErrorContainer>
        : null}
    </>
  );
}
