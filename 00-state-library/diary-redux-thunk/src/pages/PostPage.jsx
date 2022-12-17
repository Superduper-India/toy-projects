import React from 'react';

import TopNavBar from '.././components/TopNavBar';
import Form from '.././components/Form';
import AddButton from '.././components/AddButton';

export default function PostPage() {
  return (
    <>
      <TopNavBar />
      <Form currPost={null} />
      <AddButton />
    </>
  );
}
