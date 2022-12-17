import styled from 'styled-components';

// HomePage
export const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 480px;
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
  width: 10%;
  max-width: 1200px;
  margin: 30% auto 30% auto;
`;

// TopNavBar
export const TopNavContainer = styled.div`
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
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: 700;
`;
