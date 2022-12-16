import { createSlice } from '@reduxjs/toolkit';

import { fetchGetPost, fetchEditPost, fetchPost } from './thunk';

export const post = createSlice({
  name: 'post',
  initialState: {
    status: '',
    postList: [],
    post: {
      id: 1,
      title: '',
      content: '',
      username: '',
      commentList: [],
      likeNum: 0,
      createdAt: '',
      modifiedAt: ''
    }
  },
  reducers: {
    changeInputField: (state, { payload: { id, value } }) => {
      return {
        ...state,
        post: { ...post, [id]: value },
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        }
      })
      .addCase(fetchGetPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        }
      })
      .addCase(fetchGetPost.fulfilled, (state, { payload: { data } }) => {
        return {
          ...state,
          status: 'success',
          postList: [...data]
        }
      })
      .addCase(fetchEditPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchEditPost.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchEditPost.fulfilled, (state, { payload }) => {
        return {
          post: [...payload],
        }
      })
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPost.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchPost.fulfilled, (state, { payload }) => {
        return {
          post: [...payload],
        }
      })
  }
});

export const { changeInputField } = post.actions;

const postReducer = post.reducer;
export default postReducer;
