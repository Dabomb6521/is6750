import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/MainArea";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [page, setPage] = useState("profile");

  return (
    <>
      <Header updatePage={setPage} />
      <MainArea>
        {page === "home" && <Home />}
        {page === "profile" && <Profile />}
      </MainArea>
      <Footer />
    </>
  );
}

export default App;
