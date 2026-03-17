import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <h1>
        Global Header
      </h1>

      <Outlet />
    </>
  );
}

export default RootLayout;
