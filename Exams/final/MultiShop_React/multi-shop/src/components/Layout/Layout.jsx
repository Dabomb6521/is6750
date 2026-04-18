import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Layout = ({children, pathname}) => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Breadcrumb pathname={pathname} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
