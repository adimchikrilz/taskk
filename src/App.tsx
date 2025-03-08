import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostJobPage from './components/PostJobPage';
import AboutPage from './components/AboutPage';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <h1>FindAJob</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/post-job">Post a Job</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2025 JobFinder. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
