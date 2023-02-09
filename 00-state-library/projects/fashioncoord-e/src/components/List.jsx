import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';

import { timeCalculator } from '.././utils/utils';

import {
  CarouselWrapper,
  CarouselButtons,
  CarouselLeftButton,
  CarouselRightButton,
  Time,
} from '../styles/Styles';

import tmp from '.././assets/tmp.png';

// posts 배열을 받는다.
export default function List({ posts }) {
  const listRef = useRef();

  const [currIndex, setCurrIndex] = useState(0);
  const [transX, setTransX] = useState(0);

  // 처음 x좌표를 설정하는 로직
  useLayoutEffect(() => {
    const getCoordinate = () => {
      // 직접적으로 dome조작하는 함수
      const listLeft = listRef.current.getBoundingClientRect().left;
      setTransX(listLeft);
    };
    getCoordinate();
  }, []);

  // 데이터가 많이있으면 버튼클릭할때 dispatch가 걸리게 해서 다음페이지까지만 받아오기...
  const handleClickNavBtn = (direction) => {
    if (direction === 'right') {
      const listNode_currentX = listRef.current.childNodes[currIndex + 1].getBoundingClientRect().left;
      listRef.current.style.transform =
        `translateX(-${listNode_currentX - transX}px)`;
      setCurrIndex(currIndex + 2);
    } else {
      const listNode_currentX = listRef.current.childNodes[currIndex - 1].getBoundingClientRect().left;
      listRef.current.style.transform =
        `translateX(-${listNode_currentX - transX}px)`;
      setCurrIndex(currIndex - 2);
    }
  };

  return (
    <>
      <CarouselButtons>
        <CarouselLeftButton
          type="button"
          onClick={() => handleClickNavBtn('left')}
        >
          {'<'}
        </CarouselLeftButton>
        <CarouselRightButton
          type="button"
          onClick={() => handleClickNavBtn('right')}
        >
          {'>'}
        </CarouselRightButton>
      </CarouselButtons>
      <CarouselWrapper>
        <ul ref={listRef}>
          {posts.map(post => (
            <li key={post.id}>
              <img src={tmp} />
              <h5>{post.title}</h5>
              <p>{post.username}</p>
              <Time>{timeCalculator(post.createdAt)}</Time>
              <div>
                <div>
                  <div>
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                    <p>{post.likePostNum}</p>
                  </div>
                  <div>
                    <span className="material-symbols-rounded">
                      mode_comment
                    </span>
                    <p>{post.comments.length}</p>
                  </div>
                </div>
                <Link to={`/detail/${post.id}`}>
                  <div>
                    <p>더보기</p>
                    <span className="material-symbols-rounded">
                      keyboard_arrow_right
                    </span>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </CarouselWrapper >
    </>
  );
}
