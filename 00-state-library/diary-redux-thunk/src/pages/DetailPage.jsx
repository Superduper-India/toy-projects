
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ExceptionPage from './ExceptionPage';
import TopNavBar from '.././components/TopNavBar';
// import CommentForm from '.././components/CommentForm';
// import CommentList from '.././components/CommentList';
import DeleteButton from '.././components/DeleteButton';

export default function DetailPage() {
  const { id } = useParams();

  // id값을 가지고 현재 포스트를 찾는다 : back-end api받으면 수정
  const { status, postList } = useSelector((state) => state.postReducer);
  const currPost = postList && id ?
    postList.find((post) => post.id === +id) : null;

  return (
    <>
      <TopNavBar />
      <ExceptionPage />
      {status === 'success' ?
        <>
          <h2>관심 받고 싶은 오늘의 기록입니다</h2>
          <h2>{currPost.title}</h2>
          <p>{currPost.name}</p>
          <p>{currPost.content}</p>
          <DeleteButton id={currPost.id} />
          <Link to={`/edit/${currPost.id}`}>
            <button type="button">
              수정하기
            </button>
          </Link>
          {/* <CommentForm currPost={currPost} />
      <CommentList
        currPost={currPost}
        comments={currPost.comments}
      /> */}
        </>
        : null}
    </>
  );
}
