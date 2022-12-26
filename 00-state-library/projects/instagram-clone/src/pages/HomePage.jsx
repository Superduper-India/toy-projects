import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/postSlice';

import {
  fetchGetPosts, fetchAddComment
} from '../redux/middleware/thunk';

import TopNavBar from '.././components/TopNavBar';
import ExceptionPage from './ExceptionPage';
import PostList from '.././components/PostList';

export default function HomePage() {
  const dispatch = useDispatch();
  const {
    status, postList, inputField, inputField: { content }
  } = useSelector((state) => state.postReducer);

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
              <PostList
                posts={postList}
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
