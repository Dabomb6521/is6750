import { createSlice } from "@reduxjs/toolkit";

const raw = localStorage.getItem("userData");
const savedUser = raw ? JSON.parse(raw) : null;

const authSlice = createSlice({
  initialState: {
    userData: savedUser,
  },
  name: "auth",
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
    clearUser(state) {
      state.userData = null;
    }
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
