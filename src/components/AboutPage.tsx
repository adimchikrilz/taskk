// components/AboutPage.jsx
// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="about-container">
//       <h2>About JobFinder</h2>
      
//       <section className="about-section">
//         <h3>Our Mission</h3>
//         <p>
//           JobFinder aims to connect talented individuals with their dream jobs by providing
//           a simple, user-friendly platform for job seekers and employers to connect.
//         </p>
//       </section>
      
//       <section className="about-section">
//         <h3>Our Story</h3>
//         <p>
//           Founded in 2025, JobFinder was created to address the challenges many professionals
//           face when looking for new opportunities. We recognized the need for a streamlined
//           job search experience that focuses on quality over quantity.
//         </p>
//       </section>
      
//       <section className="about-section">
//         <h3>For Job Seekers</h3>
//         <p>
//           Browse through curated job listings from verified employers across various industries.
//           Our platform makes it easy to find positions that match your skills and career goals.
//         </p>
//       </section>
      
//       <section className="about-section">
//         <h3>For Employers</h3>
//         <p>
//           Post job openings and connect with qualified candidates quickly. Our simple posting
//           process ensures your job listings reach the right audience without unnecessary complexity.
//         </p>
//       </section>
      
//       <section className="about-section contact-info">
//         <h3>Contact Us</h3>
//         <p>Email: info@jobfinder.com</p>
//         <p>Phone: +234 123 456 7890</p>
//         <p>Address: 123 Tech Street, Lagos, Nigeria</p>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
// components/AboutPage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <h2>About JobFinder</h2>
      
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>
          JobFinder aims to connect talented individuals with their dream jobs by providing
          a simple, user-friendly platform for job seekers and employers to connect.
        </p>
      </section>
      
      <section className="about-section">
        <h3>Our Story</h3>
        <p>
          Founded in 2025, JobFinder was created to address the challenges many professionals
          face when looking for new opportunities. We recognized the need for a streamlined
          job search experience that focuses on quality over quantity.
        </p>
      </section>
      
      <section className="about-section">
        <h3>For Job Seekers</h3>
        <p>
          Browse through curated job listings from verified employers across various industries.
          Our platform makes it easy to find positions that match your skills and career goals.
        </p>
      </section>
      
      <section className="about-section">
        <h3>For Employers</h3>
        <p>
          Post job openings and connect with qualified candidates quickly. Our simple posting
          process ensures your job listings reach the right audience without unnecessary complexity.
        </p>
      </section>
      
      <section className="about-section contact-info">
        <h3>Contact Us</h3>
        <p>Email: info@jobfinder.com</p>
        <p>Phone: +234 123 456 7890</p>
        <p>Address: 123 Tech Street, Lagos, Nigeria</p>
      </section>
    </div>
  );
};

export default AboutPage;