
import { useDispatch, useSelector } from 'react-redux';

import { fetchPost } from '../thunk';
import { clearInputField } from '../slice';

import { ButtonSecondary } from '../styles/Styles';

// 게시글 작성 버튼
export default function PostButton() {
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
        <button
          type="button"
          onClick={() => handleClickPost()}
        >
          기록하기
        </button>
      </ButtonSecondary>
    </>
  );
}