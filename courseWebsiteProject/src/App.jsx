import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./App.css";
import { DefaultLayout } from "./pages/DefaultLayout";
import AllVideos, {loader as videoLoader} from "./pages/Videos/AllVideos";
import EditVideo, { loader as editVideoLoader } from "./pages/Videos/Edit";

const router = createBrowserRouter([
  {
    path:"/",
    Component: DefaultLayout ,
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
          { index: true, Component:AllVideos, loader: videoLoader},
          { path: ":id", element: <h1>View Specific Video</h1> },
          { path: "create/:id", element: <h1>Create new Video</h1> },
          { path: "edit/:id", Component: EditVideo, loader:editVideoLoader },
          { path: "delete/:id", element: <h1>Delete specific Video</h1> },
          { path: "watch/:id", element: <h1>Watch a specific Video</h1> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
