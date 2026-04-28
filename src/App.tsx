import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Download,
  GraduationCap,
  LockKeyhole,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react'
import './App.css'

const linkedInUrl = 'https://www.linkedin.com/in/suproteek-banerjee'
const emailAddress = 'banerjeesuproteek2804@gmail.com'

type Project = {
  name: string
  type: 'ventures' | 'cyber' | 'research'
  signal: string
  description: string
  metric: string
}

const stats = [
  { value: '8', label: 'Published research papers' },
  { value: '100+', label: 'Students coached' },
  { value: '20+', label: 'Working professionals mentored' },
  { value: '4', label: 'Founder/operator systems' },
]

const experiences = [
  {
    company: 'Campus Link',
    role: 'Co-Founder & CTO/COO',
    period: 'July 2025 - Present',
    location: 'Global / Campus network',
  },
  {
    company: 'One Fourth Finance',
    role: 'Founder & CEO',
    period: 'August 2024 - Present',
    location: 'Chicago, IL',
  },
  {
    company: 'ShaberiScript',
    role: 'Founder',
    period: 'April 2024 - Present',
    location: 'Chicago, IL',
  },
  {
    company: 'Cybersecurity and Infrastructure Security Agency',
    role: 'Digital Forensics Analyst',
    period: 'July 2024 - December 2024',
    location: 'Chicago, IL',
  },
  {
    company: 'University of Illinois Chicago',
    role: 'Production Manager',
    period: 'September 2023 - December 2023',
    location: 'Chicago, IL',
  },
  {
    company: 'Goldman Sachs',
    role: 'Financial Software Engineer Intern',
    period: 'January 2023 - November 2023',
    location: 'Tokyo, Japan',
  },
  {
    company: 'University of Illinois Chicago',
    role: 'Control Desk Manager / Technical Specialist',
    period: 'January 2023 - March 2023',
    location: 'Chicago, IL',
  },
  {
    company: 'Microsoft',
    role: 'System Engineering Intern',
    period: 'February 2022 - September 2022',
    location: 'Tokyo, Japan',
  },
  {
    company: 'Google',
    role: 'Software Engineer Intern',
    period: 'May 2021 - October 2021',
    location: 'New York, United States',
  },
]

const education = [
  {
    school: 'Purdue University',
    degree: 'Bachelor of Science, Cybersecurity',
    period: 'January 2026 - December 2026',
  },
  {
    school: 'Illinois Institute of Technology',
    degree: 'Bachelor of Science, Computer Science',
    period: 'April 2025 - December 2025',
  },
  {
    school: 'City Colleges of Chicago - Harold Washington College',
    degree: 'Associate in Engineering Science (AES), Computer Science',
    period: 'January 2024 - April 2025',
  },
  {
    school: 'University of Illinois Chicago',
    degree: "Bachelor's degree (BS), Mathematics and Computer Science",
    period: 'August 2022 - December 2023',
  },
  {
    school: 'St. Aloysius Sr. Sec School',
    degree: 'Senior and High School Education, Computational Mathematics',
    period: 'July 2010 - May 2022',
  },
]

const credentials = [
  'FinTech',
  'Start-up Ventures',
  'Early Stage Ventures',
  'Japanese (Elementary)',
  'Northeastern Illinois University 2024 Eagle Hack Fest | Coding Challenge',
  'Software Engineer',
  'Frontend Developer (React)',
  'Fundamentals of Project Management',
  'Python (Basic)',
]

const projects: Project[] = [
  {
    name: 'One Fourth Finance',
    type: 'ventures',
    signal: 'Founder and entrepreneur',
    description:
      'A finance venture built around clarity, independence, and practical decision systems.',
    metric: 'Venture',
  },
  {
    name: 'CampusLink',
    type: 'ventures',
    signal: 'Founder',
    description:
      'A campus network concept for connecting students, resources, and opportunity paths.',
    metric: 'Network',
  },
  {
    name: 'Upword Labs Career Academy',
    type: 'ventures',
    signal: 'Founder',
    description:
      'A career empowerment academy helping students and professionals sharpen execution.',
    metric: '100+ coached',
  },
  {
    name: 'Cybersecurity Operations',
    type: 'cyber',
    signal: 'Former cybersecurity officer',
    description:
      'Government-grade security mindset shaped by work associated with CISA and mission-critical systems.',
    metric: 'CISA',
  },
  {
    name: 'Academic Publishing Track',
    type: 'research',
    signal: 'Young academia publisher',
    description:
      'PhD-dissertation-level research output with eight published papers and a bias toward rigorous thinking.',
    metric: '8 papers',
  },
  {
    name: 'Elite Operator DNA',
    type: 'research',
    signal: 'Ex Google, Microsoft, Goldman Sachs intern',
    description:
      'Cross-domain exposure across engineering, product, finance, and high-performance teams.',
    metric: 'Global',
  },
]

const filters = [
  { id: 'all', label: 'All Systems' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'cyber', label: 'Cyber' },
  { id: 'research', label: 'Research' },
] as const

const timeline = [
  {
    title: 'Aloytian Standard',
    body: 'Built a profile around elite qualifications, founder discipline, and academic depth.',
    icon: BadgeCheck,
  },
  {
    title: 'Security Layer',
    body: 'Former cybersecurity officer with government-grade operational instincts.',
    icon: ShieldCheck,
  },
  {
    title: 'Founder Layer',
    body: 'Creator of One Fourth Finance, Upword Labs Career Academy, and CampusLink.',
    icon: Rocket,
  },
  {
    title: 'Mentor Layer',
    body: 'Coached students and professionals globally across career, confidence, and execution.',
    icon: UsersRound,
  },
]

function App() {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')

  const visibleProjects = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.type === filter),
    [filter],
  )

  return (
    <main className="portfolio-shell">
      <div className="noise" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="topbar" aria-label="Primary">
        <a className="brand" href="#home" aria-label="Suproteek Banerjee home">
          <Orbit size={18} />
          <span>SB.OS</span>
        </a>
        <nav>
          <a href="#profile">Profile</a>
          <a href="#systems">Systems</a>
          <a href="#resume">Resume</a>
          <a href="#trajectory">Trajectory</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={15} />
              Founder / Cybersecurity / Research / Career Systems
            </p>
            <h1>
              <span>Suproteek</span>
              <span>Banerjee</span>
            </h1>
            <p className="hero-lede">
              A high-velocity builder blending cybersecurity discipline,
              published academic research, founder energy, and global coaching
              into one focused operator profile.
            </p>

            <div className="hero-actions" aria-label="Profile actions">
              <a className="primary-action" href="#systems">
                View systems
                <ChevronRight size={18} />
              </a>
              <a className="secondary-action" href={linkedInUrl} target="_blank" rel="noreferrer">
                Go to profile
                <ArrowUpRight size={18} />
              </a>
              <a
                className="icon-action"
                href="/assets/suproteek-profile.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download resume PDF"
                title="Download resume PDF"
              >
                <Download size={19} />
              </a>
            </div>
          </div>

          <div className="portrait-module" id="profile">
            <div className="portrait-frame">
              <img
                src="/assets/suproteek-portrait.png"
                alt="Suproteek Banerjee professional portrait"
              />
            </div>
            <div className="identity-panel">
              <span>Identity matrix</span>
              <strong>Ex-Google / Ex-Microsoft / Ex-Goldman Sachs intern</strong>
            </div>
          </div>
        </div>

        <div className="stats-strip" aria-label="Profile statistics">
          {stats.map((stat) => (
            <div className="stat-tile" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="signal-band" aria-label="Core profile signals">
        <div className="signal">
          <GraduationCap size={24} />
          <span>PhD-dissertation-level research output</span>
        </div>
        <div className="signal">
          <LockKeyhole size={24} />
          <span>Former cybersecurity officer, Government of USA / CISA</span>
        </div>
        <div className="signal">
          <Building2 size={24} />
          <span>Founder of One Fourth Finance, Upword Labs, CampusLink</span>
        </div>
      </section>

      <section className="systems-section" id="systems">
        <div className="section-heading">
          <p className="eyebrow">
            <BrainCircuit size={15} />
            Active Systems
          </p>
          <h2>Portfolio command deck</h2>
        </div>

        <div className="filter-row" aria-label="Project filters">
          {filters.map((item) => (
            <button
              className={filter === item.id ? 'active' : ''}
              type="button"
              key={item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.metric}</span>
                <ArrowUpRight size={18} />
              </div>
              <h3>{project.name}</h3>
              <p className="project-signal">{project.signal}</p>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trajectory-section" id="trajectory">
        <div className="section-heading">
          <p className="eyebrow">
            <Target size={15} />
            Trajectory
          </p>
          <h2>From credentials to execution</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => {
            const Icon = item.icon
            return (
              <article className="timeline-item" key={item.title}>
                <Icon size={22} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="section-heading">
          <p className="eyebrow">
            <BriefcaseBusiness size={15} />
            Experience Stack
          </p>
          <h2>Operator history from startup floor to security arena</h2>
        </div>
        <div className="resume-grid">
          {experiences.map((item) => (
            <article className="resume-card" key={`${item.company}-${item.role}`}>
              <div>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <small>{item.location}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <p className="eyebrow">
            <GraduationCap size={15} />
            Education + Credentials
          </p>
          <h2>Academic signal, certifications, and technical range</h2>
        </div>
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </article>
            ))}
          </div>
          <div className="credential-panel">
            <h3>Skills / Languages / Certifications</h3>
            <div className="credential-cloud">
              {credentials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <BriefcaseBusiness size={15} />
            Direct Contact
          </p>
          <h2>LinkedIn profile and email channel are live.</h2>
        </div>
        <div className="contact-actions">
          <a className="primary-action" href={linkedInUrl} target="_blank" rel="noreferrer">
            Go to profile
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-action" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
          <a className="icon-action" href="/assets/suproteek-profile.pdf" target="_blank" rel="noreferrer" aria-label="Download resume PDF" title="Download resume PDF">
            <Download size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
