import styled from 'styled-components';

// ExceptionPage
export const ErrorContainer = styled.div`
  width: 30%;
  max-width: 1200px;
  margin: 100px auto 0 auto;
  div {
    text-align: center;
    font-size: 18px;
    color: #7F8492;
    h2 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 24px;
    }  
  }
`;

export const LoadingContainer = styled.div`
  width: 30%;
  max-width: 1200px;
  margin: 100px auto 0 auto;
`;

// DetailPage
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto 0 auto;
  padding: 100px 40px;
  font-size: 18px;
  background-color: #DFEBE7;
  h2 {
    margin-bottom: 18px;
  }
`;

export const DetailPost = styled.div`
  font-size: 18px;
  background-color: #fff;
  text-align: start;
  padding: 40px;
  border-radius: 16px;
  div {
    display: flex;
    margin-bottom: 18px;
    label {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
    input {
      width: 420px;
      margin-right: 8px;
    }
    button {
      margin-right: 8px;
    }
  }
`;

export const DetailPostContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  h3 {
    padding-bottom: 8px;
    border-bottom: 1px solid #000;
  }
  p {
    padding: 20px 8px;
  }
`;

// PostButton
export const ButtonSecondary = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    width: 140px;
    height: 40px;
    background: #006A5D;
    :hover {
      background-color: #85C6AF;
    }
  }
`;

export const ButtonPrimary = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    width: 140px;
    height: 40px;
    color: #000;
    background-color: #fff;
    border: 1px solid #006A5D;
    :hover {
      color: #fff;
      background-color: #006A5D;
    }
  }
`;

// CommentList
export const WriterComment = styled.div`
    background-color: #33CC99;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
`;

export const OtherUserComment = styled.div`
    background-color: #fff;
    border: 1px solid #7F8492;
    padding: 10px 20px;
    border-radius: 8px;
`;

export const CommentContainer = styled.ul`
    li {
      div {
        display: flex;
        font-size: 14px;
        p {
          margin-right: 4px;
        }
      }
    }
`;

export const Right = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Left = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
