// query
// import { useQuery } from '@tanstack/react-query';
// import { getPost } from './api';

import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPost } from './thunk';

import TopNavBar from './components/TopNavBar';
import List from './components/List';

export default function HomePage() {
  // GET - query
  // const { isLoading, isError, data } = useQuery({ queryKey: ['posts'], queryFn: getPost })

  // GET - thunk
  const dispatch = useDispatch();
  const { status, postList } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchGetPost());
  }, [dispatch]);

  return (
    <>
      <TopNavBar />
      {status === 'loading' ? <span>Loading...</span> : null}
      {status === 'error' ? <span>Something is wrong...</span> : null}
      {postList.length !== 0 ?
        <>
          <h2 className='tasks-title'>둘러보기</h2>
          <p className='tasks-title'>다른 사람들의 오늘을 구경해보세요 !</p>
          <List posts={postList} />
        </>
        :
        <>
          {/*예외처리*/}
          <h2 className='tasks-title'>아직은 아무것도 없네요... 😢</h2>
          <p className='tasks-title'>일기장을 작성해주세요!</p>
        </>
      }
    </>
  );
}
