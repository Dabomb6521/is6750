import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, element: <h1>Home</h1> },
      {
        path: "playlist",
        children: [
          { index: true, element: <h1>View All Playlists</h1> },
          { path: ":id", element: <h1>View Specific Playlist</h1> },
          { path: "create/:id", element: <h1>Create new playlist</h1> },
          { path: "edit/:id", element: <h1>Edit specific playlist</h1> },
          { path: "delete/:id", element: <h1>Delete specific playlist</h1> },
          { path: "watch/:id", element: <h1>Watch a playlist</h1> },
        ],
      },
      {
        path: "video",
        children: [
          { index: true, element: <h1>View All Videos</h1> },
          { path: ":id", element: <h1>View Specific Video</h1> },
          { path: "create/:id", element: <h1>Create new Video</h1> },
          { path: "edit/:id", element: <h1>Edit specific Video</h1> },
          { path: "delete/:id", element: <h1>Delete specific Video</h1> },
          { path: "watch/:id", element: <h1>Watch a specific Video</h1> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
