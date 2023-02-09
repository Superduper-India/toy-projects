import axios from 'axios';

import { saveItem, loadItem } from './storage';

const tmpURL = axios.create({
  baseURL: 'http://localhost:3003',
});

const baseURL = axios.create({
  baseURL: 'http://15.164.229.199',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `${loadItem('success')}`,
  },
});

const POSTS = '/posts'; // 전체 게시글
const POST = '/api/post'; // 단일 게시글
const COMMENT = '/api/comment'; // 댓글
// const LIKE = '/api/like'; // 좋아요
const SIGNUP = '/api/user/signup'; // 회원가입
const LOGIN = '/api/user/login'; // 로그인

// 게시글 전체 조회
export const getPosts = async () => {
  const response = await tmpURL.get(POSTS);
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
  const response = await baseURL.post(POST, newPost);
  if (response.status === 200) location.assign('/');
};

// 게시글 수정
export const editPost = async (editedPost) => {
  const { id, title, content, image } = editedPost;
  const response = await baseURL.put(POST + `/${id}`, { title, content, image });
  if (response.status === 200) history.back();
};

// 게시글 삭제
export const deletePost = async (id) => {
  const response = await baseURL.delete(POST + `/${id}`);
  if (response.status === 200) location.assign('/');
};

// 댓글 작성
export const addComment = async (newComment) => {
  const { id, content } = newComment;
  const response = await baseURL.post(COMMENT + `/${id}`, { content });
  if (response.status === 200) location.reload();
};
