import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react';

import { fetchGetPosts } from '../thunk';

import TopNavBar from '.././components/TopNavBar';
import List from '.././components/List';

import {
  BannerImg,
  ErrorContainer,
  LoadingContainer,
  ListContainer
} from '.././styles/Styles';

import banner from '.././assets/banner.jpg';
import error from '.././assets/error.json';
import loading from '.././assets/loading.json';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ?
        <LoadingContainer>
          <Lottie animationData={loading} />
        </LoadingContainer>
        : null}
      {status === 'error' ?
        <ErrorContainer>
          <Lottie animationData={error} />
          <div>
            <h2>뭔가 이상합니다..!</h2>
            <p>문제가 발생한 거 같네요</p>
          </div>
        </ErrorContainer>
        : null}
      {status === 'success' ?
        <>
          <TopNavBar props={'home'} />
          <BannerImg src={banner} alt={banner} />
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
              <ListContainer>
                <div>
                  <h2>아직은 아무것도 없네요</h2>
                  <p>오늘의 코디를 뽐내러 가볼까요? 😎</p>
                </div>
              </ListContainer>
            </>
          }
        </>
        : null
      }
    </>
  );
}
