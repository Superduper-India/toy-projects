
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Lottie from 'lottie-react';

import TopNavBar from '.././components/TopNavBar';
import Form from '.././components/Form';

import ExceptionPage from './ExceptionPage';
import { FormContainer } from '.././styles/Styles';

import salesman from '.././assets/salesman.json';

export default function EditPage() {
  const { id } = useParams();

  // id값을 가지고 현재 포스트를 찾는다 : back-end api받으면 수정
  const { status, postList } = useSelector((state) => state.postReducer);
  const currPost = postList && id ?
    postList.find((post) => post.id === +id) : null;

  return (
    <>
      <TopNavBar />
      <ExceptionPage />
      {status === 'success' ?
        <>
          <FormContainer>
            <Lottie animationData={salesman} />
            <div>
              <Form currPost={currPost} />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
