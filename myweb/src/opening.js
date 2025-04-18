import React from "react";
import { useNavigate } from "react-router-dom";
import "./opening.css";

const jobs = [
  {
    title: "Site Engineer",
    location: "Rajkot, Gujarat",
    type: "Full-time",
    description:
      "Responsible for managing construction activities on-site and ensuring work quality and safety standards.",
  },
  {
    title: "Civil Supervisor",
    location: "Surat, Gujarat",
    type: "Contract",
    description:
      "Supervise construction site labor and coordinate with project managers and engineers for smooth execution.",
  },
  {
    title: "Project Manager",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    description:
      "Plan, coordinate, and oversee construction projects from start to finish, including budgeting and scheduling.",
  },
  {
    title: "Marketing",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    description:
      "Plan, coordinate, and oversee construction projects from start to finish, including budgeting and scheduling.",
  },
];

function JobOpenings() {
    const navigate = useNavigate();

  const handleApply = () => {
    navigate("/carrier");
  };
  return (
    <div className="job-container">
      <h2 className="job-title">Current Job Openings</h2>
      <div className="job-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p className="job-description">{job.description}</p>
            <button className="apply-btn" onClick={handleApply}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobOpenings;
