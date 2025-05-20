// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.jpeg';
import agcLogo from './assets/company_logo/girlscriptsoc_logo.jpeg';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/bebo_foundation.svg';
import csprepLogo from './assets/work_logo/cs_prep.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
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
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
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
      date: "January 2022 -  April 2025",
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
    {
      id: 1,
      img: agcLogo,
      role: "Full Stack developer",
      company: "GirlScript Summer of Code Internship",
      date: "April 2021 -  July 2021",
      desc: "Girlscript Summer Code Internship offers hands-on experience in full-stack development through open source contributions. Participants collaborate on real-world projects, enhance coding skills, and gain mentorship from experts, fostering community involvement and professional growth in a supportive environment. Ideal for aspiring developers eager to learn and contribute.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
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
        "The Bebo Foundation aims to create immediate community impact through education, digital literacy, and vocational training. In the short term, it is launching mobile computer labs and workshops to teach basic tech skills in underserved areas. It partners with schools for tutoring support and distributes essential learning materials. Women and youth are offered short vocational courses to boost employability. The foundation also runs health, hygiene, and nutrition awareness drives, alongside local clean-up and disaster-preparedness programs. These grassroots initiatives are designed to be cost-effective, scalable, and community-driven, paving the way for long-term empowerment and self-sufficiency.",
      // image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","CodeIgniter"],
      webapp: "https://www.bebofoundation.org/",
    },
    {
      id: 1,
      title: "Compliance",
      description:
        "This application is designed to help teams effectively manage and maintain compliance records for all members. It provides a centralized platform to track individual and team-level compliance status, ensuring that all regulatory or organizational requirements are consistently met. Team leads can monitor progress, identify non-compliant members, and take timely action to address gaps. The system supports automated reminders, document uploads, and status updates to streamline compliance workflows. By offering real-time visibility and structured recordkeeping, the application promotes accountability, reduces manual effort, and improves overall compliance management across the organization, making it easier to meet internal policies and external regulatory standards.",
      image: csprepLogo,
      tags: ["Javascript","React JS", "Material-UI","Redux Toolkit","Axois"],
    },
    {
      id: 2,
      title: "Emergency Response Team (ERT)",
      description:
        "This application was built to support leads and managers in coordinating teams remotely during emergency situations. It provides real-time notifications and alerts to ensure quick response and clear communication during critical events. I contributed to implementing task scheduling features, allowing teams to plan and assign responsibilities efficiently. My primary role involved backend development, where I designed and developed RESTful APIs using Laravel. These APIs supported task assignments, user roles, and notification logic. The application improved emergency preparedness by enabling structured response workflows and streamlined coordination across geographically distributed teams.",
      image: csprepLogo,
      tags: ["React JS", "HTML" ,"Material-UI","Laravel"],
    },
    {
      id: 3,
      title: "One-on-One",
      description:
        "At One-on-One, I was responsible for developing a user-centric dashboard that organized and displayed meeting data effectively. The dashboard featured sections like “My Meetings” and “Action Items,” allowing users to quickly review upcoming meetings and track follow-ups. I focused on building intuitive UI components, optimizing performance for seamless navigation, and implementing efficient state management to handle dynamic data updates. Collaborating closely with the product and design teams, I ensured that the solution aligned with user needs and business goals. This project significantly improved user productivity and engagement by simplifying access to important meeting insights and action points.",
      image: csprepLogo,
      tags: ["Javascript","React JS", "Material-UI","Redux Toolkit","Axois"],
    },
    
  ];  