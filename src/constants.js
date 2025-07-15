// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import webverseLogo from './assets/company_logo/webverse_logo.jpeg';
import agcLogo from './assets/company_logo/girlscriptsoc_logo.jpeg';
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

import csprepLogo from './assets/work_logo/cs_prep.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Jenkis', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Front End Developer",
      company: "Bebo Technologies",
      date: "January 2022 -  May 2025",
      desc: "Skilled frontend developer with 3+ years of experience building responsive, user-friendly web applications using modern technologies like React, JavaScript (ES6+), HTML5, and CSS3. Proficient in creating clean, maintainable code, optimizing performance, and collaborating with design and backend teams to deliver seamless user experiences. Experienced with state management, API integration, and version control using Git.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Next Js",
        "Redux Toolkit",
        "PHP"
      ],
    },
  
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
export const projects = [
  {
    id: 0,
    title: "Bebo foundation",
    description:
      "The Bebo Foundation helps communities by focusing on education, digital skills, and job training. It runs mobile computer labs and workshops to teach basic tech skills in poor areas. The foundation works with schools for tutoring and gives out study materials. It also offers short job-oriented courses for women and youth. Along with this, they spread awareness about health, hygiene, and nutrition, and lead clean-up and disaster-prep programs. Their goal is to make a big impact in a low-cost way and help communities become self-reliant.",
    // image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API","CodeIgniter"],
    webapp: "https://www.bebofoundation.org/",
  },
  {
    id: 1,
    title: "Compliance",
    description:
      "This app helps teams keep track of who is following the rules and completing required tasks. It shows the status of each team member’s compliance and lets team leads see who still needs to complete things. It sends reminders, allows document uploads, and updates statuses. This makes the whole process easier, faster, and more organized. It helps reduce mistakes and ensures everyone is meeting company or government rules.",
    image: csprepLogo,
    tags: ["Javascript","React JS", "Material-UI","Redux Toolkit","Axois"],
  },
  {
    id: 2,
    title: "Emergency Response Team (ERT)",
    description:
      "This app helps team leaders manage people during emergencies, even when working remotely. It sends real-time alerts and messages to make sure everyone responds quickly. I worked mostly on the backend and built APIs using Laravel for things like task assignment, roles, and notifications. The app helps teams stay organized and ready in emergencies by giving them a clear plan to follow.",
    image: csprepLogo,
    tags: ["React JS", "HTML" ,"Material-UI","Laravel"],
  },
  {
    id: 3,
    title: "One-on-One",
    description:
      "In this project, I built a dashboard to help users manage their meetings. It shows upcoming meetings and action items in one place. I made sure the design was simple and easy to use, with smooth performance and fast updates. I worked with designers and product teams to match user needs. The dashboard made it easier for people to stay organized and follow up on tasks after meetings.",
    image: csprepLogo,
    tags: ["Javascript","React JS", "Material-UI","Redux Toolkit","Axois"],
  },
  {
    id: 4,
    title: "FinTrack – Personal Finance Dashboard",
    description:
      "FinTrack is a personal finance management app that helps users track their income, expenses, savings, and budgets all in one place. I developed the frontend using React JS and Redux Toolkit for efficient state management. The app features data visualization with charts, category-wise filtering, and monthly summaries. It also supports transaction history, goal tracking, and smart spending tips. FinTrack enables users to make informed decisions about their money through a clean, responsive UI and real-time data updates.",
    // image: financeLogo,
    tags: ["React JS", "Redux Toolkit", "JavaScript", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Scramble Integration",
    description: "Used Scramble, an OpenAPI (Swagger) documentation generator for Laravel, to automatically generate API documentation without manual PHPDoc annotations. The project involved integrating a Laravel backend with a React frontend to expose and consume RESTful APIs. I developed secure API endpoints for authentication and user data management, enabling seamless data flow and dynamic rendering on the frontend. The focus was on clean API design, robust error handling, performance optimization, and efficient state management.",
    // image: scrambleLogo,
    tags: ["Laravel", "React JS", "API", "JavaScript", "Axios", "Bootstrap"],
  }
];

