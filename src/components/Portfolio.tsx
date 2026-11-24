import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { projects, categories } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';
import CertificationsModal, { type Certification } from './CertificationsModal';

const Portfolio: React.FC = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCerts, setShowCerts] = useState(false);
  const skills = [
    { category: 'Infrastructure & Operations', items: ['IIS', 'Windows Server environments', 'PHP CLI', 'Troubleshooting'] },
    { category: 'Automation & Development Tools', items: ['SQL Server Agent', 'Git', 'Robot Framework', 'Selenium'] },
    { category: 'Programming & Query Languages', items: ['SQL', 'Python', 'PHP', 'C#', 'JavaScript', 'TypeScript'] },
    { category: 'Cloud Fundamentals', items: ['IaaS', 'PaaS', 'SaaS', 'Shared responsibility', 'Scalability'] },
    { category: 'Databases', items: ['Microsoft SQL Server', 'MySQL', 'Supabase', 'Firebase Firestore'] },
    { category: 'Web Technologies', items: ['PHP MVC', 'ASP.NET Core MVC', 'HTML', 'CSS', 'React', 'Express.js'] },
    { category: 'Networking & Security', items: ['Networking fundamentals', 'Network defense', 'Role-based access control'] },
    { category: 'Data Analysis & Reporting', items: ['Microsoft Excel', 'Power BI (Basic)', 'Tableau', 'R (RStudio)'] }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'auto' });
    setMobileMenuOpen(false);
  };

  const certifications: Certification[] = [
    { title: 'Describe Cloud Computing', issuer: 'Microsoft Learn — Training', year: '2026', credentialUrl: 'https://learn.microsoft.com/en-us/users/lawrencedural-1054/achievements/nqndl5uf' },
    { title: 'Describe the Benefits of Using Cloud Services', issuer: 'Microsoft Learn — Training', year: '2026', credentialUrl: 'https://learn.microsoft.com/en-us/users/lawrencedural-1054/achievements/u7ubdx83' },
    {
      title: 'Network Defense',
      issuer: 'Cisco Networking Academy',
      year: '2024', credentialUrl: 'https://www.credly.com/badges/dfd09611-57be-4bb3-815b-0a06489c8a07/linked_in_profile'
    },
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      issuer: 'Cisco Networking Academy',
      year: '2023', credentialUrl: 'https://www.credly.com/badges/f5ff5516-2e83-49db-89b6-5af0d740fc66'
    },
    {
      title: 'Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      year: '2023'
    }
  ];


  const navigation = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];
  const experience = [
    { title: 'Junior Web Developer', company: 'Joyson Safety Systems Philippines', date: 'Jun 2026 – Present', details: [
      'Develop and maintain enterprise applications across development and production environments using PHP MVC, ASP.NET Core MVC, C#, JavaScript, and SQL Server.',
      'Support application deployment, IIS configuration, PHP runtime upgrades, and application maintenance.',
      'Configure and troubleshoot scheduled processes using SQL Server Agent and PHP CLI.',
      'Investigate application, database, and server configuration issues through log analysis and technical troubleshooting.',
      'Develop and test SQL scripts to synchronize employee records across internal systems and maintain data consistency.',
      'Maintain role-based access controls, approval workflows, and reporting features to support operational requirements.' ] },
    { title: 'QA Automation Engineer Intern', company: 'Finastra', date: 'Dec 2025 – May 2026', details: [
      'Developed automated tests for banking applications using Robot Framework and Selenium.',
      'Performed manual, UI, and regression testing to evaluate application functionality and reliability.',
      'Documented software defects and collaborated with developers to support issue resolution.',
      'Used Git for source code management and version control.' ] },
    { title: 'IT Intern', company: 'Madison 88 Business Solutions Asia', date: 'Aug 2025 – Nov 2025', details: [
      'Developed a React, TypeScript, and Supabase application to track brand assignments across six factories.',
      'Worked on Excel and CSV import/export functionality using JavaScript, TypeScript, Express.js, and Supabase.',
      'Developed purchase order forms and generated PDF and Word exports to support operational processes.',
      'Used Git for source code management and version control.' ] },
    { title: 'Licensed Financial Advisor', company: 'Sun Life Philippines', date: 'Apr 2025 – Present', details: [
      'Manage client relationships and engage prospective customers to understand their financial needs and insurance requirements.',
      'Present and explain insurance products, coverage options, premiums, and benefits.',
      'Conduct prospecting, client follow-ups, and sales activities to develop business opportunities.' ] }
  ];
  return (
    <div className="portfolio-shell relative isolate min-h-screen bg-white text-zinc-900 dark:bg-[#151719] dark:text-zinc-100" data-theme={dark ? "dark" : "light"} style={{ backgroundColor: dark ? '#151719' : '#ffffff', color: dark ? '#f4f4f5' : '#18181b' }}>
      {/* A quiet, fading grid behind the introduction only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] md:h-[720px]"
        style={{
          backgroundImage: `linear-gradient(to right, ${dark ? 'rgba(255,255,255,0.035)' : 'rgba(24,24,27,0.045)'} 1px, transparent 1px), linear-gradient(to bottom, ${dark ? 'rgba(255,255,255,0.035)' : 'rgba(24,24,27,0.045)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)'
        }}
      />
      <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#151719]">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-6 py-4" aria-label="Main navigation">
          <a href="#home" className="font-semibold tracking-tight">LMD.</a>
          <div className="ml-auto flex items-center gap-2 md:order-last md:ml-5"><button type="button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-md p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">{dark ? <Sun size={20}/> : <Moon size={20}/>}</button><button type="button" className="md:hidden p-2" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={22}/> : <Menu size={22}/>}</button></div>
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-4 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}>
            {navigation.map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-left text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white">{item}</button>)}
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="portfolio-inner scroll-mt-24 grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px]">
          <div>
          <p className="mb-5 text-sm text-zinc-600 dark:text-zinc-400">Laguna, Philippines</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Lawrence Mark Dural</h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">Junior Web Developer · BS Information Technology</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">I develop and maintain business applications, work with databases, and automate internal processes. I'm currently learning more about cloud infrastructure and platform engineering.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300">View resume <ArrowUpRight className="inline" size={15}/></a>
            <a href="https://github.com/lawrencedural" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/lawrence-mark-dural-7b7187316/" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          </div>
          <figure className="mx-auto w-full max-w-[340px]">
            <img src="/grad-photo.jpg" alt="Lawrence at his De La Salle University graduation" className="block h-auto w-full rounded-lg" width={1056} height={1408} fetchPriority="high"/>
            <figcaption className="mt-2 text-xs text-zinc-500">Graduation · De La Salle University</figcaption>
          </figure>
        </section>
        <section id="about" className="portfolio-section scroll-mt-24"><div className="portfolio-inner">
          <h2 className="mb-6 text-2xl font-semibold">About me</h2>
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>I studied Information Technology at De La Salle University and currently work as a Junior Web Developer at Joyson Safety Systems Philippines.</p>
              <p>My work involves maintaining internal systems, troubleshooting application and database issues, and supporting scheduled jobs. Before joining Joyson, I interned at Finastra in QA automation and at Madison 88 in application development.</p>
            </div>
            <div className="portfolio-card p-5 space-y-5 text-sm self-start">
              <div><h3 className="mb-2 font-medium">Education</h3><p>De La Salle University</p><p className="text-zinc-600 dark:text-zinc-400">BS Information Technology · 2021–2026</p><p className="text-zinc-600 dark:text-zinc-400">College of Computer Studies · GPA 2.9</p></div>
              <div><p>Mapúa University</p><p className="text-zinc-600 dark:text-zinc-400">Science, Technology, Engineering, and Mathematics · 2019–2021</p></div>
              <button onClick={() => setShowCerts(true)} className="text-left text-zinc-700 dark:text-zinc-300 underline underline-offset-4 hover:text-zinc-950 dark:hover:text-white">View certifications & training ↗</button>
            </div>
          </div>
        </div>
        </section>
        <section id="experience" className="portfolio-section scroll-mt-24 portfolio-tinted"><div className="portfolio-inner">
          <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
          <div className="portfolio-timeline">
            {experience.map(job => <article key={job.title} className="portfolio-job grid gap-3 md:grid-cols-[180px_1fr]">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{job.date}</p>
              <div><h3 className="font-semibold">{job.title}</h3><p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{job.company}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
            </article>)}
          </div>
        </div>
        </section>
        <section id="projects" className="portfolio-section scroll-mt-24"><div className="portfolio-inner">
          <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
          <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">Capstone and selected internship work.</p>
          <div className="mb-6 flex flex-wrap gap-2 text-sm">{categories.map(category => <button key={category} onClick={() => setActiveFilter(category)} aria-pressed={activeFilter === category} className={activeFilter === category ? 'portfolio-filter is-active' : 'portfolio-filter'}>{category}</button>)}</div>
          <div className="grid gap-4 sm:grid-cols-2">{filteredProjects.map(project => <button key={project.title} onClick={() => setSelectedProject(project)} className="portfolio-card portfolio-project p-6 text-left flex flex-col">
            <div className="flex items-start justify-between gap-3"><h3 className="font-semibold">{project.title}</h3><ArrowUpRight size={17} className="shrink-0 text-zinc-600 dark:text-zinc-400"/></div>
            <p className="mt-1 text-xs text-zinc-500">{project.year} · {project.category}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{project.description}</p>
            <p className="mt-auto pt-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{project.technologies.join(' · ')}</p>
          </button>)}</div>
        </div>
        </section>
        <section id="skills" className="portfolio-section scroll-mt-24 portfolio-tinted"><div className="portfolio-inner">
          <h2 className="mb-7 text-2xl font-semibold">Technical skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map(group => <div key={group.category} className="portfolio-card p-5"><h3 className="mb-2 text-sm font-semibold">{group.category}</h3><ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">{group.items.map(item => <li key={item} className="portfolio-skill">{item}</li>)}</ul></div>)}</div>
        </div>
        </section>
        <section id="contact" className="portfolio-section scroll-mt-24"><div className="portfolio-inner">
          <div className="portfolio-contact"><h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Feel free to reach out about job opportunities or projects.</p>
          <a href="mailto:duralmacky@gmail.com" className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4">duralmacky@gmail.com</a><div className="mt-5 flex flex-wrap gap-5 text-sm"><a href="https://github.com/lawrencedural" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/lawrence-mark-dural-7b7187316/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div>
        </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800"><div className="mx-auto max-w-5xl px-6 py-6 text-xs text-zinc-500">© 2026 Lawrence Mark Dural · Built with React and Tailwind CSS</div></footer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>}
      {showCerts && <CertificationsModal certifications={certifications} onClose={() => setShowCerts(false)}/>}
    </div>
  );
};
export default Portfolio;
