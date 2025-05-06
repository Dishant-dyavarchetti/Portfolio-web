import { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full h-screen bg-[#0a192f] relative overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] bg-[#64ffda] rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] bg-[#4d9bff] rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col justify-center h-full relative z-10 pt-[80px] md:pt-0">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{ transitionDelay: '0.1s' }}>
          <p className="text-[#64ffda] font-medium">Hi, my name is</p>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{ transitionDelay: '0.3s' }}>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl font-bold text-[#ccd6f6] mt-2">Dishant</h1>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{ transitionDelay: '0.5s' }}>
          <h2 className="text-3xl xs:text-4xl sm:text-6xl font-bold gradient-text mt-2">I'm a Full Stack Developer.</h2>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{ transitionDelay: '0.7s' }}>
          <p className="text-[#8892b0] max-w-[700px] text-base sm:text-lg leading-relaxed backdrop-blur-sm 
              bg-[#112240]/30 py-5 px-5 sm:py-6 sm:px-6 rounded-lg mt-5 sm:mt-6 border border-[#64ffda]/10 mx-auto sm:mx-0">
            I specialize in building exceptional digital experiences with modern web technologies.
            <span className="block mt-2 sm:mt-3">
              Currently focused on creating responsive full-stack applications and exploring cutting-edge technologies
              to deliver innovative, user-centered solutions.
            </span>
          </p>
        </div>
        
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
             style={{ transitionDelay: '0.9s' }}>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            <Link to="/projects">
              <button className="btn-primary group text-sm sm:text-base py-2 sm:py-3">
                View Projects
                <span className="group-hover:rotate-90 duration-300 ml-2 sm:ml-3">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-[#64ffda] border-[#64ffda] group border-2 px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center 
                hover:bg-[#64ffda]/10 transition-all duration-300 rounded-md font-medium text-sm sm:text-base">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;