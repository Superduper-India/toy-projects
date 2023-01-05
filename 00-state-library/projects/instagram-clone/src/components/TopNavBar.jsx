import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { TopNavBarStyle } from '.././styles/TopNavBarStyle';

import { removeItem } from '../services/storage';

import logo from '../assets/logo.png';

export default function TopNavBar() {
  // const dispatch = useDispatch();
  const { status } = useSelector((state) => state.postReducer);

  // const handleClickBack = () => {
  //   dispatch(clearAll());
  //   history.back();
  // };

  const handleClickLogout = () => {
    removeItem(status);
    location.reload();
  };

  return (
    <TopNavBarStyle color="#BEBEBE">
      <div>
        {/*toAsk 아래와 같이 img태그에 onClick핸들러 넣어서 해도 되는지?*/}
        <div className="logo">
          <img src={logo} onClick={() => location.assign('/')} />
        </div>
        <div className="search">
          <input type="text" placeholder="🔍 검색">
          </input>
        </div>
        <div className="icons">
          <Link onClick={() => location.assign('/')}>홈</Link>
          <Link to="#">공유</Link>
          <Link to="#">글작성</Link>
          <Link onClick={() => handleClickLogout()}>로그아웃</Link>
        </div>
      </div>
    </TopNavBarStyle >
  );
}
