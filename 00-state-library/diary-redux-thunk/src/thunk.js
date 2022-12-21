import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getPosts,
  getSignUp, getSignIn, getSignOut,
  addPost, deletePost, editPost
} from './api';

import { saveItem, removeItem } from './storage';

export const fetchGetPosts = createAsyncThunk('india/fetchGetPosts', getPosts);

export const fetchGetSignUp = createAsyncThunk('india/fetchGetSignUp',
  async (userInfo) => {
    const response = await getSignUp(userInfo);
    return response.data;
  }
);

export const fetchGetSignIn = createAsyncThunk('india/fetchGetSignIn',
  async (userInfo) => {
    const response = await getSignIn(userInfo);
    if (response.statusCode === 200) saveItem('success', 'login');
    return response.data;
  }
);

export const fetchGetSignOut = createAsyncThunk('india/fetchGetSignOut',
  async () => {
    const response = await getSignOut();
    if (response.statusCode === 200) removeItem('success');
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
