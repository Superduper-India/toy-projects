import { Link } from 'react-router-dom';

import { timeCalculator } from '.././utils/utils';

import { ListStyle } from '../styles/ListStyle';
import CommentForm from './CommentForm';
import Icons from './Icons';

import tmp from '.././assets/tmp.png';

export default function PostList({
  posts, inputField, onChangeInputField, onClickPostComment
}) {
  return (
    <>
      <ListStyle>
        {posts.map(post => (
          <li key={post.id}>
            {/*반복1*/}
            <div className="user-info">
              <img src={tmp} />
              <span>{post.username}</span>
              <button type="button">더보기</button>
            </div>
            <div className="img">
              <img src={post.imgUrl} />
            </div>
            <Icons />
            <div className="content">
              <p>{`${post.likes}명이 좋아합니다`}</p>
              <div>
                <span>{post.username}</span>
                <p>{post.content}</p>
                <button type="button">더보기</button>
              </div>
              <Link to={`/comment/${post.id}`}>
                {`댓글 ${post.commentList.length}개 모두 보기`}
              </Link>
              <span className="time">
                {timeCalculator(post.createdAt)}
              </span>
            </div>
            <CommentForm
              postId={post.id}
              inputField={inputField}
              onChangeInputField={onChangeInputField}
              onClickPostComment={onClickPostComment}
            />
          </li>
        ))}
      </ListStyle>
    </>
  );
}
