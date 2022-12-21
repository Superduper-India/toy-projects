
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lottie from 'lottie-react';

import {
  fetchAddPost,
  fetchGetSignUp,
  fetchGetSignIn,
  fetchEditPost
} from '../thunk';
import { changeInputField, clearAll, setMessage } from '../slice';

import TopNavBar from '.././components/TopNavBar';
import ExceptionPage from './ExceptionPage';
import Form from '.././components/Form';
import PostButton from '.././components/PostButton';
import EditButton from '.././components/EditButton';

import { FormContainer, } from '.././styles/Styles';

import salesman from '.././assets/salesman.json';

import { uploadFile } from '../utils/utils';

export default function PostPage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const {
    status, inputField, currPost
  } = useSelector((state) => state.postReducer);
  const {
    title, content, username, password, checkPassword
  } = inputField;

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  const handleChangeImage = async (event) => {
    const { target: { files } } = event;
    const imgUrl = await uploadFile(files[0]);
    setImage(imgUrl);
  };

  const handleClickPost = () => {
    if (title && content && image) {
      dispatch(fetchAddPost({ title, content, image }));
      dispatch(clearAll());
      window.history.back();
    } else alert('내용을 입력해주세요!');
  };

  // ToDo 아이디, 비밀번호 생성조건 적용하기
  const handleClickSignUp = () => {
    if (username && password && checkPassword) {
      if (password === checkPassword) {
        dispatch(fetchGetSignUp({
          username, password, admin: true,
        }));
        dispatch(clearAll());
      } else {
        dispatch(setMessage('입력하신 비밀번호와 다릅니다.'));
      }
    } else alert('내용을 입력해주세요!');
  };

  const handleClickSignIn = () => {
    if (username && password) {
      dispatch(fetchGetSignIn({ username, password }));
      dispatch(clearAll());
    } else alert('내용을 입력해주세요!');
  };

  const handleClickEditPost = () => {
    if ((title || content) && image) {
      dispatch(fetchEditPost({ id: currPost.id, title, content, image }));
      dispatch(clearAll());
      window.history.back();
    } else alert('내용을 입력해주세요!');
  };

  return (
    <>
      <TopNavBar />
      <ExceptionPage status={status} />
      {status === 'success' ?
        <>
          <FormContainer>
            <Lottie animationData={salesman} />
            <div>
              <Form
                inputField={inputField}
                currPost={currPost}
                onChangeInputField={handleChangeInputField}
                onChangeImage={handleChangeImage}
              />
              {currPost.id ?
                <EditButton
                  onClickEditPost={handleClickEditPost}
                />
                :
                <PostButton
                  props={null}
                  onClickPost={handleClickPost}
                  onClickSignUp={handleClickSignUp}
                  onClickSignIn={handleClickSignIn}
                />}
            </div>
          </FormContainer>
        </>
        : null}
    </>
  );
}
