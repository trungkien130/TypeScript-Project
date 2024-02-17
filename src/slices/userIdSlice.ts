import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserIdState {
  id: string | null;
}

const initialState: UserIdState = {
  id: localStorage.getItem('id') || null,
};

const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.id = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;
export default userIdSlice.reducer;