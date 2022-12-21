// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchAddPost } from '../thunk';
// import { changeInputField, clearAll } from '../slice';
import { FormStyle } from '../styles/Styles';

export default function Form({
  inputField, currPost, onChangeInputField, onChangeImage
}) {
  // const [image, setImage] = useState();
  // const dispatch = useDispatch();
  // const { inputField, currPost } = useSelector((state) => state.postReducer);
  // const { title, content } = inputField;

  return (
    <>
      {currPost.id ? <h2>{currPost.username}님의 글을 수정중...</h2> : <h2>오늘의 코디를 기록해주세요 😎</h2>}
      <FormStyle>
        <form>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={inputField.title ? inputField.title : ''}
            placeholder={currPost.id ? currPost.title : '제목을 입력해주세요'}
            onChange={(e) => onChangeInputField(e)}
          />
        </form>
        <form>
          <label htmlFor="content">내용</label>
          <textarea
            rows="20" cols="100"
            type="text"
            id="content"
            value={inputField.content ? inputField.content : ''}
            placeholder={currPost.id ? currPost.content : '내용을 입력해주세요'}
            onChange={(e) => onChangeInputField(e)}
          />
        </form>
        <label htmlFor="image">사진</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => onChangeImage(e)}
        />
      </FormStyle>
    </>
  );
}