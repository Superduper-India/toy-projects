import { createSlice } from '@reduxjs/toolkit';

import { fetchGetPosts, fetchEditPost, fetchPost } from './thunk';

export const post = createSlice({
  name: 'post',
  initialState: {
    status: '',
    postList: [],
    inputField: {
      title: '',
      content: '',
    },
  },
  reducers: {
    changeInputField: (state, { payload: { id, value } }) => {
      const { inputField } = state;
      return {
        ...state,
        inputField: { ...inputField, [id]: value },
      };
    },
    clearInputField: (state) => {
      return {
        ...state,
        inputField: {
          title: '',
          content: '',
        },
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetPosts.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetPosts.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchGetPosts.fulfilled, (state, { payload: { data } }) => {
        return {
          ...state,
          status: 'success',
          postList: [...data]
        };
      })
      .addCase(fetchEditPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchEditPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchEditPost.fulfilled, (state, { payload }) => {
        return {
          postList: [...payload],
        };
      })
      .addCase(fetchPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchPost.fulfilled, (state, { payload: { data } }) => {
        return {
          currPost: { ...data }
        };
      });
  }
});

export const { changeInputField, clearInputField } = post.actions;

const postReducer = post.reducer;
export default postReducer;
