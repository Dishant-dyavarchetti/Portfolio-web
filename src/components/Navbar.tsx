import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setNav(!nav);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setNav(false);
  }, [location]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  return (
    <div className={`fixed w-[1250px] h-[80px] flex justify-between items-center px-6 
      ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg' : 'bg-[#0a192f]'} 
      text-gray-300 z-50 transition-all duration-300`}>
      <div>
        <Link to="/">
          <h1 className="font-bold text-2xl">
            <span className="gradient-text">{"<"}</span>
            Dishant
            <span className="gradient-text">{" />"}</span>
          </h1>
        </Link>
      </div>

      {/* Menu - moved to the right side */}
      <ul className="hidden md:flex space-x-1 justify-end ml-auto">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Skills', path: '/skills' },
          { name: 'Projects', path: '/projects' },
          { name: 'Contact', path: '/contact' },
        ].map((item) => (
          <li key={item.name} className="group px-1">
            <Link 
              to={item.path} 
              className={`px-3 py-2 inline-block rounded-md hover:bg-[#112240] transition-all duration-300 
                ${location.pathname === item.path ? 'text-[#64ffda] bg-[#112240]' : 'text-gray-300'}`}
            >
              {item.name}
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 
                ${location.pathname === item.path ? 'bg-[#64ffda]' : 'bg-[#64ffda]'}`}></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 cursor-pointer p-2">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} className="text-[#64ffda]" />}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center
        transition-all duration-300 ease-in-out z-40
        ${!nav ? 'opacity-0 pointer-events-none translate-x-full' : 'opacity-100 translate-x-0'}`}>
        <ul className="w-full text-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' },
          ].map((item, index) => (
            <li key={item.name} 
                className={`py-5 text-3xl fade-in border-b border-[#112240]`} 
                style={{ animationDelay: `${index * 0.1}s` }}>
              <Link 
                onClick={handleClick} 
                to={item.path} 
                className={`w-full block py-2 hover:text-[#64ffda] duration-300 
                  ${location.pathname === item.path ? 'text-[#64ffda]' : 'text-gray-300'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;