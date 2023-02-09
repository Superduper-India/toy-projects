
import { useSelector, useDispatch } from 'react-redux';

import Lottie from 'lottie-react';


import { fetchGetSignUp } from '../thunk';
import { clearAll, setMessage } from '../slice';

import TopNavBar from '.././components/TopNavBar';
import AuthForm from '.././components/AuthForm';
import ExceptionPage from './ExceptionPage';
import PostButton from '.././components/PostButton';

import { FormContainer } from '.././styles/Styles';

import login from '.././assets/login.json';

export default function SignupPage() {
  const dispatch = useDispatch();

  const { status, inputField } = useSelector((state) => state.postReducer);
  const { username, password, checkPassword } = inputField;

  // ToDo 아이디, 비밀번호 생성조건 적용하기
  const handleClickSignUp = () => {
    if (username && password && checkPassword) {
      if (password === checkPassword) {
        dispatch(fetchGetSignUp({
          username, password, admin: true,
        }));
        dispatch(clearAll());
      } else {
        dispatch(setMessage('입력하신 비밀번호와 다릅니다.'));
      }
    } else alert('내용을 입력해주세요!');
  };

  return (
    <>
      <TopNavBar />
      <ExceptionPage status={status} />
      {status === 'success' || status === 'redirect' ?
        <>
          <FormContainer>
            <Lottie animationData={login} />
            <div>
              <AuthForm props={'signUp'} />
              <PostButton
                props={'signUp'}
                onClickSignUp={handleClickSignUp}
              />
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
