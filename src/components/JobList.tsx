// JobList.tsx - Component to display all job listings
// import React from 'react';
// import JobCard from './JobCard';
// import { jobs } from './JobData';

// const JobList: React.FC = () => {
//   return (
//     <div className="max-w-4xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h1>
      
//       {jobs.length > 0 ? (
//         <div>
//           <p className="text-gray-600 mb-6">Showing {jobs.length} job opportunities</p>
//           {jobs.map(job => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-10">
//           <p className="text-xl text-gray-600">No jobs available at the moment.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default JobList;
// import React from 'react';
// import JobCard from './JobCard';

// // Job interface
// interface Job {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
//   description: string;
// }

// interface JobListProps {
//   jobs: Job[];
// }

// const JobList: React.FC<JobListProps> = ({ jobs }) => {
//   if (!jobs || jobs.length === 0) {
//     return (
//       <div className="no-jobs-message">
//         <p>No jobs available at the moment.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="job-list">
//       {jobs.map(job => (
//         <JobCard key={job.id} job={job} />
//       ))}
//     </div>
//   );
// };

// export default JobList;

// // src/components/JobList.tsx
// import React from 'react';
// import JobCard from './JobCard';
// import { Job } from '../data/JobData';

// interface JobListProps {
//   jobs: Job[];
// }

// const JobList: React.FC<JobListProps> = ({ jobs }) => {
//   if (!jobs || jobs.length === 0) {
//     return (
//       <div className="no-jobs-message">
//         <p>No jobs available matching your search criteria.</p>
//         <p>Try adjusting your search or check back later for new opportunities.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="job-list">
//       {jobs.map(job => (
//         <JobCard key={job.id} job={job} />
//       ))}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import JobCard from './JobCard';
// import { Job } from '../data/JobData';

// interface JobListProps {
//   jobs: Job[];
// }

// const JobList: React.FC<JobListProps> = ({ jobs }) => {
//   const [expandedJobId, setExpandedJobId] = useState<string | number | null>(null);

//   const handleToggleDetails = (jobId: string | number) => {
//     // If the clicked job is already expanded, close it
//     // Otherwise, open the clicked job and close any previously open job
//     setExpandedJobId(prevExpandedId => 
//       prevExpandedId === jobId ? null : jobId
//     );
//   };

//   if (!jobs || jobs.length === 0) {
//     return (
//       <div className="no-jobs-message">
//         <p>No jobs available matching your search criteria.</p>
//         <p>Try adjusting your search or check back later for new opportunities.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="job-list">
//       {jobs.map(job => (
//         <JobCard 
//           key={job.id}
//           job={job}
//           isExpanded={expandedJobId === job.id}
//           onToggleDetails={() => handleToggleDetails(job.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default JobList;
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