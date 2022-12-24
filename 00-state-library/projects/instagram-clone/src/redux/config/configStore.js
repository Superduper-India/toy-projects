import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import postReducer from '../modules/postSlice';

const store = configureStore({
  reducer: { postReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
