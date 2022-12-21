import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchGetPost, fetchDeletePost
} from '../thunk';

import ExceptionPage from './ExceptionPage';
import TopNavBar from '.././components/TopNavBar';
// import CommentForm from '.././components/CommentForm';
// import CommentList from '.././components/CommentList';

import {
  DetailContainer,
  DetailPost,
  ButtonPrimary,
  ButtonSecondary
} from '.././styles/Styles';

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { status, currPost } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchGetPost(id));
  }, [dispatch]);


  const handleClickDelete = () => {
    dispatch(fetchDeletePost(currPost.id));
    location.assign('/');
  };

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
              <ButtonSecondary>
                <Link to={`/edit/${currPost.id}`}>
                  <button type="button">
                    수정하기
                  </button>
                </Link>
              </ButtonSecondary>
              <ButtonPrimary>
                <button
                  type="button"
                  onClick={() => handleClickDelete()}
                >
                  삭제하기
                </button>
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
