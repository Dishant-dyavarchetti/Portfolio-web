import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[80px]">
      <div className="section-container">
        <div className={`max-w-[1000px] w-full mx-auto transition-all duration-1000 transform 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold inline-block mb-8">
            About <span className="gradient-text">Me</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#64ffda] to-[#4d9bff] mt-2"></div>
          </h2>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4 mt-12">
          <div className={`transition-all duration-1000 transform 
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-lg shadow-xl shadow-[#64ffda]/10 
                hover:shadow-[#64ffda]/20 transition-all duration-500 h-full">
              <div className="h-full bg-[#112240] p-8">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Who I Am</h3>
                <p className="text-lg text-[#8892b0]">
                  Hi, I'm Dishant. I'm a passionate full-stack developer who loves creating elegant solutions to complex problems.
                </p>
                <div className="mt-4 h-1 w-16 bg-[#64ffda]/50"></div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 transform 
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
              style={{ transitionDelay: '0.5s' }}>
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl shadow-[#64ffda]/10 
                hover:shadow-[#64ffda]/20 transition-all duration-500">
              <p className="text-[#8892b0] text-lg">
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations.
              </p>
              <p className="text-[#8892b0] text-lg mt-4">
                My expertise includes React, TypeScript, Node.js, and modern web development
                practices. I'm constantly learning new technologies to stay at the cutting edge
                of web development.
              </p>
            </div>
          </div>
        </div>
        
        <div className={`max-w-[1000px] w-full mx-auto mt-16 transition-all duration-1000 transform 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '0.7s' }}>
          <div className="bg-[#112240] p-8 rounded-lg shadow-xl shadow-[#64ffda]/10 
              hover:shadow-[#64ffda]/20 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-[#8892b0]">
              I started my coding journey with a passion for creating things that live on the internet.
              Fast-forward to today, I've worked on numerous projects that have helped me develop a
              deep understanding of software development principles and best practices.
            </p>
            <p className="text-[#8892b0] mt-4">
              What would you do if you had a software expert available at your fingertips? Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;