import { ButtonSecondary } from '../styles/Styles';

export default function PostButton({
  props, onClickPost, onClickSignUp, onClickSignIn
}) {

  return (
    <>
      <ButtonSecondary>
        {!props ?
          <button
            type="button"
            onClick={() => onClickPost()}
          >
            기록하기
          </button>
          : props === 'signIn' ?
            <button
              type="button"
              onClick={() => onClickSignIn()}
            >
              로그인
            </button>
            :
            <button
              type="button"
              onClick={() => onClickSignUp()}
            >
              회원가입
            </button>
        }
      </ButtonSecondary>
    </>
  );
}