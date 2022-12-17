import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TopNavBar from '.././components/TopNavBar';
import Form from '.././components/Form';
import EditButton from '.././components/EditButton';

export default function EditPage() {
  const { id } = useParams();

  // id값을 가지고 현재 포스트를 찾는다 : back-end api받으면 수정
  const { status, postList } = useSelector((state) => state.postReducer);
  const currPost = postList && id ?
    postList.find((post) => post.id === +id) : null;

  return (
    <>
      <TopNavBar />
      {status === 'loading' ? <span>Loading...</span> : null}
      {status === 'error' ? <span>Something is wrong...</span> : null}
      <Form currPost={currPost} />
      <EditButton currPost={currPost} />
    </>
  );
}
