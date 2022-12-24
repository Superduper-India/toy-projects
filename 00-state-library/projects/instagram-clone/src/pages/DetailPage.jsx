import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchGetPost, fetchDeletePost,
  fetchAddComment
} from '../redux/middleware/thunk';
import { changeInputField } from '../redux/modules/postSlice';

import ExceptionPage from './ExceptionPage';
import TopNavBar from '.././components/TopNavBar';
import CommentForm from '.././components/CommentForm';
import CommentList from '.././components/CommentList';

import {
  DetailContainer,
  DetailPostContent,
  DetailPost,
  ButtonPrimary,
  ButtonSecondary
} from '.././styles/Styles';
import PostButton from '../components/PostButton';

import { loadItem } from '../services/storage';

import tmp from '.././assets/tmp.png';

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { status, inputField, currPost } = useSelector((state) => state.postReducer);
  const { content } = inputField;
  const loginToken = loadItem(status);

  useEffect(() => {
    dispatch(fetchGetPost(id));
  }, [dispatch]);

  const handleClickDelete = () => {
    dispatch(fetchDeletePost(currPost.id));
  };

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  const handleClickPostComment = () => {
    if (content) {
      dispatch(fetchAddComment({ id: currPost.id, content }));
    } else alert('내용을 입력해주세요!');
  };

  return (
    <>
      <TopNavBar />
      <ExceptionPage status={status} />
      {status === 'success' ?
        <DetailContainer>
          <h2>{`${currPost.username}님의 패션입니다.`}</h2>
          <DetailPost>
            <DetailPostContent>
              <h3>{currPost.title}</h3>
              <p>{currPost.content}</p>
              <img src={tmp} />
            </DetailPostContent>
            {loginToken ?
              <>
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
                <div>
                  <CommentForm
                    inputField={inputField}
                    onChangeInputField={handleChangeInputField}
                  />
                  <PostButton
                    props="comment"
                    onClickPostComment={handleClickPostComment}
                  />
                </div>
                <CommentList />
              </>
              :
              <>
                <div>
                  <CommentForm
                    props={'inavailable'}
                  />
                </div>
                <CommentList />
              </>
            }
          </DetailPost>
        </DetailContainer>
        : null}
    </>
  );
}
