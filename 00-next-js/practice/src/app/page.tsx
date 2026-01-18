import Link from 'next/link';

export default function FeedPage() {
  return (
    <div>
      <h1>Feed</h1>
      <Link href="/photo/1">1번 사진 보기 (모달로 열림)</Link>
    </div>
  );
}