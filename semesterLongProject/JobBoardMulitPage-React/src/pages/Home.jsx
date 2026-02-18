import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import JobResultsArea from "../components/JobResultsArea";
import { deleteJob, updateJob } from "../utils/jobUtils";
import axios from "axios";
import { getJobs } from "../utils/jobUtils";
import { CircularProgress, Grid } from "@mui/material";

const backendBaseURL = "http://localhost:5001";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoadingJobs(true);
      setError(null);
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        setError(error);
      }
      setLoadingJobs(false);
    };

    getData();
  }, []);

  async function handleDeleteEvent(jobId) {
    setJobs((jobsList) => jobsList.filter((job) => job.id != jobId));
    try {
      const data = await deleteJob(jobId);
    } catch (error) {
      setJobs(jobs);
    }
  }

  async function handleApplyEvent(jobId) {
    setJobs(jobsList => jobsList.map(val=>val.id=== jobId?{...val,applied:true}:
      
      
      {...val}))
    try {
      const data = await updateJob(jobId, {applied: true});
    } catch (error) {
      setJobs(jobs)
    }
  }

  // axios.patch("http://localhost");

  return (
    <>
      <Grid container>
        <Grid size={12} alignItems={"center"}>
          {loadingJobs && <CircularProgress />}
          {error && <h1>{error.message}</h1>}
        </Grid>
      </Grid>
      {jobs.length > 0 && (
        <JobResultsArea num={jobs.length}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onDelete={() => handleDeleteEvent(job.id)}
              onApply={() => handleApplyEvent(job.id)}
              applied={job.applied} 
            />
          ))}
        </JobResultsArea>
      )}
      {jobs.length <= 0 && <h1>No jobs to display</h1>}
    </>
  );
};

export default Home;
