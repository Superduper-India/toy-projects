
import { useSelector } from 'react-redux';

import Lottie from 'lottie-react';

import TopNavBar from '.././components/TopNavBar';
import Form from '.././components/Form';
import ExceptionPage from './ExceptionPage';

import { FormContainer } from '.././styles/Styles';

import salesman from '.././assets/salesman.json';

export default function PostPage() {
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
              <Form currPost={null} />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}