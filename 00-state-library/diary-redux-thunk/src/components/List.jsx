import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';

import {
  CarouselWrapper,
  CarouselButtons,
  CarouselLeftButton,
  CarouselRightButton,
} from '../styles/Styles';

// posts 배열을 받는다.
export default function List({ posts }) {
  const navigate = useNavigate();

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
          className="left-btn"
        >
          {'<'}
        </CarouselLeftButton>
        <CarouselRightButton
          type="button"
          onClick={() => handleClickNavBtn('right')}
          className="right-btn"
        >
          {'>'}
        </CarouselRightButton>
      </CarouselButtons>
      <CarouselWrapper>
        <ul className="carousel" ref={listRef}>
          {posts.map(post => (
            <li key={post.id}>
              <div>
                <p>{post.title}</p>
                <button
                  type="button"
                  className="detail-btn"
                  onClick={() => { navigate(`/detailPage/${post.id}`, { state: post }); }}
                >
                  {' 더보기 >'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </CarouselWrapper>
    </>
  );
}
