import React, { useState } from 'react';
import JobCard from './JobCard';
import { Job } from '../data/JobData';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [expandedJobId, setExpandedJobId] = useState<string | number | null>(null);

  const handleToggleDetails = (jobId: string | number) => {
    // If the clicked job is already expanded, close it
    // Otherwise, open the clicked job and close any previously open job
    setExpandedJobId(prevExpandedId => 
      prevExpandedId === jobId ? null : jobId
    );
  };

  if (!jobs || jobs.length === 0) {
    return (
      <div className="no-jobs-message">
        <p>No jobs available matching your search criteria.</p>
        <p>Try adjusting your search or check back later for new opportunities.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard 
          key={job.id}
          job={job}
          isExpanded={expandedJobId === job.id}
          onToggleDetails={() => handleToggleDetails(job.id)}
        />
      ))}
    </div>
  );
};

export default JobList;