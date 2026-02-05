import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import JobResultsArea from "../components/JobResultsArea";
import axios from "axios";

import { jobsData } from "../data";
import { getJobs } from "../utils/jobUtils";

const backendBaseURL = 'http://localhost:5001'

const Home = () => {
  const [jobs, setJobs] = useState(jobsData);

  useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      setJobs(data);
    }
    
    getData();
  }, []);

  function handleDeleteEvent(jobId) {
    axios.delete(`${backendBaseURL}/jobs`).then(({data})=>setJobs(data));
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
