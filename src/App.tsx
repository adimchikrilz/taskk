// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.tsx - Main application component
// import React from 'react';
// import JobList from './components/JobList';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-blue-600 text-white p-4">
//         <div className="max-w-4xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Job Board</h1>
//           <nav>
//             <ul className="flex space-x-4">
//               <li><a href="/home" className="hover:text-blue-200">Home</a></li>
//               <li><a href="/post-job" className="hover:text-blue-200">Post a Job</a></li>
//               <li><a href="/about" className="hover:text-blue-200">About</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
      
//       <main>
//         <JobList />
//       </main>
      
//       <footer className="bg-gray-800 text-white p-4 mt-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <p>&copy; 2025 Job Board. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
// App.jsx - Main application with routing
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import PostJobPage from './components/PostJobPage';
// import AboutPage from './components/AboutPage';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <header className="header">
//           <div className="logo">
//             <h1>JobFinder</h1>
//           </div>
//           <nav className="nav">
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/post-job">Post a Job</Link></li>
//               <li><Link to="/about">About</Link></li>
//             </ul>
//           </nav>
//         </header>

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/post-job" element={<PostJobPage />} />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//         </main>

//         <footer className="footer">
//           <p>&copy; 2025 JobFinder. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;
// App.jsx - Fixed imports
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import PostJobPage from './components/PostJobPage';
// import AboutPage from './components/AboutPage';
// import './App.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <header className="header">
//           <div className="logo">
//             <h1>JobFinder</h1>
//           </div>
//           <nav className="nav">
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/post-job">Post a Job</Link></li>
//               <li><Link to="/about">About</Link></li>
//             </ul>
//           </nav>
//         </header>

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/post-job" element={<PostJobPage />} />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//         </main>

//         <footer className="footer">
//           <p>&copy; 2025 JobFinder. All rights reserved.</p>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
// App.tsx - TypeScript version
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
