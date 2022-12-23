import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { clearAll } from '../slice';
import { TopNavContainer, TopNavRightBox } from '.././styles/Styles';

import { loadItem, removeItem } from '../storage';

export default function TopNavBar({ props }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.postReducer);
  const loginToken = loadItem(status);

  const handleClickGoHome = () => {
    dispatch(clearAll());
    location.assign('/');
  };

  const handleClickBack = () => {
    dispatch(clearAll());
    history.back();
  };

  const handleClickLogout = () => {
    removeItem(status);
    location.reload();
  };

  return (
    <TopNavContainer>
      <div>
        <Link onClick={() => handleClickGoHome()}>
          <p>FashionCoord-e</p>
        </Link>
      </div>
      <TopNavRightBox>
        {props && loginToken ?
          <Link to="/post">
            <p>작성하기</p>
          </Link>
          : !props ?
            <Link onClick={() => handleClickBack()}>
              <p>이전으로</p>
            </Link>
            : null
        }
        {loginToken ?
          <Link
            onClick={() => handleClickLogout()}
          >
            <p>로그아웃</p>
          </Link>
          :
          <>
            <Link
              to="/sign_in"
              onClick={() => dispatch(clearAll())}
            >
              <p>로그인</p>
            </Link>
            <Link
              to="/sign_up"
              onClick={() => dispatch(clearAll())}
            >
              <p>회원가입</p>
            </Link>
          </>
        }
      </TopNavRightBox>
    </TopNavContainer >
  );
}
