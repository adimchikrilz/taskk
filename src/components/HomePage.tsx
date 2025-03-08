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