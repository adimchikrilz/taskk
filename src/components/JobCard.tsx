// JobCard.tsx - Component for individual job listings
// import React, { useState } from 'react';
// import { Job } from './JobData';

// interface JobCardProps {
//   job: Job;
// }

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
//           <p className="text-gray-600">{job.company}</p>
//           <div className="flex items-center mt-2 text-gray-500">
//             <span className="mr-4">{job.location}</span>
//             <span className="font-medium text-green-600">{job.salary}</span>
//           </div>
//         </div>
//         <span className="text-sm text-gray-500">{job.posted}</span>
//       </div>
      
//       <button 
//         onClick={toggleDetails}
//         className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//       >
//         {showDetails ? "Hide Details" : "Show Details"}
//       </button>
      
//       {showDetails && (
//         <div className="mt-4 pt-4 border-t border-gray-200">
//           <p className="text-gray-700 mb-3">{job.description}</p>
          
//           {job.requirements && job.requirements.length > 0 && (
//             <>
//               <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
//               <ul className="list-disc pl-5 text-gray-600">
//                 {job.requirements.map((req, index) => (
//                   <li key={index}>{req}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // export default JobCard;
// import React, { useState } from 'react';

// // Job interface
// interface Job {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
//   description: string;
// }

// interface JobCardProps {
//   job: Job;
// }

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//   const [showDetails, setShowDetails] = useState<boolean>(false);

//   const toggleDetails = (): void => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="job-card">
//       <div className="job-card-header">
//         <h3>{job.title}</h3>
//         <div className="company-info">
//           <span>{job.company}</span>
//         </div>
//       </div>
      
//       <div className="job-card-basic-info">
//         <p><strong>Location:</strong> {job.location}</p>
//         <p><strong>Salary:</strong> {job.salary}</p>
//       </div>
      
//       <button 
//         className="details-button" 
//         onClick={toggleDetails}
//       >
//         {showDetails ? "Hide Details" : "Show Details"}
//       </button>
      
//       {showDetails && (
//         <div className="job-details">
//           <h4>Job Description</h4>
//           <p>{job.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobCard;

// // src/components/JobCard.tsx
// import React, { useState } from 'react';
// import { Job } from '../data/JobData';

// interface JobCardProps {
//   job: Job;
// }

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//   const [showDetails, setShowDetails] = useState<boolean>(false);

//   const toggleDetails = (): void => {
//     setShowDetails(!showDetails);
//   };

//   // Format date to a more readable format
//   const formatDate = (dateString?: string): string => {
//     if (!dateString) return 'Date not available';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-NG', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="job-card">
//       <div className="job-card-header">
//         <h3>{job.title}</h3>
//         <div className="company-info">
//           <span>{job.company}</span>
//           {job.datePosted && <p className="job-date">Posted: {formatDate(job.datePosted)}</p>}
//         </div>
//       </div>
      
//       <div className="job-card-basic-info">
//         <p><strong>Location:</strong> {job.location}</p>
//         <p><strong>Salary:</strong> {job.salary}</p>
//       </div>
      
//       <button 
//         className="details-button" 
//         onClick={toggleDetails}
//       >
//         {showDetails ? "Hide Details" : "Show Details"}
//       </button>
      
//       {showDetails && (
//         <div className="job-details">
//           <h4>Job Description</h4>
//           <p>{job.description}</p>
          
//           {job.requirements && job.requirements.length > 0 && (
//             <>
//               <h4>Requirements</h4>
//               <ul>
//                 {job.requirements.map((req, index) => (
//                   <li key={index}>{req}</li>
//                 ))}
//               </ul>
//             </>
//           )}
          
//           {job.benefits && job.benefits.length > 0 && (
//             <>
//               <h4>Benefits</h4>
//               <ul className="benefits-list">
//                 {job.benefits.map((benefit, index) => (
//                   <li key={index}>{benefit}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // export default JobCard;
// import React from 'react';
// import { Job } from '../data/JobData';

// interface JobCardProps {
//   job: Job;
//   isExpanded: boolean;
//   onToggleDetails: () => void;
// }

// const JobCard: React.FC<JobCardProps> = ({ job, isExpanded, onToggleDetails }) => {
//   // Format date to a more readable format
//   const formatDate = (dateString?: string): string => {
//     if (!dateString) return 'Date not available';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-NG', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="job-card">
//       <div className="job-card-header">
//         <h3>{job.title}</h3>
//         <div className="company-info">
//           <span>{job.company}</span>
//           {job.datePosted && <p className="job-date">Posted: {formatDate(job.datePosted)}</p>}
//         </div>
//       </div>
      
//       <div className="job-card-basic-info">
//         <p><strong>Location:</strong> {job.location}</p>
//         <p><strong>Salary:</strong> {job.salary}</p>
//       </div>
      
//       <button 
//         className="details-button" 
//         onClick={onToggleDetails}
//       >
//         {isExpanded ? "Hide Details" : "Show Details"}
//       </button>
      
//       {isExpanded && (
//         <div className="job-details">
//           <h4>Job Description</h4>
//           <p>{job.description}</p>
          
//           {job.requirements && job.requirements.length > 0 && (
//             <>
//               <h4>Requirements</h4>
//               <ul>
//                 {job.requirements.map((req, index) => (
//                   <li key={index}>{req}</li>
//                 ))}
//               </ul>
//             </>
//           )}
          
//           {job.benefits && job.benefits.length > 0 && (
//             <>
//               <h4>Benefits</h4>
//               <ul className="benefits-list">
//                 {job.benefits.map((benefit, index) => (
//                   <li key={index}>{benefit}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobCard;

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