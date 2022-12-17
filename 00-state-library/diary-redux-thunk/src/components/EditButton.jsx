import { useDispatch, useSelector } from 'react-redux';

import { fetchEditPost } from '../thunk';

import { ButtonSecondary } from '../styles/Styles';
import { clearInputField } from '../slice';

// 게시글 수정 버튼
// currPost객체를 받는다
export default function EditButton({ currPost }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);
  const { title, content } = inputField;

  const handleClickEditPost = () => {
    if (title || content) {
      dispatch(fetchEditPost({ id: currPost.id, title, content }));
      dispatch(clearInputField());
      window.history.back();
    } else alert('내용을 입력해주세요!');
  };

  return (
    <>
      <ButtonSecondary>
        <button
          type="button"
          onClick={() => handleClickEditPost()}
        >
          수정하기
        </button>
      </ButtonSecondary>
    </>
  );
}