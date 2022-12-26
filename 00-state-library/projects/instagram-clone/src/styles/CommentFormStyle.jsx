import styled from 'styled-components';

export const CommentFormStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  & > div {
    label {
      margin-right: 8px;
    }
    input {
      :focus {
      outline: none;
      }
    }
  }
  & > button {
    background-color: transparent;
    color: #6dc4ff;
    font-size: 14px;
    font-weight: 500;
    :hover {
      color: #0099FF;
    }
  }
`;
