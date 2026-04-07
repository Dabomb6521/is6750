import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  initialState: {
    videos: null,
    currentVideoIndex: 0,
  },
  name: "playlists",
  reducers: {
    setCurrentVideoIndex:(state,action)=>{
        state.currentVideoIndex = action.payload;
    },
    moveToNextVideo:(state)=>{
        state.currentVideoIndex = (state.currentVideoIndex + 1) % state.videos.length;
    }
  },
});

export const {moveToNextVideo,setCurrentVideoIndex} = playlistSlice.actions;

export default playlistSlice.reducer;
