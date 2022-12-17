import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPost } from '../thunk';

import { ButtonSecondary } from '../styles/Styles';

export default function AddButton() {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);
  const { title, content } = inputField;

  const handleClickPost = () => {
    if (title && content) {
      dispatch(fetchPost({ title, content }));
    } else alert('값을 입력해주세요!');
  };

  return (
    <>
      <ButtonSecondary>
        <button
          type="button"
          onClick={() => handleClickPost()}
        >
          기록하기
        </button>
      </ButtonSecondary>
    </>
  );
}