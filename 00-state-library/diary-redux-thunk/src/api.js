import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

// 상륜님 ip: 15.164.229.199
const baseURL = axios.create({
  baseURL: 'http://15.164.229.199',
  headers: {
    'Access-Control-Allow-Origin': '*',
    // Authorization : Bearer <JWT>
    // 이렇게 되면 토큰이 유효하지 않을때 주는 유효한 스테이터스 코드에 해당할때 에러처리를 넣어주기
  }
});

const POSTS = '/api/posts'; // 전체 게시글
const POST = '/api/post'; // 단일 게시글
// const COMMENT = '/api/comment'; // 댓글
// const LIKE = '/api/like'; // 좋아요
const SIGNUP = '/api/user/signup'; // 회원가입
const LOGIN = '/api/user/login'; // 로그인
const LOGOUT = '/api/user/logout'; // 로그아웃

// 게시글 전체 조회
export const getPosts = async () => {
  const response = await baseURL.get(POSTS);
  return response;
};

// 단일 게시글 조회
export const getPost = async (postId) => {
  const response = await baseURL.get(POST + `/${postId}`);
  return response;
};

// 회원가입
export const getSignUp = async (userInfo) => {
  const response = await baseURL.post(
    SIGNUP, { ...userInfo, adminToken: process.env.REACT_APP_TOKEN }
  ).catch(err => {
    const { response: { data: { msg: msg } } } = err;
    alert(msg);
  });
  alert(response.data.msg);
};

// 로그인
export const getSignIn = async (userInfo) => {
  const response = await baseURL.post(
    LOGIN, userInfo
  ).catch(err => {
    const { response: { data: { msg: msg } } } = err;
    alert(msg);
  });
  alert(response.data.msg);
  return response.data;
};

// 로그아웃
export const getSignOut = async () => {
  const response = await baseURL.delete(LOGOUT);
  return response;
};

// 게시글 작성 POST /api/post
export const addPost = async (newPost) => {
  await api.post('/post', { ...newPost, });
};

// 게시글 수정 PUT /api/post/{id}
export const editPost = async (editedPost) => {
  const { id, title, content } = editedPost;
  await api.put(POST + `/${id}`, { title, content, ...editedPost });
};

// 게시글 삭제 DELETE /api/post/{id}
export const deletePost = async (id) => {
  const response = await api.delete(POST + `/${id}`);
  return response;
};
