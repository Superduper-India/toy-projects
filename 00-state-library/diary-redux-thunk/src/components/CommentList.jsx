import CommentEditButton from './CommentEditButton';

// comments 배열을 받는다.
export default function CommmentList({ currPost, comments }) {
  // 수정하기 누르면, comments를 화면에 뿌려주는거 대신 댓글을 폼으로 바꿔줘야함~~
  return (
    <>
      <ul className='tasks-box'>
        {comments ? comments.map(comment => (
          <li key={comment.commentId} >
            <h2>{comment.commentContent}</h2>
            <CommentEditButton
              currPost={currPost}
              selectedId={comment.commentId} />
          </li>
        )) : null}
      </ul>
    </>
  );
}
