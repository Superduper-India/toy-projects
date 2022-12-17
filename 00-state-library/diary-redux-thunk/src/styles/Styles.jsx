import styled from 'styled-components';

// HomePage
export const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 600px;
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
  z-index: 1;
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

export const ListContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 20px auto 0px auto;
  padding: 20px;
  font-size: 18px;
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
  }
  div {
    text-align: center;
    font-size: 24px;
  }
  ul {
    margin: 48px auto;
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 48px 36px;
      width: 360px;
      height: 360px;
      margin-right: 24px;
      border: 1px solid #D8DDE6;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
    }
  }
`;

// PostPage
export const PostContainer = styled.div`
  width: 60%;
  max-width: 1200px;
  margin: 20px auto 0px auto;
  padding: 100px 40px 40px 40px;
  font-size: 18px;
  background-color: #F4F6F9;
  h2 {
    margin-bottom: 18px;
  }
`;

// Form
export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: white;
  text-align: start;
  padding: 40px;
  border-radius: 16px;
`;

export const FormTop = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 36px;
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
  }
  input:focus {
    outline: none !important;
    border-color: #0099ffa1;
    box-shadow: 0 0 6px #0099ffa1;
  }
`;

export const FormBottom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: 18px;
    margin-bottom: 8px;
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
    border-color: #0099ffa1;
    box-shadow: 0 0 6px #0099ffa1;
  }
  textarea::placeholder {
    font-size: 16px;
  }
`;

// AddButton
export const ButtonSecondary = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  button {
    border-radius: 5px;
    width: 140px;
    height: 40px;
    color: #fff;
    background: #6666ff;
    :hover {
      background-color: #0099FF;
      color: #fff;
    }
  }
`;
