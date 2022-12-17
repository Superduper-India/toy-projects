
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetPosts } from '../thunk';

import TopNavBar from '.././components/TopNavBar';
import List from '.././components/List';
import ExceptionPage from './ExceptionPage';

import {
  BannerImg,
  ListContainer,
} from '.././styles/Styles';

import banner from '.././assets/banner.jpg';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  return (
    <>
      <ExceptionPage />
      {status === 'success' ?
        <>
          <TopNavBar props={'home'} />
          <BannerImg>
            <img src={banner} />
            <div>
              <h2>둘러보기</h2>
              <p>다른 사람들의 패션을 구경해보세요!</p>
            </div>
          </BannerImg>
          {postList.length !== 0 ?
            <ListContainer>
              <List posts={postList} />
            </ListContainer>
            :
            <>
              {/*예외처리*/}
              <ListContainer>
                <div>
                  <h2>아직은 아무것도 없네요.. 😢</h2>
                  <p>오늘의 코디를 뽐내러 가볼까요?</p>
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
