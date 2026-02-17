import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Layout = ({children}) => {
  return (
    <>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
