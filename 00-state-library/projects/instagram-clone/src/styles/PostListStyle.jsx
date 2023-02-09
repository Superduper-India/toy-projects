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
    .img {
      img {
        width: 100%;
        object-fit: cover;
        height: 600px;
      }
    }
    .content {
      font-size: 14px;
      .like-count {
        padding: 0 0.8rem;
        display: flex;
        margin: 8px 0;
        & > span {
          font-weight: 700;
        }
      }
      .user-content {
        padding: 0 0.8rem;
        display: flex;
        margin: 8px 0;
        & > span {
          font-weight: 700;
          margin-right: 4px;
        }
      }
      .comment-content {
        padding: 0 0.8rem;
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
