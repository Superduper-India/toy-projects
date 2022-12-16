import styled from 'styled-components';

// HomePage
export const BannerImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 480px;
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
      h2 {
        margin-bottom: 24px;
      }
    }
  }
`;
