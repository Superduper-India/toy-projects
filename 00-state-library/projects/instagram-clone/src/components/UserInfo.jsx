import { UserInfoStyle } from '../styles/UserInfoStyle';

import tmp from '.././assets/tmp.png';

export default function UserInfo({ postUsername }) {
  return (
    <UserInfoStyle>
      <div>
        <img src={tmp} />
        <span>{postUsername}</span>
      </div>
      <button type="button">더보기</button>
    </UserInfoStyle>
  );
}
