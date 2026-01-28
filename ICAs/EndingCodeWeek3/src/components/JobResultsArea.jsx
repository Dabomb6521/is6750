

const JobResultsArea = ({ children, num }) => {
  return (
    <div className="job-results-area">
      <div className="results-header">
        <h3 id="resultCount">Showing {num} Jobs</h3>
        <div className="sort-options">
          <label htmlFor="sortSelect">Sort by:</label>
          <select id="sortSelect">
            <option value="newest">Newest</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
      </div>
      <div id="jobList" className="job-list">
        {children}
      </div>
    </div>
  );
};

export default JobResultsArea;
