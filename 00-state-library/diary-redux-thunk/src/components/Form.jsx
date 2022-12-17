import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../slice';
import { FormBox, FormTop, FormBottom } from '../styles/Styles';

// 현재 포스트의 객체를 받습니다.
export default function Form({ currPost }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  return (
    <>
      {currPost ? <h2>{currPost.username}님의 글을 수정중...</h2> : <h2>오늘의 코디를 기록해주세요</h2>}
      <FormBox>
        <FormTop>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={inputField.title ? inputField.title : ''}
            placeholder={currPost ? currPost.title : '제목을 입력해주세요'}
            onChange={(e) => handleChangeInputField(e)}
          />
        </FormTop>
        <FormBottom>
          <label htmlFor="content">내용</label>
          <textarea
            rows="20" cols="100"
            type="text"
            id="content"
            value={inputField.content ? inputField.content : ''}
            placeholder={currPost ? currPost.content : '내용을 입력해주세요'}
            onChange={(e) => handleChangeInputField(e)}
          />
        </FormBottom>
      </FormBox>
    </>
  );
}