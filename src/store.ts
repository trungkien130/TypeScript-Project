import { configureStore } from '@reduxjs/toolkit'
import accountReducer  from "./slices/accountSlice.ts";
import userIdReducer from './slices/userIdSlice.ts';
import productsReducer from'./slices/addToCartSlice.ts'
export const store = configureStore({
  reducer: {
    account: accountReducer,
    userId: userIdReducer,
    products: productsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch