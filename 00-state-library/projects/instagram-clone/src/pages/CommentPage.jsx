import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/postSlice';

import { useParams } from 'react-router-dom';

import {
  fetchGetPosts, fetchAddComment
} from '../redux/middleware/thunk';

import TopNavBar from '.././components/TopNavBar';
import ExceptionPage from './ExceptionPage';
import CommentList from '.././components/CommentList';

export default function HomePage() {
  const dispatch = useDispatch();
  const {
    status, postList, inputField, inputField: { content }
  } = useSelector((state) => state.postReducer);

  const { id } = useParams();
  const currPost = postList.find(post => post.id === +id);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  const handleClickPostComment = (postId) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      <ExceptionPage status={status} />
      {status === 'success' ?
        <>
          <TopNavBar />
          {postList.length !== 0 ?
            <>
              <CommentList
                currPost={currPost}
                inputField={inputField}
                onChangeInputField={handleChangeInputField}
                onClickPostComment={handleClickPostComment}
              />
            </>
            :
            {/*toDo exception*/ }
          }
        </>
        : null
      }
    </>
  );
}
