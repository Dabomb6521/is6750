import React from "react";
import { Grid, Button } from "@mui/material";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  posted,
  description,
  requirements,
  onDelete,
  onApply,
  applied
}) => {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <div className="company-name">{company}</div>
      <div className="job-meta">
        <span>📍 {location}</span>
        <span>💼 {type}</span>
        <span>🕒 {posted}</span>
        {applied?<span><Check/></span>:<></>}
      </div>
      <p className="job-snippet">{description}</p>
      <Grid container spacing={2}>
        <Button color="primary" variant="outlined">
          View Details
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={onDelete}
          startIcon={<DeleteForeverOutlined />}
        >
          Delete
        </Button>
        <Button color="secondary" variant="outlined" onClick={onApply}>
          Apply
        </Button>
      </Grid>
    </div>
  );
};

export default JobCard;