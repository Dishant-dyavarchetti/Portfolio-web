import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

// NOTE: Replace all placeholder contact information with your actual information
// Look for the "REPLACE WITH..." comments throughout this file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // REPLACE each of these objects with your actual contact information
  const contactMethods = [
    { 
      icon: <FaEnvelope className="text-[#64ffda] text-2xl" />, 
      title: 'Email',
      value: 'ddishantmsccs2023@gmail.com', // REPLACE WITH YOUR ACTUAL EMAIL
      link: 'mailto:ddishantmsccs2023@gmail.com' // REPLACE WITH YOUR ACTUAL EMAIL
    },
    { 
      icon: <FaPhone className="text-[#64ffda] text-2xl" />, 
      title: 'Phone',
      value: '+91 9106754206', // REPLACE WITH YOUR ACTUAL PHONE NUMBER
      link: 'tel:+919106754206' // REPLACE WITH YOUR ACTUAL PHONE NUMBER (NO SPACES OR SPECIAL CHARACTERS)
    },
    { 
      icon: <FaMapMarkerAlt className="text-[#64ffda] text-2xl" />, 
      title: 'Location',
      value: 'Ahmedabad, India', // REPLACE WITH YOUR ACTUAL LOCATION
      link: 'https://maps.google.com/?q=Ahmedabad,India' // REPLACE WITH YOUR ACTUAL LOCATION (URL ENCODED)
    },
    { 
      icon: <FaLinkedin className="text-[#64ffda] text-2xl" />, 
      title: 'LinkedIn',
      value: 'linkedin.com/in/dishant-dyavarchetti', // REPLACE WITH YOUR ACTUAL LINKEDIN USERNAME
      link: 'https://www.linkedin.com/in/dishant-dyavarchetti-8a269729a/' // REPLACE WITH YOUR ACTUAL LINKEDIN URL
    },
    { 
      icon: <FaGithub className="text-[#64ffda] text-2xl" />, 
      title: 'GitHub',
      value: 'github.com/Dishant-dyavarchetti', // REPLACE WITH YOUR ACTUAL GITHUB USERNAME
      link: 'https://github.com/Dishant-dyavarchetti' // REPLACE WITH YOUR ACTUAL GITHUB URL
    }
  ];

  return (
    <div ref={sectionRef} id="contact" className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[80px] relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#64ffda] rounded-full filter blur-[200px] opacity-10"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#4d9bff] rounded-full filter blur-[200px] opacity-10"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className={`transition-all duration-1000 transform 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold inline-block mb-4">
            Get In <span className="gradient-text">Touch</span>
            <div className="h-1 w-24 bg-gradient-to-r from-[#64ffda] to-[#4d9bff] mt-2"></div>
          </h2>
          <p className="text-[#8892b0] py-4 text-lg max-w-[600px]">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className={`transition-all duration-1000 transform 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}>
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl shadow-[#040c16]/50 h-full">
              <h3 className="text-2xl font-bold mb-6 text-[#ccd6f6]">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#8892b0] mb-2">Name</label>
                  <input
                    id="name"
                    className="w-full bg-[#0a192f] p-3 rounded-md border border-[#64ffda]/30 focus:border-[#64ffda] 
                      focus:outline-none text-[#ccd6f6] transition-all duration-300"
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#8892b0] mb-2">Email</label>
                  <input
                    id="email"
                    className="w-full bg-[#0a192f] p-3 rounded-md border border-[#64ffda]/30 focus:border-[#64ffda] 
                      focus:outline-none text-[#ccd6f6] transition-all duration-300"
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#8892b0] mb-2">Message</label>
                  <textarea
                    id="message"
                    className="w-full bg-[#0a192f] p-3 rounded-md border border-[#64ffda]/30 focus:border-[#64ffda] 
                      focus:outline-none text-[#ccd6f6] transition-all duration-300 h-36 resize-none"
                    placeholder="Your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary group self-start"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 transform 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}>
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl shadow-[#040c16]/50">
              <h3 className="text-2xl font-bold mb-6 text-[#ccd6f6]">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index} 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 py-2 px-3 rounded-md hover:bg-[#0a192f] transition-all duration-300 group"
                  >
                    <div className="mt-1 text-[#64ffda] group-hover:scale-110 transition-all duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-[#8892b0] text-sm">{method.title}</h4>
                      <p className="text-[#ccd6f6] font-medium group-hover:text-[#64ffda] transition-all duration-300">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-[#ccd6f6]">Let's Connect</h3>
                <p className="text-[#8892b0] mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/dishant-dyavarchetti-8a269729a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda] transition-all duration-300 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://github.com/Dishant-dyavarchetti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda] transition-all duration-300 text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;