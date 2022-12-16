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
  a:hover {
    color: #7F8492;
  }
`;
