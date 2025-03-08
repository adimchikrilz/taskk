// components/PostJobPage.jsx
// import React, { useState } from 'react';

// const PostJobPage = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     salary: '',
//     description: ''
//   });
  
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Job Posted:', formData);
//     setFormSubmitted(true);
    
//     // Reset form after submission
//     setTimeout(() => {
//       setFormData({
//         title: '',
//         company: '',
//         location: '',
//         salary: '',
//         description: ''
//       });
//       setFormSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div className="post-job-container">
//       <h2>Post a New Job</h2>
      
//       {formSubmitted ? (
//         <div className="success-message">
//           <p>Your job has been successfully posted!</p>
//         </div>
//       ) : (
//         <form className="job-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Job Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="company">Company Name</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="location">Location</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="salary">Salary</label>
//             <input
//               type="text"
//               id="salary"
//               name="salary"
//               value={formData.salary}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="description">Job Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="5"
//               required
//             ></textarea>
//           </div>
          
//           <button type="submit" className="submit-button">Post Job</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default PostJobPage;
import React, { useState } from 'react';

interface FormData {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

const PostJobPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Job Posted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        description: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="post-job-container">
      <h2>Post a New Job</h2>
      
      {formSubmitted ? (
        <div className="success-message">
          <p>Your job has been successfully posted!</p>
        </div>
      ) : (
        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Job Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">Post Job</button>
        </form>
      )}
    </div>
  );
};

export default PostJobPage;