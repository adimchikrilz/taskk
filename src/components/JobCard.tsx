import React from 'react';
import { Job } from '../data/JobData';

interface JobCardProps {
  job: Job;
  isExpanded: boolean;
  onToggleDetails: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isExpanded, onToggleDetails }) => {
  // Format date to a more readable format
  const formatDate = (dateString?: string): string => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`job-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="job-card-header">
        <h3>{job.title}</h3>
        <div className="company-info">
          <span>{job.company}</span>
          {job.datePosted && <p className="job-date">Posted: {formatDate(job.datePosted)}</p>}
        </div>
      </div>
      
      <div className="job-card-basic-info">
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
      </div>
      
      <button 
        className="details-button" 
        onClick={onToggleDetails}
      >
        {isExpanded ? "Hide Details" : "Show Details"}
      </button>
      
      {isExpanded && (
        <div className="job-details">
          <h4>Job Description</h4>
          <p>{job.description}</p>
          
          {job.requirements && job.requirements.length > 0 && (
            <>
              <h4>Requirements</h4>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </>
          )}
          
          {job.benefits && job.benefits.length > 0 && (
            <>
              <h4>Benefits</h4>
              <ul className="benefits-list">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;