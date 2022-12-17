import React from 'react';
import { useSelector } from 'react-redux';

import TopNavBar from '.././components/TopNavBar';
import Form from '.././components/Form';
import AddButton from '.././components/AddButton';
import ExceptionPage from './ExceptionPage';

import { PostContainer } from '.././styles/Styles';

export default function PostPage() {
  const { status } = useSelector((state) => state.postReducer);

  return (
    <>
      <TopNavBar />
      <ExceptionPage />
      {status === 'success' ?
        <PostContainer>
          <Form currPost={null} />
          <AddButton />
        </PostContainer>
        : null
      }
    </>
  );
}
