import { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC, SiNextdotjs, SiFlask, SiMongodb, SiMysql, SiDjango, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { icon: <SiC size={50} className="mx-auto" />, name: "C" },
    { icon: <SiCplusplus size={50} className="mx-auto" />, name: "C++" },
    { icon: <FaHtml5 size={50} className="mx-auto text-[#E34F26]" />, name: "HTML" },
    { icon: <FaCss3Alt size={50} className="mx-auto text-[#1572B6]" />, name: "CSS" },
    { icon: <FaJs size={50} className="mx-auto text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTypescript size={50} className="mx-auto text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaReact size={50} className="mx-auto text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs size={50} className="mx-auto" />, name: "Next.js" },
    { icon: <SiNodedotjs size={50} className="mx-auto text-[#339933]" />, name: "Node.js" },
    { icon: <SiTailwindcss size={50} className="mx-auto text-[#06B6D4]" />, name: "Tailwind" },
    { icon: <SiDjango size={50} className="mx-auto text-white" />, name: "Django" },
    { icon: <SiFlask size={50} className="mx-auto text-white" />, name: "Flask" },
    { icon: <SiMysql size={50} className="mx-auto text-[#4479A1]" />, name: "MySQL" },
    { icon: <SiMongodb size={50} className="mx-auto text-[#47A248]" />, name: "MongoDB" },
    { icon: <FaGitAlt size={50} className="mx-auto text-[#F05032]" />, name: "Git" },
    { icon: <FaGithub size={50} className="mx-auto" />, name: "GitHub" },
  ];

  return (
    <div ref={sectionRef} id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20">
      {/* Container */}
      <div className="section-container">
        <div className={`transition-all duration-1000 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold inline-block mb-8">
            My <span className="gradient-text">Skills</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#64ffda] to-[#4d9bff] mt-2"></div>
          </h2>
          <p className="py-4 text-[#8892b0] text-lg">These are the technologies I've worked with</p>
        </div>

        <div className={`w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8 transition-all duration-1000 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '0.3s' }}>
          
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-lg shadow-[#040c16]/50 hover:shadow-[#64ffda]/20 
                card-hover flex flex-col justify-center items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#64ffda]">
                {skill.icon}
              </div>
              <p className="my-4 font-medium">{skill.name}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Skills;