import { use, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/MainArea";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileContext from "./store/ProfileContext";
import {RouterContext} from "./store/RouterContext";

function App() {
  const {page} = use(RouterContext);
  const [history, setHistory] = useState([]);

  return (
    <>
      
        <ProfileContext
          value={{ profileHistory: history, setProfilehistory: setHistory }}
        >
          <Header />
          <MainArea>
            {page === "home" && <Home />}
            {page === "profile" && <Profile />}
          </MainArea>
          <Footer />
        </ProfileContext>
    </>
  );
}

export default App;
