
import { useDispatch, useSelector } from 'react-redux';

import { fetchPost, fetchSignUp } from '../thunk';
import { clearInputField, setAlert } from '../slice';

import { ButtonSecondary } from '../styles/Styles';

// string props를 받습니다.
export default function PostButton({ props }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);
  const {
    title, content,
    username, password, checkPassword
  } = inputField;

  const handleClickPost = () => {
    if (title && content) {
      dispatch(fetchPost({ title, content }));
      dispatch(clearInputField());
      window.history.back();
    } else alert('내용을 입력해주세요!');
  };

  const handleClickSignUp = () => {
    if (username && password && checkPassword) {
      if (password === checkPassword) {
        dispatch(fetchSignUp({
          username, password, admin: true,
        }));
        dispatch(clearInputField());
        window.history.back();
      } dispatch(setAlert('입력하신 비밀번호와 다릅니다.'));
    } else alert('내용을 입력해주세요!');
  };

  return (
    <>
      <ButtonSecondary>
        {!props ?
          <button
            type="button"
            onClick={() => handleClickPost()}
          >
            기록하기
          </button>
          : props === 'signIn' ?
            <button
              type="button"
              onClick={() => handleClickPost()}
            >
              로그인
            </button>
            :
            <button
              type="button"
              onClick={() => handleClickSignUp()}
            >
              회원가입
            </button>
        }
      </ButtonSecondary>
    </>
  );
}