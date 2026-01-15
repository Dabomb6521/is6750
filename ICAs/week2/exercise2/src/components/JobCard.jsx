import React from "react";

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  posted,
  description,
  requirements,
}) => {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <div className="company-name">{company}</div>
      <div className="job-meta">
        <span>📍 {location}</span>
        <span>💼 {type}</span>
        <span>🕒 {posted}</span>
      </div>
      <p className="job-snippet">{description}</p>
      <button className="apply-btn-sm">View Details</button>
    </div>
  );
};

export default JobCard;
