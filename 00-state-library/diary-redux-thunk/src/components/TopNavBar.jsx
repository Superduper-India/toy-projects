import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { clearInputField } from '../slice';
import { TopNavContainer, TopNavRightBox } from '.././styles/Styles';

import { loadItem, removeItem } from '../storage';

export default function TopNavBar({ props }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.postReducer);
  const login = loadItem(status);

  const handleClickBack = () => {
    dispatch(clearInputField());
    window.history.back();
  };

  const handleClickLogout = () => {
    removeItem(status);
    window.location.reload();
  };

  return (
    <TopNavContainer>
      <div>
        <Link to="/">
          <p>FashionCoord-e</p>
        </Link>
      </div>
      <TopNavRightBox>
        {props && login ?
          <Link to="/post">
            <p>작성하기</p>
          </Link>
          : !props ?
            <Link onClick={() => handleClickBack()}>
              <p>이전으로</p>
            </Link>
            : null
        }
        {login ?
          <Link
            onClick={() => handleClickLogout()}
          >
            <p>로그아웃</p>
          </Link>
          :
          <>
            <Link
              to="/sign_in"
              onClick={() => dispatch(clearInputField())}
            >
              <p>로그인</p>
            </Link>
            <Link
              to="/sign_up"
              onClick={() => dispatch(clearInputField())}
            >
              <p>회원가입</p>
            </Link>
          </>
        }
      </TopNavRightBox>
    </TopNavContainer >
  );
}
