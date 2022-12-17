
import { useSelector } from 'react-redux';

import Lottie from 'lottie-react';

import TopNavBar from '.././components/TopNavBar';
import AuthForm from '.././components/AuthForm';
import ExceptionPage from './ExceptionPage';

import { FormContainer } from '.././styles/Styles';

import salesman from '.././assets/salesman.json';

export default function LoginPage() {
  const { status } = useSelector((state) => state.postReducer);

  return (
    <>
      <TopNavBar />
      <ExceptionPage />
      {status === 'success' ?
        <>
          <FormContainer>
            <Lottie animationData={salesman} />
            <div>
              <AuthForm props={'login'} />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
