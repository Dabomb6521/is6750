import { createSlice } from "@reduxjs/toolkit";
import { action } from "../pages/ContactPage";

const raw = localStorage.getItem("userData");
const savedUser = raw ? JSON.parse(raw) : null;

const authSlice = createSlice({
  initialState: {
    userData: savedUser,
  },
  name: "auth",
  reducers: {
    setUser(state, action) {
      state.userData = null;
    },
    clearUser(state) {
      state.userData = action.payload;
    }
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
