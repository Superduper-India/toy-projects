import styled from 'styled-components';

// HomePage
export const BannerImg = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    height: 600px;
    filter: brightness(30%);
  }
  div {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 0;
  }
  h2 {
    font-size: 32px;
    margin: 24px auto;
  }
  p {
    font-size: 24px;
    margin-bottom: 64px;
  }
`;

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

// TopNavBar
export const TopNavContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: 700;
`;

export const TopNavRightBox = styled.div`
  display: flex;
  a {
    margin-right: 40px;
  }
`;

// HomePage
export const ListContainer = styled.div`
  height: 550px;
  padding: 20px;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 32px;
    margin: 24px auto;
  }
`;

// List
export const Time = styled.p`
  color: #FF9933;
  font-size: 14px;
`;

export const CarouselWrapper = styled.div`
font-size: 24px;
img {
  width: 100%;
  object-fit: cover;
  margin-bottom: 8px;
}
 ul {
  display: flex;
  transition: transform .5s ease-in-out;
  li {
    width: 200px;
    margin-right: 28px;
    padding: 28px;
    background-color: #fff;
    box-shadow: 1px 0px 5px 0px #D8DDE6;
    text-align: start;
    h5 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 16px;
      word-break: keep-all;
    }
    span {
      margin-right: 4px;
      font-size: 18px;
      display: block;
    }
    div {
      margin-top: 8px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      div {
        margin-right: 8px;
        :hover {
          color: #85C6AF;
        }
      }
    }
  }
 }
`;

export const CarouselButtons = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CarouselLeftButton = styled.button`
  position: absolute;
  top: 150px;
  left: 0;
  background-color: #6666FF;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #006A5D;
    :hover {
      background-color: #85C6AF;
    }
`;

export const CarouselRightButton = styled.button`
  position: absolute;
  top: 150px;
  right: 0;
  background-color: #6666FF;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #006A5D;
    :hover {
      background-color: #85C6AF;
    }
`;

// PostPage, LoginPage, SignInPage
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto 0 auto;
  padding: 100px 40px;
  font-size: 18px;
  background-color: #DFEBE7;
  height: 100vh;
  div {
    width: 100%;
    margin-bottom: 18px;
  }
  h2 {
    margin-bottom: 18px;
    margin-left: 12px;
  }
`;

// CommentForm
export const CommentFormStyle = styled.div`
    label {
      font-size: 18px;
    }
    input {
      font-size: 16px;
      border: 1px solid #7F8492;
      padding: 8px 10px;
      border-radius: 4px;
    }
    input:focus {
      outline: none !important;
      border-color: #33CC99;
      box-shadow: 0 0 6px #33CC99;
    }
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: #fff;
  text-align: start;
  padding: 40px;
  border-radius: 16px;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 24px;
    label {
      font-size: 18px;
      margin-bottom: 8px;
    }
    input {
      border: 1px solid #7F8492;
      width: 100%;
      padding: 8px 10px;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 8px;
    }
    input:focus {
      outline: none !important;
      border-color: #33CC99;
      box-shadow: 0 0 6px #33CC99;
    }
    textarea {
      width: 100%;
      height: 300px;
      font-size: 16px;
      padding: 16px 10px;
      border: 1px solid #7F8492;
      border-radius: 4px;
    }
    textarea:focus {
      outline: none !important;
      border-color: #33CC99;
      box-shadow: 0 0 6px #33CC99;
    }
    textarea::placeholder {
      font-size: 16px;
    }
    p {
      color: #FF9933;
    }
  }
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
