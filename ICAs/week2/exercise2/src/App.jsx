import {useState} from 'react';
import JobCard from "./components/JobCard";
import JobResultsArea from "./components/JobResultsArea";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/MainArea";
import { jobsData } from "./data";
function App() {
  const [jobs, setJobs] = useState(jobsData);

  return (
    <>
      <Header />
      <MainArea>
        <JobResultsArea num={jobsData.length}>
          {jobs.map((jobItem) => (
            <JobCard key={jobItem.id} {...jobItem} />
          ))}
        </JobResultsArea>
      </MainArea>
      <Footer />
    </>
  );
}

export default App;
