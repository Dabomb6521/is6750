import { NavLink, Outlet } from "react-router";

function MainNavigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/playlist">Playlists</NavLink>
        </li>
        <li>
          <NavLink to="/video">Video</NavLink>
        </li>
      </ul>
    </>
  );
}

export default MainNavigation;
