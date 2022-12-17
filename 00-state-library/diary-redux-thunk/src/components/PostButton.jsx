
import { useDispatch, useSelector } from 'react-redux';

import { fetchPost } from '../thunk';
import { clearInputField } from '../slice';

import { ButtonSecondary } from '../styles/Styles';

// string props를 받습니다.
export default function PostButton({ props }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);
  const { title, content } = inputField;

  const handleClickPost = () => {
    if (title && content) {
      dispatch(fetchPost({ title, content }));
      dispatch(clearInputField());
      window.history.back();
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
          : props === 'login' ?
            <button
              type="button"
              onClick={() => handleClickPost()}
            >
              로그인
            </button>
            :
            <button
              type="button"
              onClick={() => handleClickPost()}
            >
              회원가입
            </button>
        }
      </ButtonSecondary>
    </>
  );
}