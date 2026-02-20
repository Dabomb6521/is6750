// import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import JobResultsArea from "../components/JobResultsArea";
// import axios from "axios"
// import { deleteJob, getJobs, updateJob } from "../utils/jobUtils";
import { CircularProgress, Grid } from "@mui/material";
import { useBackendSync } from "../hooks/useBackendSync";


const backendBaseURL = "http://localhost:5001/jobs"

const Home = () => {
  const [jobs, loadingJobs, error] = useBackendSync(backendBaseURL)


  async function handleDeleteEvent(jobId) {
    // setJobs((jobsList) => jobsList.filter((job) => job.id != jobId));
    // try {
    //   const data = await deleteJob(jobId);
    // } catch (err) {
    //   setJobs(jobs)
    // }
  }

  async function handleAppplyEvent(jobId) {
    // setJobs(jobsList=>jobsList.map(val=>val.id===jobId?{...val,applied:true}:{...val}))
    // try {
    //   const data = await updateJob(jobId,{applied:true});
    // } catch (err) {
    //   setJobs(jobs)
    // }
  }

  return (
    <>
      {<Grid container>
        <Grid size={12} alignItems={"center"}>
          {loadingJobs && <CircularProgress />}
          {error && <h1>{error.message}</h1>}
        </Grid>
      </Grid>}
      {jobs.length > 0 && !error && (
        <JobResultsArea num={jobs.length}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onDelete={() => handleDeleteEvent(job.id)}
              onApply={()=>handleAppplyEvent(job.id)}
              applied={job.applied}
            />
          ))}
        </JobResultsArea>
      )}
      {jobs.length <= 0 && !loadingJobs && <h1>No jobs to display</h1>}
    </>
  );
};

export default Home;
