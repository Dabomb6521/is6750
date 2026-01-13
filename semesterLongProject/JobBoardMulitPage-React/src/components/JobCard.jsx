const JobCard = ({ title, company, location, type }) => {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <div className="company-name">{company}</div>
      <div className="job-meta">
        <span>📍 {location}</span>
        <span>💼 {type}</span>
        <span>🕒 2 days ago</span>
      </div>
      <p className="job-snippet">
        We are looking for a skilled Frontend Developer to join our team. You
        will be responsible for buildi...
      </p>
      <button className="apply-btn-sm">View Details</button>
    </div>
  );
};

export default JobCard;
