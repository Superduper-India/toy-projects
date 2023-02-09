// import { UserInfoStyle } from '../styles/UserInfoStyle';

import { Link } from 'react-router-dom';

import Icons from './Icons';
import { timeCalculator } from '.././utils/utils';

export default function PostContent({ post }) {
  return (
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
  );
}
