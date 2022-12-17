import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetPosts } from '../thunk';

import TopNavBar from '.././components/TopNavBar';
import List from '.././components/List';

import { BannerImg, ListContainer } from '.././styles/Styles';

import banner from '.././assets/banner.jpg';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      <TopNavBar props={'home'} />
      <BannerImg src={banner} alt={banner} />
      {status === 'loading' ? <span>Loading...</span> : null}
      {status === 'error' ? <span>Something is wrong...</span> : null}
      {postList.length !== 0 ?
        <ListContainer>
          <div>
            <h2>둘러보기</h2>
            <p>다른 사람들의 패션을 구경해보세요!</p>
          </div>
          <List posts={postList} />
        </ListContainer>
        :
        <>
          {/*예외처리*/}
          <h2>아직은 아무것도 없네요</h2>
          <p>오늘의 코디를 뽐내러 가볼까요? 😎</p>
        </>
      }
    </>
  );
}
