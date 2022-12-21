
import { useSelector } from 'react-redux';

import Lottie from 'lottie-react';

import TopNavBar from '.././components/TopNavBar';
import AuthForm from '.././components/AuthForm';
import ExceptionPage from './ExceptionPage';

import { FormContainer } from '.././styles/Styles';

import login from '.././assets/login.json';

export default function LoginPage() {
  const { status } = useSelector((state) => state.postReducer);

  // 여기서 status는 새로고침되면서 success로 초기화됨
  if (status === 'login') window.location.assign('/');

  return (
    <>
      <TopNavBar />
      <ExceptionPage />
      {status === 'success' || status === 'redirect' ?
        <>
          <FormContainer>
            <Lottie animationData={login} />
            <div>
              <AuthForm props={'signIn'} />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
