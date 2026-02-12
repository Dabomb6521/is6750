import MessagesArea from "./components/layout/MessageArea"
import Sidebar from "./components/layout/Sidebar"
import TopBar from "./components/layout/TopBar"
import TypingBar from "./components/layout/TypingBar"


function App() {

  return (
    <>
    {/* Set up the App Layout using components */}
      <Sidebar/>
      <TopBar/>
      <MessagesArea/>
      <TypingBar/>
    </>
  )
}

export default App
