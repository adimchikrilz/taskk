// Define the Job interface
export interface Job {
  id: string | number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  datePosted?: string;
  requirements?: string[];
  benefits?: string[];
}

// Export the jobs array
export const jobsData: Job[] = [
  { 
    id: 1, 
    title: "Frontend Developer", 
    company: "Tech Corp", 
    location: "Remote", 
    salary: "₦400,000", 
    description: "Build responsive web applications using React. 3+ years of experience required.",
    datePosted: "2025-02-15",
    requirements: [
      "3+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management (Redux, Context API)",
      "Understanding of responsive design principles"
    ],
    benefits: [
      "Flexible working hours",
      "Health insurance",
      "Annual company retreat",
      "Professional development budget"
    ]
  },
  { 
    id: 2, 
    title: "Backend Engineer", 
    company: "Dev Solutions", 
    location: "Enugu", 
    salary: "₦300,000", 
    description: "Develop server-side logic and APIs using Node.js and Express. Knowledge of MongoDB required.",
    datePosted: "2025-02-20",
    requirements: [
      "2+ years of experience with Node.js",
      "Experience with MongoDB or other NoSQL databases",
      "Understanding of RESTful API design",
      "Knowledge of authentication and security best practices"
    ],
    benefits: [
      "Remote work options",
      "Competitive salary",
      "Paid time off",
      "Team bonding activities"
    ]
  },
  { 
    id: 3, 
    title: "Product Manager", 
    company: "Innovate Inc", 
    location: "Lagos", 
    salary: "₦500,000", 
    description: "Lead product development initiatives and coordinate between design and engineering teams.",
    datePosted: "2025-02-25",
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Experience with agile methodologies"
    ],
    benefits: [
      "Leadership development opportunities",
      "Performance bonuses",
      "Health and wellness program",
      "Collaborative work environment"
    ]
  },
  { 
    id: 4, 
    title: "UI/UX Designer", 
    company: "Creative Solutions", 
    location: "Abuja", 
    salary: "₦350,000", 
    description: "Create user-centered designs for web and mobile applications. Experience with Figma required.",
    datePosted: "2025-03-01",
    requirements: [
      "Portfolio demonstrating UI/UX projects",
      "Proficiency in Figma and Adobe Creative Suite",
      "Understanding of user-centered design principles",
      "Experience conducting user research and usability testing"
    ],
    benefits: [
      "Creative work environment",
      "Latest design tools and resources",
      "Professional growth opportunities",
      "Flexible schedule"
    ]
  },
  { 
    id: 5, 
    title: "DevOps Engineer", 
    company: "CloudTech", 
    location: "Remote", 
    salary: "₦450,000", 
    description: "Manage cloud infrastructure and CI/CD pipelines. Experience with AWS and Docker required.",
    datePosted: "2025-03-03",
    requirements: [
      "3+ years of DevOps experience",
      "Proficiency with AWS or other cloud platforms",
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD practices and tools"
    ],
    benefits: [
      "Work from anywhere policy",
      "Continuous learning stipend",
      "Competitive compensation package",
      "Modern tech stack"
    ]
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "TechSolutions Nigeria",
    location: "Lagos, Hybrid",
    salary: "₦550,000",
    description: "Develop and maintain web applications using React and Node.js. Collaborate with cross-functional teams to deliver high-quality software.",
    datePosted: "2025-03-01",
    requirements: [
      "4+ years of web development experience",
      "Strong proficiency in JavaScript, React, and Node.js",
      "Experience with RESTful APIs and database design",
      "Knowledge of Git and version control practices"
    ],
    benefits: [
      "Flexible working hours",
      "Health insurance",
      "Professional development opportunities",
      "Annual team retreats"
    ]
  },
  
  {
    id: 7,
    title: "Data Scientist",
    company: "FinTech Innovations",
    location: "Abuja",
    salary: "₦620,000",
    description: "Apply machine learning and statistical techniques to analyze financial data and deliver actionable insights for business growth.",
    datePosted: "2025-03-02",
    requirements: [
      "3+ years experience in data science or related field",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning libraries like TensorFlow or PyTorch",
      "Strong background in statistical analysis"
    ],
    benefits: [
      "Remote work options",
      "Performance bonuses",
      "Modern equipment allowance",
      "Comprehensive health coverage"
    ]
  },
  {
    id: 8,
  title: "Technical Writer",
  company: "DocuTech Systems",
  location: "Lagos, Remote",
  salary: "₦420,000",
  description: "Create clear and comprehensive technical documentation for software products. Work with development teams to understand complex systems and translate technical concepts for various audiences.",
  datePosted: "2025-03-04",
  requirements: [
    "3+ years of technical writing experience",
    "Strong English writing and editing skills",
    "Experience with documentation tools (Markdown, Confluence, etc.)",
    "Ability to understand technical concepts and explain them clearly"
  ],
  benefits: [
    "100% remote position",
    "Flexible working hours",
    "Professional development budget",
    "Monthly internet allowance"
  ]
},
  
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    location: "Kano",
    salary: "₦580,000",
    description: "Monitor and protect organization systems from security threats. Implement security measures and respond to incidents.",
    datePosted: "2025-03-02",
    requirements: [
      "4+ years in information security",
      "Relevant certifications (CISSP, CEH, or equivalent)",
      "Experience with security tools and frameworks",
      "Knowledge of network security protocols"
    ],
    benefits: [
      "Professional certification support",
      "Health and wellness program",
      "Competitive salary structure",
      "Career advancement opportunities"
    ]
  },
  
  {
    id: 10,
    title: "Product Manager",
    company: "InnovateTech",
    location: "Enugu, Hybrid",
    salary: "₦600,000",
    description: "Lead product development from conception to launch. Work with stakeholders to define product vision and roadmap.",
    datePosted: "2025-03-03",
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and leadership abilities"
    ],
    benefits: [
      "Leadership development program",
      "Profit sharing opportunities",
      "Comprehensive health benefits",
      "Flexible work arrangements"
    ]
  }
];

// Function to get all jobs
export const getAllJobs = (): Job[] => {
  return jobsData;
};

// Function to get a job by id
export const getJobById = (id: number): Job | undefined => {
  return jobsData.find(job => job.id === id);
};

// Function to search jobs by title or company
export const searchJobs = (query: string): Job[] => {
  const lowercaseQuery = query.toLowerCase();
  return jobsData.filter(job => 
    job.title.toLowerCase().includes(lowercaseQuery) || 
    job.company.toLowerCase().includes(lowercaseQuery) ||
    job.location.toLowerCase().includes(lowercaseQuery)
  );
};