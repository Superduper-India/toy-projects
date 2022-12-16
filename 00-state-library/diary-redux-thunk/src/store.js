import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slice";

const store = configureStore({
  reducer: { postReducer },
});

export default store;
