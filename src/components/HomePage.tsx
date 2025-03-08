// components/HomePage.jsx
// import React, { useState } from 'react';
// import JobList from './JobList';

// const HomePage = () => {
//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000", description: "Build responsive web applications using React. 3+ years of experience required." },
//     { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000", description: "Develop server-side logic and APIs using Node.js and Express. Knowledge of MongoDB required." },
//     { id: 3, title: "Product Manager", company: "Innovate Inc", location: "Lagos", salary: "₦500,000", description: "Lead product development initiatives and coordinate between design and engineering teams." },
//   ]);

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h2>Find Your Dream Job Today</h2>
//         <p>Browse through our curated list of job opportunities</p>
//       </div>
//       <div className="jobs-section">
//         <h3>Latest Job Listings</h3>
//         <JobList jobs={jobs} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// components/HomePage.tsx
// import React, { useState } from 'react';
// import JobList from './JobList';

// // Define job interface
// interface Job {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
//   description: string;
// }

// const HomePage: React.FC = () => {
//   const [jobs, setJobs] = useState<Job[]>([
//     { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000", description: "Build responsive web applications using React. 3+ years of experience required." },
//     { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000", description: "Develop server-side logic and APIs using Node.js and Express. Knowledge of MongoDB required." },
//     { id: 3, title: "Product Manager", company: "Innovate Inc", location: "Lagos", salary: "₦500,000", description: "Lead product development initiatives and coordinate between design and engineering teams." },
//   ]);

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h2>Find Your Dream Job Today</h2>
//         <p>Browse through our curated list of job opportunities</p>
//       </div>
//       <div className="jobs-section">
//         <h3>Latest Job Listings</h3>
//         <JobList jobs={jobs} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// src/components/HomePage.tsx
import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import { Job, getAllJobs, searchJobs } from '../data/JobData';

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading data from an API
    const loadJobs = () => {
      setIsLoading(true);
      setTimeout(() => {
        const allJobs = getAllJobs();
        setJobs(allJobs);
        setIsLoading(false);
      }, 500); // Simulate a small delay like a real API call
    };

    loadJobs();
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = searchJobs(searchTerm);
    setJobs(results);
  };

  const handleReset = () => {
    setSearchTerm('');
    setJobs(getAllJobs());
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>Find Your Dream Job Today</h2>
        <p>Browse through our curated list of job opportunities</p>
        
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search by job title, company, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
          {searchTerm && <button type="button" onClick={handleReset} className="reset-button">Reset</button>}
        </form>
      </div>
      
      <div className="jobs-section">
        <h3>Latest Job Listings</h3>
        
        {isLoading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <JobList jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default HomePage;