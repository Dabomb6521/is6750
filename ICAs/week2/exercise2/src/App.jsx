import JobCard from "./components/JobCard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { jobsData } from "./data";
function App() {
  return (
    <>
      <Header/>
      <JobCard {...jobsData[0]} />
      <JobCard {...jobsData[1]} />
      <JobCard {...jobsData[2]} />
      <Footer/>
    </>
  );
}

export default App;
