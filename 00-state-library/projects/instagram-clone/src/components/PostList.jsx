import { Link } from 'react-router-dom';

import CommentForm from './CommentForm';
import UserInfo from './UserInfo';
import Icons from './Icons';

import { timeCalculator } from '.././utils/utils';

import { PostListStyle } from '../styles/PostListStyle';

export default function PostList({
  posts, inputField, onChangeInputField, onClickPostComment
}) {
  return (
    <PostListStyle>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <UserInfo postUsername={post.username} />
            <div className="img">
              <img src={post.imgUrl} />
            </div>
            <div className="content">
              <Icons />
              <div className="like-count">
                <span>{`${post.likes}명`}</span>
                <p>이 좋아합니다</p>
              </div>
              <div className="user-content">
                <span>{post.username}</span>
                <p>{post.content}</p>
                {/* <button type="button">더보기</button> */}
              </div>
              <div className="comment-content">
                <Link to={`/comment/${post.id}`}>
                  {`댓글 ${post.commentList.length}개 모두 보기`}
                </Link>
                <span>{timeCalculator(post.createdAt)}</span>
              </div>
            </div>
            <CommentForm
              postId={post.id}
              inputField={inputField}
              onChangeInputField={onChangeInputField}
              onClickPostComment={onClickPostComment}
            />
          </li>
        ))}
      </ul>
    </PostListStyle>
  );
}
