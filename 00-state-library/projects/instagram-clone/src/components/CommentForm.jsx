import { CommentFormStyle } from '../styles/CommentFormStyle';

export default function CommentForm({
  postId, inputField, onChangeInputField, onClickPostComment
}) {
  return (
    <CommentFormStyle>
      <div>
        <label htmlFor="content">웃는아이콘</label>
        <input
          type="text"
          id="content"
          value={inputField ? inputField.content : ''}
          placeholder="댓글 달기..."
          onChange={(e) => onChangeInputField(e)}
        />
      </div>
      <button
        type="button"
        onClick={() => onClickPostComment(postId)}
      >
        게시
      </button>
    </CommentFormStyle>
  );
}
