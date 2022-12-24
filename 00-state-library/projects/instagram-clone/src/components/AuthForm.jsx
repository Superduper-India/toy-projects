import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/postSlice';
import { FormStyle } from '../styles/Styles';

// string props를 받습니다.
export default function AuthForm({ props }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);
  const { alert } = useSelector((state) => state.postReducer);

  // 여기에서 정규표현식 로직추가해서 훅으로 만들기
  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  return (
    <>
      {props === 'signIn' ?
        <>
          <h2>로그인</h2>
          <FormStyle>
            <form>
              <label htmlFor="username">사용자 이름</label>
              <input
                type="text"
                id="username"
                value={inputField.username ? inputField.username : ''}
                placeholder="사용자 이름을 입력해주세요"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <form>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={inputField.password ? inputField.password : ''}
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
          </FormStyle>
        </>
        :
        <>
          <h2>회원가입</h2>
          <FormStyle>
            <form>
              <label htmlFor="username">사용자 이름</label>
              <input
                type="text"
                id="username"
                value={inputField.username ? inputField.username : ''}
                placeholder="알파벳 소문자, 숫자 포함 최소 4~10자"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <form>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={inputField.password ? inputField.password : ''}
                placeholder="영문자, 숫자, 특수문자 포함 최소 8~15자"
                onChange={(e) => handleChangeInputField(e)}
              />
              <input
                type="password"
                id="checkPassword"
                value={inputField.checkPassword ? inputField.checkPassword : ''}
                placeholder="비밀번호를 확인해주세요"
                onChange={(e) => handleChangeInputField(e)}
              />
              <p>{alert ? alert : ''}</p>
            </form>
          </FormStyle>
        </>
      }
    </>
  );
}