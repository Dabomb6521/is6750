import { useState } from "react";
import JobCard from "../components/JobCard";
import JobResultsArea from "../components/JobResultsArea";

import { jobsData } from "../data";

const Home = () => {
  const [jobs, setJobs] = useState(jobsData);

  function handleDeleteEvent(jobId) {
    setJobs((jobsList) => jobsList.filter((job) => job.id != jobId));
  }

  return (
    <>
      {jobs.length > 0 && (
        <JobResultsArea num={jobs.length}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onClick={() => handleDeleteEvent(job.id)}
            />
          ))}
        </JobResultsArea>
      )}
      {jobs.length <= 0 && <h1>No jobs to display</h1>}
    </>
  );
};

export default Home;
