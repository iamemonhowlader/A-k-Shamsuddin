import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Construction, 
  Globe, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  HardHat,
  Trophy,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Directorate', href: '#experience' },
    { name: 'Mega Projects', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Credentials', href: '#education' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 nav-blur' : 'py-8 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">A.K. SHAMSUDDIN</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Senior Executive Engineer</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-text-dim hover:text-white transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-smart btn-primary text-xs py-2">CONTACT BRIEF</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border py-10 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white uppercase">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-smart btn-primary justify-center">CONTACT BRIEF</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Executive Leadership in Infrastructure</span>
              <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] text-gradient">
                ENGINEERING <br />
                <span className="text-accent-gradient inline-block">THE NATION'S</span> <br />
                LANDSCAPE
              </h1>
              <p className="text-xl text-text-dim max-w-2xl mb-12 leading-relaxed">
                Project Director with a legacy of 35+ years in civil engineering. Specializing in mega-bridge construction, multi-billion taka project management, and institutional leadership within the Roads and Highways Department.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <a href="#projects" className="btn-smart btn-primary px-8 py-4 text-lg">
                  VIEW PORTFOLIO <ArrowUpRight size={20} />
                </a>
                <div className="flex items-center gap-4 text-text-dim">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-light flex items-center justify-center">
                        <Construction size={18} className="text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold tracking-wide">300+ Professionals Managed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border border-border shadow-[0_0_100px_rgba(59,130,246,0.15)] bg-surface"
            >
              <img src="/profile.png" alt="A.K. Shamsuddin Ahmed" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-bg via-bg/40 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white">A.K. Shamsuddin Ahmed</h3>
                        <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Superintending Engineer</p>
                    </div>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-bg transform -rotate-12 border-4 border-white/20">
                        <ShieldCheck size={32} />
                    </div>
                  </div>
              </div>
            </motion.div>
            
            {/* Engineering Floaties */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 hidden lg:block"
            >
                <div className="smart-card py-4 px-6 rounded-2xl border-primary/30">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Status</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-white">Active Mega Projects</span>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
    const projects = [
      {
        id: "MKB-01",
        name: "Kewatkhali Bridge",
        role: "Project Director",
        specs: "320m Steel Arch / 5+ Major Components",
        image: "/bridge.png",
        budget: "3300 Cr BDT",
        donor: "AIIB Supported"
      },
      {
        id: "DCH-04",
        name: "Dhaka-Chittagong 4-Lane",
        role: "Project Manager",
        specs: "45km Strategic Highway Corridor",
        image: "https://images.unsplash.com/photo-1545143877-4e736244383a?auto=format&fit=crop&q=80&w=800",
        budget: "3700 Cr BDT",
        donor: "National Priority"
      }
    ];

    return (
        <section id="projects" className="bg-surface/30">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="section-label">Select Portfolios</span>
                        <h2 className="text-5xl md:text-6xl text-gradient">NATIONAL ASSETS <br /> UNDER MANAGEMENT</h2>
                    </div>
                    <p className="text-text-dim max-w-sm border-l-2 border-primary pl-6 py-2">
                        Strategic oversight of infrastructure projects defining the next decade of connectivity in Bangladesh.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((proj, i) => (
                        <motion.div 
                            key={proj.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 border border-border">
                                <img src={proj.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6 py-2 px-4 bg-bg/80 backdrop-blur rounded-full text-[10px] font-bold tracking-widest text-primary border border-primary/30 uppercase">
                                    Project ID: {proj.id}
                                </div>
                                <div className="absolute bottom-6 right-6 flex gap-2">
                                    <span className="bg-accent/90 text-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{proj.budget}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{proj.name}</h3>
                                    <p className="text-text-dim font-medium">{proj.specs}</p>
                                </div>
                                <div className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                    <ArrowUpRight className="group-hover:text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillsBento = () => {
    return (
        <section id="expertise">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="section-label">Smart Competencies</span>
                    <h2 className="text-5xl md:text-6xl text-gradient">COMMAND & CONTROL</h2>
                </div>

                <div className="bento-grid">
                    <div className="lg:col-span-8 smart-card flex flex-col justify-between group">
                        <div className="flex justify-between">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                <Construction className="text-primary" size={32} />
                            </div>
                            <div className="text-right">
                                <span className="stat-ticker text-4xl font-bold">35+</span>
                                <p className="text-[10px] uppercase font-bold text-text-dim tracking-widest">Years Industry Command</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold mb-4">Engineering Architecture</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Mega Bridges", "National Highways", "Steel Structures", "Hydraulic Engineering", "PMP Projects"].map(t => (
                                    <span key={t} className="px-5 py-2 rounded-xl bg-surface-light border border-border text-xs font-bold uppercase tracking-widest text-text-dim">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 smart-card border-accent/20">
                        <Zap className="text-accent mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-4">Strategic<br />Procurement</h3>
                        <p className="text-text-dim text-sm mb-8 leading-relaxed">Expert command of PPR-2008 and FIDIC regulations, ensuring compliance and efficiency in international competitive bidding.</p>
                        <ul className="space-y-4">
                            {["Competitive Evaluator", "FIDIC Rule-set 1989", "e-GP Professional"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-xs font-bold text-white tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 smart-card min-h-[300px] flex flex-col justify-end">
                        <div className="flex items-center gap-4 mb-6">
                            <Trophy className="text-primary" size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Institutional Liaison</h3>
                        <p className="text-text-dim text-sm">Managing relationships with AIIB, JICA, World Bank, and high-level government bodies.</p>
                    </div>

                    <div className="lg:col-span-8 smart-card bg-surface">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Activity className="text-primary" /> DIGITAL TOOLS
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { name: 'Project Control (Primavera/MSP)', level: 95 },
                                        { name: 'Financial Control (CMS)', level: 90 },
                                        { name: 'CAD Systems', level: 85 }
                                    ].map(tool => (
                                        <div key={tool.name}>
                                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
                                                <span>{tool.name}</span>
                                                <span className="text-primary">{tool.level}%</span>
                                            </div>
                                            <div className="h-1 w-full bg-border rounded-full">
                                                <div className="h-full bg-primary rounded-full" style={{ width: `${tool.level}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-8 md:pt-0">
                                <span className="block p-8 rounded-[2rem] bg-bg/50 border border-border">
                                    <p className="text-text-dim italic text-sm">"Engineering isn't just about building structures; it's about engineering solutions that withstand the test of time and utility."</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceTimeline = () => {
    const milestones = [
        {
            year: "2024-25",
            role: "Project Director",
            org: "Kewatkhali Bridge Project",
            desc: "Commanding international consultant teams and contractors for a 3300 Cr steel arch bridge project."
        },
        {
            year: "2021-23",
            role: "Director of Audit & Accounts",
            org: "MIS Circle, RHD HQ",
            desc: "Managing national RHD asset database and overseeing comprehensive financial auditing."
        },
        {
            year: "2015-19",
            role: "Executive Engineer",
            org: "Road Division, Narayanganj",
            desc: "Pioneered real-time toll systems and advanced carbon fiber maintenance techniques."
        },
        {
            year: "2011-14",
            role: "Project Manager-1",
            org: "Dhaka-Chittagong 4-Laning",
            desc: "Managed critical segments of the nation's busiest economic corridor."
        }
    ];

    return (
        <section id="experience" className="bg-surface/30 border-y border-border">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 sticky top-32 h-fit">
                        <span className="section-label">Institutional Tenure</span>
                        <h2 className="text-5xl md:text-6xl text-gradient mb-8 leading-tight">THE LEADERSHIP <br /> JOURNEY</h2>
                        <p className="text-text-dim mb-10 leading-relaxed max-w-sm">From field engineering in donor-funded projects to executive decision-making at the national headquarters.</p>
                        <a href="#contact" className="btn-smart btn-ghost">REQUEST FULL CV</a>
                    </div>
                    
                    <div className="lg:col-span-7 space-y-16">
                        {milestones.map((mil, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-10 items-start group"
                            >
                                <div className="pt-2">
                                    <span className="stat-ticker text-xl font-bold text-primary">{mil.year}</span>
                                </div>
                                <div className="pb-16 border-l-2 border-border pl-12 last:pb-0 group-hover:border-primary transition-colors duration-500">
                                    <h3 className="text-3xl font-bold mb-2">{mil.role}</h3>
                                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">{mil.org}</p>
                                    <p className="text-text-dim max-w-lg leading-relaxed">{mil.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const EducationSection = () => {
    const personal = [
        { k: "Name", v: "A. K. Shamsuddin Ahmed" },
        { k: "Father’s Name", v: "Ashraf Ali Sikder" },
        { k: "Mother’s Name", v: "Shamsunnahar Khanom" },
        { k: "Nationality", v: "Bangladeshi" },
        { k: "Date of Birth", v: "01-01-1967" },
        { k: "Place of Birth", v: "Patuakhali" },
        { k: "Height / Weight", v: "164 cm (5' 5'') / 83 kg" },
        { k: "Discipline", v: "Civil Engineering" },
        { k: "Present Address", v: "Flat No.02, House No.34/B, Road No.05, Dhanmondi, Dhaka-1205." },
        { k: "Permanent Address", v: "Village & P.O: Pukurjana, P.S: Patuakhali Sadar, Dist: Patuakhali." },
        { k: "Contact", v: "01713 400 542" },
    ];

    const academics = [
        { degree: "S.S.C", institute: "Chittagong Collegiate School", year: "1981" },
        { degree: "H.S.C", institute: "Dhaka College, Dhaka", year: "1983" },
        { degree: "B.Sc. in Civil Engineering", institute: "BUET, Dhaka", year: "1989" },
        { degree: "MBA (Human Resource)", institute: "Southeast University", year: "2008" },
        { degree: "BCS (Roads & Highways)", institute: "Bangladesh Civil Service", year: "1999" },
    ];

    const memberships = [
        "Life Fellow of Institute of Engineers, Bangladesh (IEB) — F-5286",
        "Member of Bangladesh Professional Engineer’s Registration Board (PEng.) — M/0323",
        "Member of American Society of Civil Engineers (ASCE) — M/11041785",
        "Member of Retired Engineers Associations",
        "Member of RHD Engineers Association",
        "Member of 18th BCS Officers Forum",
        "Member of Officer’s Club — M/3438",
    ];

    const languages = [
        { name: "Bengali", level: "Excellent (Speaking/Reading/Writing)" },
        { name: "English", level: "Excellent (Speaking/Reading/Writing)" },
    ];

    const references = [
        {
            name: "Mr. Syed Moinul Hasan",
            title: "Chief Engineer, Roads and Highways Department",
            phone: "01730 782 500",
            email: "ce@rhd.gov.bd",
        },
        {
            name: "Mr. Md. Azizur Rahman",
            title: "Chief Engineer (Rtd.), Roads and Highways Department",
            phone: "01711 530 243",
            email: "aziz05544@yahoo.com",
        },
    ];

    return (
        <section id="education" className="border-y border-border bg-surface/20">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-label">Credentials</span>
                        <h2 className="text-5xl md:text-6xl text-gradient leading-tight">
                            PROFESSIONAL PROFILE <br /> &amp; CV SNAPSHOT
                        </h2>
                    </div>
                    <p className="text-text-dim max-w-md border-l-2 border-primary pl-6 py-2">
                        Key personal details, academic background, memberships, languages, and references—organized for quick review.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 smart-card">
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-primary" />
                            <h3 className="text-2xl font-bold">Academic Background</h3>
                        </div>

                        <div className="space-y-4">
                            {academics.map((a) => (
                                <div key={`${a.degree}-${a.year}`} className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                                    <div>
                                        <p className="text-white font-bold">{a.degree}</p>
                                        <p className="text-text-dim text-sm">{a.institute}</p>
                                    </div>
                                    <span className="stat-ticker text-base">{a.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 smart-card">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-primary" />
                            <h3 className="text-2xl font-bold">Personal Details</h3>
                        </div>

                        <dl className="grid grid-cols-1 gap-4">
                            {personal.map((row) => (
                                <div key={row.k} className="flex items-start justify-between gap-6 border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                                    <dt className="text-[10px] uppercase font-bold text-text-dim tracking-widest pt-1">{row.k}</dt>
                                    <dd className="text-sm font-semibold text-white text-right max-w-[70%]">{row.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="lg:col-span-6 smart-card">
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-primary" />
                            <h3 className="text-2xl font-bold">Memberships</h3>
                        </div>
                        <ul className="space-y-3">
                            {memberships.map((m) => (
                                <li key={m} className="text-sm text-text-dim leading-relaxed">
                                    <span className="text-primary font-black mr-2">—</span>
                                    <span className="font-semibold text-white/90">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-6 smart-card">
                        <div className="flex items-center gap-3 mb-8">
                            <Globe className="text-primary" />
                            <h3 className="text-2xl font-bold">Languages</h3>
                        </div>
                        <div className="space-y-4">
                            {languages.map((l) => (
                                <div key={l.name} className="flex items-center justify-between border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                                    <span className="font-bold text-white">{l.name}</span>
                                    <span className="text-sm text-text-dim">{l.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-12 smart-card">
                        <div className="flex items-center gap-3 mb-8">
                            <Mail className="text-primary" />
                            <h3 className="text-2xl font-bold">References</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {references.map((r) => (
                                <div key={r.email} className="p-8 rounded-[2rem] bg-bg/40 border border-border">
                                    <p className="text-white font-bold text-lg mb-2">{r.name}</p>
                                    <p className="text-text-dim text-sm mb-6 leading-relaxed">{r.title}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-3 text-white/90 font-semibold">
                                            <Phone size={18} className="text-primary" />
                                            <span>{r.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90 font-semibold">
                                            <Mail size={18} className="text-primary" />
                                            <a className="hover:text-white transition-colors" href={`mailto:${r.email}`}>{r.email}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="smart-card p-1 items-center overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 bg-primary flex flex-col justify-between min-h-[600px] relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-5xl font-bold text-white mb-8">Ready for Next <br /> Scale Operations</h2>
                                <p className="text-white/80 text-lg max-w-md">Connect for strategic infrastructure consulting, mega project management, or institutional leadership roles.</p>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <Phone />
                                    </div>
                                    <span className="text-2xl font-bold text-white">01713 400 542</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <MapPin />
                                    </div>
                                    <span className="text-lg font-bold text-white">Dhanmondi, Dhaka, BD</span>
                                </div>
                            </div>

                            {/* Abstract Sketch Overlay */}
                            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                <Construction size={400} className="absolute -right-20 -top-20 text-white" />
                            </div>
                        </div>

                        <div className="p-12 lg:p-20 bg-surface">
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest">Full Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-border py-4 focus:border-primary outline-none transition-colors text-white" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest">Organization</label>
                                        <input type="text" className="w-full bg-transparent border-b border-border py-4 focus:border-primary outline-none transition-colors text-white" placeholder="Global Infra Ltd." />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest">Message Brief</label>
                                    <textarea rows="4" className="w-full bg-transparent border-b border-border py-4 focus:border-primary outline-none transition-colors text-white resize-none" placeholder="Primary objective of this contact..."></textarea>
                                </div>
                                <button className="btn-smart btn-primary w-full py-6 text-lg justify-center">INITIATE CONNECTION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-20 border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-white tracking-widest uppercase">Ahmed Portfolio</span>
                <p className="text-text-dim text-xs tracking-widest">EXECUTIVE CIVIL ENGINEERING LEADERSHIP &copy; {new Date().getFullYear()}</p>
            </div>
            <div className="flex gap-8">
                {["IEB Life Fellow", "PEng Bangladesh", "ASCE Member"].map(item => (
                    <span key={item} className="text-[10px] font-bold uppercase tracking-widest text-text-dim border-l border-border pl-4">{item}</span>
                ))}
            </div>
        </div>
    </footer>
);

function App() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target?.closest?.('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute('href') || '';
      const hash = href === '#' ? '' : href;
      if (!hash) {
        // top
        e.preventDefault();
        lenis.scrollTo(0);
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
      }

      const id = hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const nav = document.querySelector('nav');
      const offset = nav ? -(nav.getBoundingClientRect().height + 16) : -96;
      lenis.scrollTo(target, { offset });
      window.history.replaceState(null, '', hash);
    };

    document.addEventListener('click', onClick, { capture: true });

    return () => {
      document.removeEventListener('click', onClick, { capture: true });
      if (rafId) window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-bg text-text selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsBento />
      <EducationSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
