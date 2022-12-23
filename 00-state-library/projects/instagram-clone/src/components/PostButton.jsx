import { ButtonSecondary } from '../styles/Styles';

export default function PostButton({
  props, onClickPost, onClickSignUp, onClickSignIn, onClickPostComment
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
            : props === 'signUp' ?
              <button
                type="button"
                onClick={() => onClickSignUp()}
              >
                회원가입
              </button>
              :
              <button
                type="button"
                onClick={() => onClickPostComment()}
              >
                추가하기
              </button>
        }
      </ButtonSecondary>
    </>
  );
}