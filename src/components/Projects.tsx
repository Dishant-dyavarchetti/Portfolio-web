import { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Projects = () => {
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

  const projects = [
    {
      title: "Organic Farmer Marketplace",
      description: "A marketplace platform that connects organic farmers directly with consumers, eliminating middlemen and ensuring fair prices.",
      features: [
        "Organic farmer verification system",
        "QR code generator for product authenticity",
        "Product origin tracking",
        "Secure payment processing",
        "User-friendly marketplace interface"
      ],
      technologies: "Django, MySQL, HTML, TailwindCSS , JavaScript",
      // TODO: Replace with your actual GitHub repository URL when available
      githubUrl: "https://github.com/Dishant-dyavarchetti/Farmer-Marketplace-40",
      delay: "0.3s"
    },
    {
      title: "Real-time Fraud Detection System",
      description: "An AI-powered system that detects fraudulent transactions in real-time, helping financial institutions prevent fraud.",
      features: [
        "Real-time transaction monitoring",
        "AI model trained on diverse transaction datasets",
        "Anomaly detection based on transaction amount",
        "Low false positive rate",
        "Detailed fraud analysis dashboard"
      ],
      technologies: "Python, NextJS, React(TypeScript), MongoDB(Atlas cloud DB), TailwindCSS",
      // TODO: Replace with your actual GitHub repository URL when available
      githubUrl: "https://github.com/Dishant-dyavarchetti/Hack-NU-Thon-2025",
      delay: "0.5s"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website to showcase my skills and projects.",
      features: [
        "Smooth animations and transitions",
        "Responsive design for all devices",
        "Modern UI with clean aesthetics",
        "Optimized performance",
        "Intuitive user experience"
      ],
      technologies: "React, TypeScript, Tailwind CSS, Vite",
      // IMPORTANT: Update this with your actual portfolio GitHub repository URL
      githubUrl: "https://github.com/Dishant-dyavarchetti/Portfolio-web",
      delay: "0.7s"
    }
  ];

  return (
    <div ref={sectionRef} id="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20">
      <div className="section-container">
        <div className={`transition-all duration-1000 transform 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold inline-block mb-8">
            My <span className="gradient-text">Projects</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#64ffda] to-[#4d9bff] mt-2"></div>
          </h2>
          <p className="py-4 text-[#8892b0] text-lg">Check out some of my recent work</p>
        </div>

        {/* Project Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-[#112240] rounded-lg shadow-lg shadow-[#040c16]/30 hover:shadow-[#64ffda]/20 
                p-6 card-hover transition-all duration-1000 transform 
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: project.delay }}
            >
              <div className="w-full">
                <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                  {project.title}
                </h2>
                <p className="text-[#8892b0] mb-4">
                  {project.description}
                </p>
                <h3 className="text-xl font-semibold text-[#64ffda] mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-[#8892b0] mb-4 pl-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-[#64ffda] mb-2">Technologies:</h3>
                <p className="text-[#8892b0] mb-6">
                  {project.technologies}
                </p>
                <div className="flex justify-start pt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary group"
                  >
                    <FaGithub className="mr-2" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;