import { createSlice } from "@reduxjs/toolkit";

const initialPlaylistState = {
  videos: null,
  currentVideoIndex: 0,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState: initialPlaylistState,
  reducers: {
    setCurrentVideoIndex: (state,action) => {
      state.currentVideoIndex = action.payload;
    },
    moveToNexVideo: (state) => {
      state.currentVideoIndex = (state.currentVideoIndex +1) % state.videos.length;
    }
  },
});

export const {moveToNextVideo, setCurrentVideoIndex} = playlistSlice.actions;

export default playlistSlice.reducer;
