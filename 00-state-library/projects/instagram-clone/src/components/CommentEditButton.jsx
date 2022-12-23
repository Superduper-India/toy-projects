

import { useMutation } from '@tanstack/react-query';

import { editPost } from '.././api';

// selectedId숫자와 currPost객체를 받는다
export default function CommentEditButton({ currPost, selectedId }) {
  const { comments } = currPost;

  const editedPost = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      alert('댓글 삭제완료!');
    },
  });

  const handleClickEdit = (selectedId) => {
    const filteredComments = comments.filter(comment => comment.commentId !== selectedId);
    editedPost.mutate({ ...currPost, comments: filteredComments });
  };

  return (
    <>
      {editedPost.isLoading ? 'Loading...' : null}
      {editedPost.isError ? 'Something is wrong...' : null}
      <button
        type="button"
        onClick={() => handleClickEdit(selectedId)}
      >
        삭제하기
      </button>
    </>
  );
}