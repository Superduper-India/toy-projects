import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getPosts, getPost,
  getSignUp, getSignIn,
  addPost, deletePost, editPost, addComment
} from '../../services/api';

export const fetchGetPosts = createAsyncThunk('india/fetchGetPosts', getPosts);

export const fetchGetPost = createAsyncThunk('india/fetchGetPost',
  async (postId) => {
    const response = await getPost(postId);
    return response.data;
  }
);

export const fetchGetSignUp = createAsyncThunk('india/fetchGetSignUp',
  async (userInfo) => {
    const response = await getSignUp(userInfo);
    return response.data;
  }
);

export const fetchGetSignIn = createAsyncThunk('india/fetchGetSignIn',
  async (userInfo) => {
    const response = await getSignIn(userInfo);
    return response.data;
  }
);

export const fetchEditPost = createAsyncThunk('india/fetchEditPost',
  async (editedPost) => {
    const response = await editPost(editedPost);
    return response.data;
  }
);

export const fetchDeletePost = createAsyncThunk('india/fetchDeletePost',
  async (currPostId) => {
    const response = await deletePost(currPostId);
    return response.data;
  }
);

export const fetchAddPost = createAsyncThunk('india/fetchAddPost',
  async (newPost) => {
    const response = await addPost(newPost);
    return response.data;
  }
);

export const fetchAddComment = createAsyncThunk('india/fetchAddComment',
  async (newComment) => {
    await addComment(newComment);
  }
);
