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
  p {
    font-size: 24px;
    margin-bottom: 64px;
  }
`;

// List
export const CarouselWrapper = styled.div`
font-size: 24px;
 ul {
  display: flex;
  transition: transform .5s ease-in-out;
  li {
    margin-right: 28px;
    padding: 28px;
    background-color: #fff;
    box-shadow: 1px 0px 5px 0px #D8DDE6;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 200px;
      height: 300px;
      button {
        background-color: #fff;
        color: #4F5E58;
        font-size: 16px;
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

// PostPage
export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto 0 auto;
  padding: 100px 40px;
  font-size: 18px;
  background-color: #DFEBE7;
  div {
    width: 100%;
  }
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
    border-color: #33CC99;
    box-shadow: 0 0 6px #33CC99;
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
    border-color: #33CC99;
    box-shadow: 0 0 6px #33CC99;
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
    background: #006A5D;
    :hover {
      background-color: #85C6AF;
    }
  }
`;
