import styled from 'styled-components';

export const PostListStyle = styled.div`
  padding-top: 5rem;
  width: 100%;
  background-color: #F2F2F2;
  & > ul {
    width: 30%;
    margin: 0 auto;
    padding-bottom: 1rem;
    li {
      border-radius: 8px;
      border: 1px solid #D6D6D6;
      background-color: #fff;
      margin-bottom: 1rem;
    }
    .user-info {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem;
      button {
          background-color: #fff;
          color: #000;
        }
      div {
        display: flex;
        align-items: center;
        img {
          margin-right: 12px;
          border: 1px solid #D6D6D6;
          width: 48px;
          height: 48px;
          border-radius: 24px;
        }
        span {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
    .img {
      img {
        width: 100%;
        object-fit: cover;
        height: 600px;
      }
    }
    .content {
      padding: 0.8rem;
      font-size: 14px;
      & > p {

      }
      .like-count {
        display: flex;
        margin: 8px 0;
        & > span {
          font-weight: 700;
        }
      }
      .user-content {
        display: flex;
        margin: 8px 0;
        & > span {
          font-weight: 700;
          margin-right: 4px;
        }
      }
      .comment-content {
        display: flex;
        flex-direction: column;
        & a {
          color: rgba(0, 0, 0, 0.4);
        }
        & > span {
          margin: 8px 0;
          font-size: 10px;
          color: rgba(0, 0, 0, 0.4);
        }
      } 
    }
  }
`;
