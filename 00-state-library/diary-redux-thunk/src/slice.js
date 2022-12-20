import { createSlice } from '@reduxjs/toolkit';

import {
  fetchGetPosts,
  fetchGetSignUp,
  fetchDeletePost,
  fetchEditPost,
  fetchPost
} from './thunk';

export const post = createSlice({
  name: 'post',
  initialState: {
    status: '',
    alert: '',
    postList: [],
    currPost: {},
    inputField: {
      title: '',
      content: '',
      username: '',
      password: '',
      checkPassword: '',
      admin: false,
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
          username: '',
          password: '',
          checkPassword: '',
          admin: false,
        },
        alert: '',
      };
    },
    setMessage: (state, { payload: actions }) => {
      return {
        ...state,
        alert: actions
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
      })
      .addCase(fetchDeletePost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchDeletePost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchDeletePost.fulfilled, (state, { payload: { data } }) => {
        return {
          currPost: { ...data }
        };
      })
      .addCase(fetchGetSignUp.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetSignUp.rejected, (state) => {
        return {
          ...state,
          status: 'redirect',
        };
      })
      .addCase(fetchGetSignUp.fulfilled, (state) => {
        return {
          ...state,
          status: 'success',
        };
      });
  }
});

export const {
  changeInputField, clearInputField, setMessage
} = post.actions;

const postReducer = post.reducer;
export default postReducer;
