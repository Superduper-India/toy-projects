import { useSelector, useDispatch } from 'react-redux';

import Lottie from 'lottie-react';

import { fetchGetSignIn } from '../thunk';
import { clearAll } from '../slice';

import TopNavBar from '.././components/TopNavBar';
import AuthForm from '.././components/AuthForm';
import ExceptionPage from './ExceptionPage';
import PostButton from '.././components/PostButton';

import { FormContainer } from '.././styles/Styles';

import login from '.././assets/login.json';

export default function LoginPage() {
  const dispatch = useDispatch();

  const { status, inputField } = useSelector((state) => state.postReducer);
  const { username, password } = inputField;

  const handleClickSignIn = () => {
    if (username && password) {
      dispatch(fetchGetSignIn({ username, password }));
      dispatch(clearAll());
    } else alert('내용을 입력해주세요!');
  };

  // 여기서 status는 새로고침되면서 success로 초기화됨
  if (status === 'login') location.assign('/');

  return (
    <>
      <TopNavBar />
      <ExceptionPage status={status} />
      {status === 'success' || status === 'redirect' ?
        <>
          <FormContainer>
            <Lottie animationData={login} />
            <div>
              <AuthForm props={'signIn'} />
              <PostButton
                props={'signIn'}
                onClickSignIn={handleClickSignIn}
              />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
