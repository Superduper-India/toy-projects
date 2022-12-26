import {
  CommentContainer, Time,
  WriterComment, OtherUserComment, Left, Right
} from '../styles/Styles';

import { useSelector } from 'react-redux';

import { timeCalculator } from '.././utils/utils';

export default function CommmentList() {
  const { currPost: { comments, username } } = useSelector((state) => state.postReducer);
  const writer = username;
  return (
    <CommentContainer>
      {comments ? comments.map(comment => (
        comment.username === writer ?
          (
            <Right key={comment.id} >
              <div>
                <p>{comment.username}님의 댓글</p>
                <Time>{timeCalculator(comment.createdAt)}</Time>
              </div>
              <WriterComment>
                <p>{comment.content}</p>
              </WriterComment>
            </Right>
          )
          :
          (
            <Left key={comment.id} >
              <div>
                <p>{comment.username}님의 댓글</p>
                <Time>{timeCalculator(comment.createdAt)}</Time>
              </div>
              <OtherUserComment>
                <p>{comment.content}</p>
              </OtherUserComment>
            </Left>
          )
      )) : null}
    </CommentContainer>
  );
}
