import { createSlice } from '@reduxjs/toolkit';

import {
  fetchGetPosts,
  fetchGetPost,
  fetchGetSignUp,
  fetchGetSignIn,
  fetchDeletePost,
  fetchEditPost,
  fetchAddPost,
  fetchAddComment
} from '../middleware/thunk';

export const post = createSlice({
  name: 'post',
  initialState: {
    status: '',
    alert: '',
    postList: [],
    currPost: {},
    setImgUrl: '',
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
    clearAll: (state) => {
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
        currPost: {},
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
      .addCase(fetchGetPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchGetPost.fulfilled, (state, { payload }) => {
        return {
          ...state,
          status: 'success',
          currPost: { ...payload }
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
          ...state,
          status: 'success',
          postList: [...payload],
        };
      })
      .addCase(fetchAddPost.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchAddPost.rejected, (state) => {
        return {
          ...state,
          status: 'error',
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
      .addCase(fetchDeletePost.fulfilled, (state) => {
        return {
          ...state,
          status: 'success',
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
      })
      .addCase(fetchGetSignIn.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchGetSignIn.rejected, (state) => {
        return {
          ...state,
          status: 'redirect',
        };
      })
      .addCase(fetchGetSignIn.fulfilled, (state) => {
        return {
          ...state,
          status: 'login',
        };
      })
      .addCase(fetchAddComment.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchAddComment.rejected, (state) => {
        return {
          ...state,
          status: 'error',
        };
      })
      .addCase(fetchAddComment.fulfilled, (state) => {
        return {
          ...state,
          status: 'success',
        };
      });
  }
});

export const {
  changeInputField, clearAll, setMessage
} = post.actions;

const postReducer = post.reducer;
export default postReducer;
