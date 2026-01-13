import { jobsData } from "./data-1.js";
import JobCard from './components/JobCard'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

function App() {
  

  return (
    <>
      <Header />
      <JobCard {...jobsData[0]}/>
      <JobCard {...jobsData[1]}/>
      <JobCard {...jobsData[2]}/>
      <JobCard {...jobsData[3]}/>
      <JobCard {...jobsData[4]}/>
      <JobCard {...jobsData[5]}/>
      <Footer />
    </>
  )
}

export default App
