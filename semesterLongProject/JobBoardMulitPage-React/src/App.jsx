import { use, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/MainArea";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileContext from "./store/ProfileContext";
import { RouterContext } from "./store/RouterContext";
import { useBackendSync } from "./hooks/useBackendSync";


function App() {

const {page} = use(RouterContext);
// const [history,setHistory] = useState([]);
const [history,loading,error,deleteFunc,addFunc] = useBackendSync("http://localhost:5001/profiles");
// const [history,loading,error] = useBackendSync("http://localhost:5001/profiles")

  return (
    <>
    
    <ProfileContext value={{profileHistory:history,loading,error,deleteFunc,addFunc}}>
      <Header/>
      <MainArea>
        {page==="home"&&<Home/>}
        {page==="profile"&&<Profile/>}
      </MainArea>
      <Footer />
    </ProfileContext>

    </>
  );
}

export default App;
