import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../slice';
import { FormStyle } from '../styles/Styles';

import PostButton from '../components/PostButton';

// string props를 받습니다.
export default function AuthForm({ props }) {
  const dispatch = useDispatch();
  const { inputField } = useSelector((state) => state.postReducer);

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  return (
    <>
      {props === 'login' ?
        <>
          <h2>로그인</h2>
          <FormStyle>
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="username"
                value={inputField.username ? inputField.username : ''}
                placeholder="Email"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <form>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={inputField.password ? inputField.password : ''}
                placeholder="Password"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <PostButton props={'login'} />
          </FormStyle>
        </>
        :
        <>
          <h2>회원가입</h2>
          <FormStyle>
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="username"
                value={inputField.username ? inputField.username : ''}
                placeholder="Email"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <form>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={inputField.password ? inputField.password : ''}
                placeholder="Password"
                onChange={(e) => handleChangeInputField(e)}
              />
            </form>
            <PostButton props={'login'} />
          </FormStyle>
        </>
      }
    </>
  );
}