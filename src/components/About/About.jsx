import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';

const About = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Front End Developer',
    'React.js Specialist',
    'JavaScript Developer (Frontend)'
  ];
  
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      // Typing animation
      if (currentRole.length < roles[currentRoleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentRole(roles[currentRoleIndex].substring(0, currentRole.length + 1));
        }, 100); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause after typing complete
      }
    } else {
      // Erasing animation
      if (currentRole.length > 0) {
        timeout = setTimeout(() => {
          setCurrentRole(currentRole.substring(0, currentRole.length - 1));
        }, 50); // Erasing speed
      } else {
        // Move to next role
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentRole, currentRoleIndex, isTyping, roles]);
  
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am Swapnil Banta
          </h1>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight h-12">
            <span className="text-white">I am a </span>
            <span className="relative">
              {currentRole}
              <span className={`absolute bottom-0 left-0 h-1 w-full bg-[#8245ec] ${!isTyping ? 'opacity-0' : 'opacity-100'}`}></span>
            </span>
          </h3>
          <br/>
          {/* About Me Paragraph */}
          <p className=" text-base sm:text-lg md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed">
            I'm a passionate Front-End Developer with 3+ years of experience crafting fast, responsive, 
            and intuitive web applications. My expertise lies in React.js, Redux (including Redux Toolkit), 
            Context API, and TypeScript for building clean, maintainable interfaces. With strong foundations 
            in HTML5, CSS3, and modern JavaScript, I create visually appealing designs with seamless functionality. 
            My additional experience with PHP allows me to effectively bridge front-end and back-end development.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yWyky9sFGy0pY6Prd2kDb0fYl3BBlRPW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        
        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Swapnil Banta"
              className="w-full h-full rounded-full object-cover shadow-xl shadow-purple-900/50"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
              }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;