import { CommentFormStyle } from '../styles/Styles';

// 현재 포스트의 객체를 받습니다.
export default function CommentForm({
  props, inputField, onChangeInputField,
}) {
  return (
    <>
      {props ?
        <CommentFormStyle>
          <label htmlFor="content">댓글</label>
          <input
            disabled
            type="text"
            id="content"
            value={inputField ? inputField.content : ''}
            placeholder={'댓글을 입력하려면 로그인해주세요.'}
            onChange={(e) => onChangeInputField(e)}
          />
        </CommentFormStyle>
        :
        <CommentFormStyle>
          <label htmlFor="content">댓글</label>
          <input
            type="text"
            id="content"
            value={inputField ? inputField.content : ''}
            placeholder={'댓글을 입력해주세요'}
            onChange={(e) => onChangeInputField(e)}
          />
        </CommentFormStyle>
      }
    </>
  );
}