import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../slice';

// 현재 포스트의 객체를 받습니다.
export default function Form({ currPost }) {
  const dispatch = useDispatch();
  const { status, inputField } = useSelector((state) => state.postReducer);

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  return (
    <>
      {status === 'loading' ? <span>Loading...</span> : null}
      {status === 'error' ? <span>Something is wrong...</span> : null}
      {currPost ? <h2>{currPost.username}님의 글을 수정중...</h2> : <h2>오늘의 코디를 기록해주세요</h2>}
      <div className="form-box">
        <form className="form-top">
          <div className="form_top">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={inputField.title ? inputField.title : ''}
              placeholder={currPost ? currPost.title : '제목을 입력해주세요'}
              onChange={(e) => handleChangeInputField(e)}
            />
          </div>
        </form>
        <form className="form-btm">
          <div className="form_top">
            <label htmlFor="content">내용</label>
            <textarea
              rows="20" cols="100"
              type="text"
              id="content"
              value={inputField.content ? inputField.content : ''}
              placeholder={currPost ? currPost.content : '내용을 입력해주세요'}
              onChange={(e) => handleChangeInputField(e)}
            />
          </div>
        </form>
      </div>
    </>
  );
}