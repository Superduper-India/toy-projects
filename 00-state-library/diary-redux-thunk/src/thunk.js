import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getPosts, getSignUp, addPost, deletePost, editPost
} from './api';

export const fetchGetPosts = createAsyncThunk('india/fetchGetPosts', getPosts);

export const fetchSignUp = createAsyncThunk('india/fetchSignUp',
  async (userInfo) => {
    const response = await getSignUp(userInfo);
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

export const fetchPost = createAsyncThunk('india/fetchPost',
  async (newPost) => {
    const response = await addPost(newPost);
    return response.data;
  }
);
