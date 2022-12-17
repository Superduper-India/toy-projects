
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { clearInputField } from '../slice';
import { TopNavContainer, TopNavRightBox } from '.././styles/Styles';

export default function TopNavBar({ props }) {
  const dispatch = useDispatch();

  const handleClickBack = () => {
    dispatch(clearInputField());
    window.history.back();
  };

  return (
    <TopNavContainer>
      <div>
        <Link to="/">
          <p>FashionCoord-e</p>
        </Link>
      </div>
      {props ? (
        <TopNavRightBox>
          <Link to="/post"><p>작성하기</p></Link>
          <Link to="#"><p>로그인</p></Link>
          <Link to="#"><p>회원가입</p></Link>
        </TopNavRightBox>
      )
        : (
          <TopNavRightBox>
            <Link onClick={() => handleClickBack()}>
              <p>이전으로</p>
            </Link>
            <Link to="#"><p>로그인</p></Link>
            <Link to="#"><p>회원가입</p></Link>
          </TopNavRightBox>
        )
      }
    </TopNavContainer >
  );
}
