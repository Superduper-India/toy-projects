import axios from 'axios';

import { saveItem } from './storage';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

// 상륜님 ip: 15.164.229.199
const baseURL = axios.create({
  baseURL: 'http://15.164.229.199',
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 토큰의 유효기간이 만료된듯??
    // Authorization: `${loadItem('success')}`,
  },
});

const POSTS = '/api/posts'; // 전체 게시글
const POST = '/api/post'; // 단일 게시글
// const COMMENT = '/api/comment'; // 댓글
// const LIKE = '/api/like'; // 좋아요
const SIGNUP = '/api/user/signup'; // 회원가입
const LOGIN = '/api/user/login'; // 로그인

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
  saveItem('success', response.headers.authorization);
  return response.data;
};

// 게시글 작성
export const addPost = async (newPost) => {
  await baseURL.post(POST, newPost);
};

// 게시글 수정
export const editPost = async (editedPost) => {
  const { id, title, content, image } = editedPost;
  await baseURL.put(POST + `/${id}`, { title, content, image });
};

// 게시글 삭제 DELETE /api/post/{id}
export const deletePost = async (id) => {
  const response = await api.delete(POST + `/${id}`);
  return response;
};
