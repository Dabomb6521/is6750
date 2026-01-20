import { useState } from "react";
import JobCard from "./components/JobCard";
import JobResultsArea from "./components/JobResultsArea";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/MainArea";
import { jobsData } from "./data";
function App() {
  const [jobs, setJobs] = useState(jobsData);

  const handleClick = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
  };

  return (
    <>
      <Header />
      <MainArea>
        {jobs.length === 0 ? (
          <h1>No jobs to display</h1>
        ) : (
          <JobResultsArea num={jobs.length}>
            {jobs.map(job => (
              <JobCard
                key={job.id}
                {...job}
                onClick={() => handleClick(job.id)}
              />
            ))}
          </JobResultsArea>
        )}
      </MainArea>
      <Footer />
    </>
  );
}

export default App;
