import './App.css'
import Sidebar from './components/layout/Sidebar'

function App() {

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <h1>Slack Clone</h1>
        </div>
      </div>
    </>
  )
}

export default App
