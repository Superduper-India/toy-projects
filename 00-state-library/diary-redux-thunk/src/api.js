import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const POSTS = '/posts';
const POST = '/post';

// 게시글 전체 조회 GET /api/posts
export const getPosts = async () => {
  const response = await api.get(POSTS);
  return response;
};

// 게시글 조회 GET /api/post/{postId}
export const getPost = async () => {
  const response = await api.get(POST);
  return response;
};

// 게시글 작성 POST /api/post
export const addPost = async (
  { id, username, title, content, comments, comment }
) => { await api.post(POST, { id, username, title, content, comments, comment }); }

// 게시글 수정 PUT /api/post/{id}
export const editPost = async (editedPost) => {
  const { id, title, content } = editedPost;
  await api.put(POSTS + `/${id}`, { title, content, ...editedPost });
}

// 게시글 삭제 DELETE /api/post/{id}
export const deletePost = async (id) => {
  const response = await api.delete(POST + `/${id}`);
  return response;
};
