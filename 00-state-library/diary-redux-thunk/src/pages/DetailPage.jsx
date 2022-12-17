import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ExceptionPage from './ExceptionPage';
import TopNavBar from '.././components/TopNavBar';
// import CommentForm from '.././components/CommentForm';
// import CommentList from '.././components/CommentList';
import {
  DetailContainer,
  DetailPost,
  ButtonPrimary
} from '.././styles/Styles';
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
        <DetailContainer>
          <h2>{`${currPost.username}님의 패션입니다.`}</h2>
          <DetailPost>
            <h3>{currPost.title}</h3>
            <p>{currPost.content}</p>
            <div>
              <DeleteButton currPost={currPost} />
              <ButtonPrimary>
                <Link to={`/edit/${currPost.id}`}>
                  <button type="button">
                    수정하기
                  </button>
                </Link>
              </ButtonPrimary>
            </div>
          </DetailPost>
          {/* <CommentForm currPost={currPost} />
      <CommentList
        currPost={currPost}
        comments={currPost.comments}
      /> */}
        </DetailContainer>
        : null}
    </>
  );
}
