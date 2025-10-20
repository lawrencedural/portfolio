import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X, Code, Briefcase, Award, Sparkles, ArrowRight } from 'lucide-react';
import { projects, categories } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';
import CertificationsModal, { Certification } from './CertificationsModal';

const Portfolio: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCerts, setShowCerts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C/C++', 'Kotlin', 'PHP'] },
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Firebase', 'Supabase', 'PostgreSQL'] },
    { category: 'Hardware & IoT', items: ['Arduino', 'ESP32', 'OpenCV', 'YOLO'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Android Studio', 'MongoDB'] }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const certifications: Certification[] = [
    {
      title: 'CCNA: Network Defense',
      issuer: 'Cisco Networking Academy',
      year: '2024'
    },
    {
      title: 'CCNA: Enterprise Networking',
      issuer: 'Cisco Networking Academy',
      year: '2023'
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      year: '2023'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Subtle gradient background */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-300">
              LMD
            </a>
            
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800"
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-slideDown">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fadeInUp">
            <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium px-4 py-2 rounded-full bg-blue-950/30 border border-blue-800">
              <Sparkles size={14} />
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp text-white leading-tight" style={{ animationDelay: '0.1s' }}>
            Lawrence Mark Dural
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 opacity-0 animate-fadeInUp font-light" style={{ animationDelay: '0.2s' }}>
            IT Undergraduate
          </p>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeInUp text-base leading-relaxed" style={{ animationDelay: '0.3s' }}>
            I build scalable web applications and IoT solutions for enterprise clients. Currently at Madison 88 Business Solutions Asia, working on systems that serve 365+ users across multiple countries.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: 'https://github.com/lawrencedural' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/lawrence-mark-dural-7b7187316/' },
              { icon: Mail, href: 'mailto:duralmacky@gmail.com' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 text-base leading-relaxed">
                I'm an <span className="text-blue-400 font-semibold">Information Technology undergraduate</span> at De La Salle University with a passion for building innovative solutions. My experience spans full-stack web development, enterprise systems, and IoT integration.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Currently working at <span className="text-blue-400 font-semibold">Madison 88 Business Solutions Asia</span>, where I develop enterprise-level systems serving 365+ users across the US, Indonesia, and Philippines.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                I led hardware development for <span className="text-blue-400 font-semibold">EduSpace</span>, a capstone project combining ESP32, OpenCV, and Firebase for real-time occupancy detection—demonstrating my ability to seamlessly merge hardware and software.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-950/50 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-white font-medium">De La Salle University</p>
                <p className="text-slate-400 text-sm">BS Information Technology</p>
                <p className="text-slate-500 text-sm">2021 - Present</p>
              </div>
              
              <button onClick={() => setShowCerts(true)} className="w-full text-left group bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-950/50 rounded-lg">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    CCNA: Network Defense (2024)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    CCNA: Enterprise Networking (2023)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    CCNA: Introduction to Networks (2023)
                  </li>
                </ul>
                <p className="mt-4 text-blue-300 text-sm">Click to view all</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-slate-400 max-w-xl">A snapshot of roles and responsibilities from recent years.</p>
          </div>
          <ol className="relative border-s border-slate-800 md:pl-8">
            {[{
              title: 'IT Intern',
              company: 'Madison 88, Ltd.',
              year: 'Present'
            },{
              title: 'BS Information Technology (Started)',
              company: 'De La Salle University, Manila',
              year: '2021'
            }].map((job, i) => (
              <li key={i} className="pb-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-950"></span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-semibold">{job.title}</h3>
                      {job.year && (
                        <span className="text-xs px-2 py-1 rounded-md bg-blue-950/40 text-blue-300 border border-blue-800">{job.year}</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{job.company}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              A selection of projects demonstrating my expertise in web development, IoT systems, and enterprise software.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 text-left cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-950/50 text-blue-300">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Certifications Modal */}
      {showCerts && (
        <CertificationsModal certifications={certifications} onClose={() => setShowCerts(false)} />
      )}

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Technologies and tools I use to build scalable, efficient solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm hover:text-white transition-colors">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '5+', label: 'Years Experience', icon: Briefcase },
              { number: '10+', label: 'Projects Completed', icon: Code },
              { number: '3', label: 'CCNA Certifications', icon: Award }
            ].map((stat, i) => (
              <div 
                key={i}
                className="group text-center p-8 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:duralmacky@gmail.com" 
              className="group bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Mail className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-400 text-sm">duralmacky@gmail.com</p>
            </a>
            
            <a 
              href="tel:+639565931004" 
              className="group bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Phone className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-400 text-sm">+956 593 1004</p>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:duralmacky@gmail.com' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center bg-slate-950">
        <p className="text-slate-500 text-sm">
          © 2025 Lawrence Mark Dural. Built with React and Tailwind CSS.
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;