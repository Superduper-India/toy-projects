import React from 'react';

import { Link } from 'react-router-dom';

import { TopNavContainer, TopNavRightBox } from '.././styles/Styles';

export default function TopNavBar() {
  return (
    <TopNavContainer>
      <div>
        <Link to="/">
          <p>FashionCoord-e</p>
        </Link>
      </div>
      <TopNavRightBox>
        <Link to="/post"><p>작성하기</p></Link>
        <Link to="#"><p>로그인</p></Link>
        <Link to="#"><p>회원가입</p></Link>
      </TopNavRightBox>
    </TopNavContainer>
  );
}
