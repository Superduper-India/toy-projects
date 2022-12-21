import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchGetSignOut } from '../thunk';
import { clearInputField } from '../slice';
import { TopNavContainer, TopNavRightBox } from '.././styles/Styles';

import { loadItem } from '../storage';

export default function TopNavBar({ props }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.postReducer);
  const loginStatus = loadItem(status);

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
      <TopNavRightBox>
        {props ?
          <Link to="/post">
            <p>작성하기</p>
          </Link>
          :
          <Link onClick={() => handleClickBack()}>
            <p>이전으로</p>
          </Link>
        }
        {loginStatus === 'login' ?
          <Link
            onClick={() => dispatch(fetchGetSignOut())}
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
