import { NavLink, Outlet } from "react-router";
import MainNavigation from "../componenets/Layout/MainNavigation";

function RootLayout() {
  return (
    <>
      <h1>Global Header</h1>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
