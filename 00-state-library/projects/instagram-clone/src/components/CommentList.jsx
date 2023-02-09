import CommentForm from './CommentForm';
import UserInfo from './UserInfo';
import Icons from './Icons';

import { timeCalculator } from '.././utils/utils';

import { CommentListStyle } from '../styles/CommentListStyle';
import tmp from '.././assets/tmp.png';

export default function CommentList({
  currPost, inputField, onChangeInputField, onClickPostComment
}) {
  return (
    <CommentListStyle>
      <div>
        <div className="img">
          <img src={currPost.imgUrl} />
        </div>
        <div className="content">
          <UserInfo postUsername={currPost.username} />
          <div className="user-content">
            <img src={tmp} />
            <div>
              <div>
                <span>{currPost.username}</span>
                <p>{currPost.content}</p>
              </div>
              <span className="time">{timeCalculator(currPost.createdAt)}</span>
            </div>
          </div>
          <Icons color="rgba(0, 0, 0, 0.1)" />
          <div className="like-count">
            <div>
              <span>{`${currPost.likes}명`}</span>
              <p>이 좋아합니다</p>
            </div>
            <span className="time">{timeCalculator(currPost.createdAt)}</span>
          </div>
          <CommentForm
            postId={currPost.id}
            inputField={inputField}
            onChangeInputField={onChangeInputField}
            onClickPostComment={onClickPostComment}
          />
        </div>
      </div>
    </CommentListStyle>
  );
}
