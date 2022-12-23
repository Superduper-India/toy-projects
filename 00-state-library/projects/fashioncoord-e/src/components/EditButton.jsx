import { ButtonSecondary } from '../styles/Styles';

export default function EditButton({ onClickEditPost }) {
  return (
    <>
      <ButtonSecondary>
        <button
          type="button"
          onClick={() => onClickEditPost()}
        >
          수정하기
        </button>
      </ButtonSecondary>
    </>
  );
}