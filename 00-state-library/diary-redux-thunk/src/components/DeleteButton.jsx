import { useDispatch } from 'react-redux';
import { fetchDeletePost } from '../thunk';

import { ButtonSecondary } from '../styles/Styles';

// 게시글 삭제 버튼
// currPost객체를 받는다
export default function DeleteButton({ currPost }) {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(fetchDeletePost(currPost.id));
    window.history.href('/');
  };

  return (
    <>
      <ButtonSecondary>
        <button
          type="button"
          onClick={() => handleClickDelete()}
        >
          삭제하기
        </button>
      </ButtonSecondary>
    </>
  );
}
