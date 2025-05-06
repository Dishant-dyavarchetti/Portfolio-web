import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Dishant's Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;