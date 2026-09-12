import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Code2, BriefcaseBusiness, Mail, ArrowUpRight, Download, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import './styles.css';

const projects = [
  { title: 'UniVault', kicker: 'Distributed Cloud Storage Aggregator', description: 'A provider-agnostic storage aggregator pooling free-tier cloud accounts into one unified file manager, with chunked uploads, retry handling and smart provider routing.', stack: 'Java 17 · Spring Boot · PostgreSQL · JWT', link: 'https://github.com/Jaydeep2009/UniVault' },
  { title: 'GateKeeper', kicker: 'API Gateway Proxy Platform', description: 'A multi-user Spring Boot gateway routing third-party API calls through generated proxy URLs, backed by JWT auth, encrypted credentials, per-user rate limiting and request logging.', stack: 'Java · Spring Boot · REST APIs · JWT', link: 'https://github.com/Jaydeep2009/GateKeeper' },
  { title: 'Aimwise', kicker: 'AI-Powered Goal Planning App', description: 'An Android app that turns user goals into personalized day-wise roadmaps using LLM integration, Firebase authentication and real-time goal tracking.', stack: 'Kotlin · Jetpack Compose · Node.js · Firebase', link: 'https://github.com/Jaydeep2009/Aimwise' }
];

const skills = ['Java','Spring Boot','REST APIs','Microservices','PostgreSQL','MongoDB','JavaScript','Kotlin','Jetpack Compose','Node.js','JWT','OAuth2','Distributed Systems','System Design','DSA','Git'];

function App(){
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = async () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) {
      try { await video.play(); } catch (_) {}
    }
  };

  return <div className="site">
    <nav className="nav">
      <a href="#top" className="brand">JG<span>.</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      <a className="navcta" href="mailto:jaydeepgaikwad9890@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
    </nav>

    <main id="top">
      <section className="hero section-red">
        <div className="hero-grid grain">
          <div className="hero-copy">
            <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow">COMPUTER ENGINEER · BACKEND DEVELOPER</motion.p>
            <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}}><span>HEY,</span> I'M<br/>JAYDEEP<span>.</span></motion.h1>
            <p className="hero-sub">I build backend systems that are secure, distributed, and practical — from API gateways to unified cloud storage.</p>
            <div className="hero-actions"><a href="#projects" className="btn dark">View my work <ArrowUpRight size={18}/></a><a href="/resume.pdf" className="btn light"><Download size={18}/> Resume</a></div>
            <div className="hero-meta"><span>FINAL YEAR · BE COMPUTER ENGINEERING</span><span>PUNE, INDIA</span></div>
          </div>
          <div className="hero-media-wrap">
            <div className="media-card">
              <video ref={videoRef} src="/intro.mp4" autoPlay muted loop playsInline preload="metadata" />
              <button className="audio-toggle" onClick={toggleAudio} aria-label={muted ? 'Turn video sound on' : 'Mute video'} title={muted ? 'Turn sound on' : 'Mute'}>
                {muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}<span>{muted ? 'SOUND OFF · TAP' : 'SOUND ON'}</span>
              </button>
              <div className="media-caption">JAYDEEP / BACKEND ENGINEER</div>
            </div>
            <div className="sticker sticker-one">JAVA<br/>SPRING</div><div className="sticker sticker-two">560+<small>DSA PROBLEMS</small></div>
          </div>
        </div>
        <div className="wave white"></div>
      </section>

      <section id="about" className="about section-white section-pad"><div className="section-label">01 / ABOUT</div><div className="about-grid"><h2>Hello<span>!</span></h2><div className="about-text"><p className="lead">I'm a Computer Engineering undergraduate who enjoys building things that work beyond the demo.</p><p>My focus is backend development with Java and Spring Boot, alongside Android development with Kotlin and Jetpack Compose. I've worked in production code, shipped features, and built systems around distributed storage, authentication, rate limiting, and real-time data.</p><p>I’ve solved <strong>560+ DSA problems</strong> and I like taking messy engineering problems and turning them into clean, dependable systems.</p></div></div></section>

      <section id="skills" className="section-black section-pad skills"><div className="section-label light">02 / TOOLBOX</div><div className="skills-head"><h2>MY<br/><span>SKILLS</span><b>!</b></h2><p>Technologies I use to move from an idea to a working product.</p></div><div className="skill-cloud">{skills.map((s,i)=><motion.div key={s} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.025}} className="skill-pill">{s}</motion.div>)}</div></section>

      <section id="work" className="section-red section-pad work"><div className="section-label">03 / EXPERIENCE</div><div className="work-layout"><div><div className="work-year">SEP 2025 — FEB 2026</div><h2>Java Developer<br/><em>Intern</em></h2><p className="company">GENZOPIA SOLUTIONS</p></div><div className="work-card"><p>Worked on backend and Android features in a production codebase, resolving <strong>20+ bug tickets</strong> with reviewed changes merged into the live release branch.</p><p>Implemented Firebase Authentication and Firestore for <strong>1,000+ active users</strong>, improving latency by <strong>30%</strong> through query and listener optimizations.</p></div></div><div className="wave black"></div></section>

      <section id="projects" className="section-white section-pad projects"><div className="section-label">04 / SELECTED WORK</div><div className="projects-heading"><h2>BUILT TO<br/><span>SHIP.</span></h2><p>Projects where systems thinking meets real implementation.</p></div><div className="project-list">{projects.map((p,i)=><motion.article className="project-card" key={p.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="project-num">0{i+1}</div><div className="project-main"><p className="project-kicker">{p.kicker}</p><h3>{p.title}</h3><p>{p.description}</p><span className="stack">{p.stack}</span></div><a href={p.link} target="_blank" rel="noreferrer" className="icon-link"><ExternalLink size={20}/></a></motion.article>)}</div></section>

      <section className="section-black section-pad proof"><div className="proof-inner"><div><div className="section-label light">05 / NUMBERS</div><h2>PROOF<br/><span>POINTS.</span></h2></div><div className="stats"><div><strong>560+</strong><span>DSA problems solved</span></div><div><strong>100+</strong><span>LLM / E2E test runs</span></div><div><strong>1K+</strong><span>active users supported</span></div><div><strong>4</strong><span>cloud providers in UniVault</span></div></div></div></section>

      <section id="contact" className="contact section-red section-pad"><div className="section-label">06 / CONTACT</div><div className="contact-content"><h2>LET'S BUILD<br/><span>SOMETHING.</span></h2><p>Open to software engineering opportunities in backend and distributed systems.</p><a className="contact-mail" href="mailto:jaydeepgaikwad9890@gmail.com">jaydeepgaikwad9890@gmail.com <ArrowUpRight/></a><div className="socials"><a href="https://github.com/Jaydeep2009" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2/></a><a href="https://linkedin.com/in/jaydeep9890" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness/></a><a href="mailto:jaydeepgaikwad9890@gmail.com" aria-label="Email"><Mail/></a></div></div></section>
    </main>
    <footer><span>© 2026 JAYDEEP GAIKWAD</span><span>BUILT WITH JAVA STATE OF MIND.</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
