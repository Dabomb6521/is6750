import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui";
import playlistsReducer from "./playlist";
import videoReducer from "./video";

export default configureStore({
  reducer: {
    ui: uiReducer,
    playlists: playlistsReducer,
    video: videoReducer,
  },
});
