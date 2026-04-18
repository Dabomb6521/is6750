import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Outlet, useNavigation } from "react-router";
import Spinner from "../../utils/spinner";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopBar />
      <NavBar />
      <Breadcrumb />
      {navigation.state !== "idle" && <Spinner />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
