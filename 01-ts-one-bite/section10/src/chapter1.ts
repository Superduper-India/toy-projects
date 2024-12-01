// 맵드 타입 기반의 유틸리티 타입
// Partial, Required, Readonly

// 1. Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 맵드 타입을 사용하여 직접 구현해보기
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  // ❌ tags 프로퍼티가 없음
  title: '제목은 나중에 짓자...',
  content: '초안...',
};

// 2. Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  // ❌
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: 'https://...',
};

// 3. Readonly<T>
// 특정 객체 타입의 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글입니다.',
  tags: [],
  content: '',
};

// readonlyPost.content = '해킹당함';
