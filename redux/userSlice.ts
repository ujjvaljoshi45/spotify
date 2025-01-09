import User from "@/constants/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: {
    email: "",
    gender: "",
    name: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
export const getUser = (state: { user: UserState }) => state.user;
