import './App.css';
import React, { useState, useRef } from 'react';

import cat1 from './imgs/1.jpeg';
import cat2 from './imgs/2.jpeg';
import cat3 from './imgs/3.jpeg';

// useRef dom객체에 접근을 하면 객체에서 직접 css를 조작할 수 있음
// 캐러셀은 ui적인 요소라 컴포넌트단에서 끝내야하는거임

// useRef를 사용하는 2가지 경우
// 1. dom가져와서 제어하고 싶을때
// 2. 원시값 제어할때

const scrollToIndex = (index, listRef) => {
  const listNode = listRef.current; // null
  const viewPointWidth = listNode.getBoundingClientRect().width;
  console.log(index, index * viewPointWidth)

  // 아래 코드는 특정 DOM구조를 가정한다.
  const imgNode = listNode.querySelectorAll('li > img')[index];
  imgNode.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });

  // listNode.style.transform = `translateX(-${((index - 1) * viewPointWidth)}px)`;
}

export default function App() {
  const listRef = useRef(null);

  const cats = [cat1, cat2, cat3]; // 배열의 인덱스를 활용한다.

  const [state, setState] = useState({ index: 0 });
  const { index } = state;

  // 오른쪽이면 currIndex가 last가 아닐 경우에 currIndex+1해주고,
  const handleClickRightBtn = () => {
    const currIndex = index;

    if (index !== cats.length - 1) {
      setState({
        index: currIndex + 1,
      })
      scrollToIndex(currIndex + 1, listRef);
    }
  }

  // 왼쪽이면 currIndex가 0이 아닐 경우에 currIndex-1해준다.
  const handleClickLeftBtn = () => {
    const currIndex = index;

    if (index !== 0) {
      setState({
        index: currIndex - 1,
      })
      scrollToIndex(currIndex - 1, listRef);
    }
  }

  return (
    <>
      <div className='container'>
        <h2>귀여운데엔 탈출구가 없어.. ✨</h2>
        <button
          type='button'
          className='left-btn'
          onClick={() => handleClickLeftBtn()}
        >
          {'<'}
        </button>
        <button
          type='button'
          className='right-btn'
          onClick={() => handleClickRightBtn()}
        >
          {'>'}
        </button>
        <ul className='carousel-wrapper' ref={listRef}>
          {cats.map(cat => ( // Q. {} ()의 차이
            <li>
              <img src={cat} alt={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}