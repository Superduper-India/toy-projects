import { IconsStyle } from '../styles/IconsStyle';

export default function Icons({ color }) {
  return (
    <IconsStyle color={color}>
      <div>
        <span>좋아요</span>
        <span>댓글</span>
        <span>공유</span>
      </div>
      <span>북마크</span>
    </IconsStyle>
  );
}
