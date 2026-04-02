import { createSlice } from "@reduxjs/toolkit";

const initialVideoState = {
  playbackSpeed: 1,
  currentTimeStamp: 0,
  watchPercent: 0,
};

const videosSlice = createSlice({
  name: "videos",
  initialState: initialVideoState,
  reducers: {
    setWatchPercent(state, action) {
      state.watchPercent = action.payload;
    },
  },
});

export const { setWatchPercent } = videosSlice.actions;

export default videosSlice.reducer;
