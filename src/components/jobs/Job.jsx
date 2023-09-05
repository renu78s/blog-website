import React, { useEffect } from "react";

const Job = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">company name</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">job post</h6>
          <p className="card-text">details about job post ...</p>
          <a href="#" className="card-link">
            view details
          </a>
          <a href="#" className="card-link">
            Apply
          </a>
        </div>
      </div>
    </>
  );
};

export default Job;
