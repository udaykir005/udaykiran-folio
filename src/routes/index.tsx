import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Brain, Sparkles, Target, Users, LineChart, Workflow, Cloud, FileText,
  Award, GraduationCap, Briefcase, MessageSquare, Bot, TrendingUp, Database,
  Download, Linkedin, Github, Mail, ArrowRight, Menu, X, CheckCircle2,
  Lightbulb, Map as MapIcon, Layers, Cpu, Send, Calendar, ExternalLink,
} from "lucide-react";
import heroAsset from "@/assets/uday.png.asset.json";
const heroImg = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Udaykiran Pottabathula — AI Product Manager & Product Owner" },
      { name: "description", content: "15+ years delivering enterprise technology. AI Product Manager building intelligent agents, RAG solutions and AI-powered products." },
      { property: "og:title", content: "Udaykiran Pottabathula — AI Product Manager" },
      { property: "og:description", content: "Transforming Business Challenges into AI-Powered Product Solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "articles", label: "Articles" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Projects />
        <Expertise />
        <Certifications />
        <Articles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Udaykiran<span className="text-primary">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          Let's Talk <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col py-2">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: "radial-gradient(circle at 20% 10%, oklch(0.7 0.18 250 / 0.18), transparent 45%), radial-gradient(circle at 80% 30%, oklch(0.6 0.2 270 / 0.15), transparent 45%)" }}
      />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for AI Product Leadership Roles
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Udaykiran <br />
            <span className="text-gradient">Pottabathula</span>
          </h1>
          <p className="mt-5 text-base font-semibold text-foreground md:text-lg">
            AI Product Manager <span className="text-muted-foreground font-normal">•</span> Product Owner{" "}
            <span className="text-muted-foreground font-normal">•</span> Business Systems Analyst
          </p>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground md:text-xl">
            Transforming Business Challenges into <span className="text-foreground font-semibold">AI-Powered Product Solutions</span>.
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Helping organizations leverage AI, automation, analytics, and product thinking to solve
            complex business problems and deliver measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card animate-float">
            <img
              src={heroImg}
              alt="Udaykiran Pottabathula portrait"
              width={1280}
              height={1280}
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
          <FloatingBadge className="absolute -left-4 top-8 hidden sm:flex" icon={<Brain className="h-4 w-4" />} label="AI Agents" />
          <FloatingBadge className="absolute -right-4 bottom-10 hidden sm:flex" icon={<Workflow className="h-4 w-4" />} label="RAG Systems" />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon, label, className = "" }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-card ${className}`}>
      <span className="text-primary">{icon}</span> {label}
    </div>
  );
}

/* -------------------- HIGHLIGHTS -------------------- */
function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Highlights() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const yrs = useCountUp(15, run);
  const ent = useCountUp(8, run);

  const items = [
    { value: `${yrs}+`, label: "Years IT Experience", icon: <Briefcase className="h-5 w-5" /> },
    { value: `${ent}+`, label: "Years Enterprise Product Delivery", icon: <Target className="h-5 w-5" /> },
    { value: "CSPO", label: "Certified Product Owner", icon: <Award className="h-5 w-5" /> },
    { value: "MBA + MSITM", label: "Advanced Degrees", icon: <GraduationCap className="h-5 w-5" /> },
    { value: "AI Builder", label: "Production AI Solutions", icon: <Bot className="h-5 w-5" /> },
    { value: "Agile", label: "Digital Transformation Leader", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <section ref={ref} className="border-y border-border bg-surface py-16">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-border bg-card p-5 card-hover">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">{it.icon}</div>
              <div className="mt-3 font-display text-2xl font-bold tracking-tight">{it.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECTION HEADING -------------------- */
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const strengths = [
    "Product Strategy", "Product Ownership", "Business Analysis", "Agile Delivery",
    "Stakeholder Management", "AI Solutions", "Business Process Automation",
    "Data Analytics", "Azure Cloud Solutions", "Requirements Management",
  ];
  return (
    <section id="about" className="py-24">
      <div className="container-page">
        <SectionHead eyebrow="About Me" title="Bridging Business & Intelligent Technology" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Experienced Product Owner and Senior Business Systems Analyst with extensive experience
              bridging business needs and technology solutions. Proven track record in product
              management, Agile delivery, requirements engineering, process improvement, enterprise
              systems, analytics, and <span className="text-foreground font-semibold">AI-powered business solutions</span>.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              I help organizations adopt AI thoughtfully — pairing rigorous product discovery with
              hands-on technical fluency to ship outcomes that move the business forward.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Core Strengths
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground card-hover">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */
const PROJECTS = [
  {
    title: "AI WhatsApp Assistant",
    description: "AI-powered customer communication and order status assistant integrated with WhatsApp and enterprise systems.",
    tech: ["OpenAI", "Azure Functions", "WhatsApp", "Twilio", "SQL Server"],
    icon: <MessageSquare className="h-6 w-6" />,
    accent: "from-emerald-500/15 to-cyan-500/10",
  },
  {
    title: "Business Document RAG Assistant",
    description: "Conversational AI solution that allows users to interact with business documents using Retrieval Augmented Generation.",
    tech: ["OpenAI", "Vector DB", "RAG", "Azure"],
    icon: <FileText className="h-6 w-6" />,
    accent: "from-blue-500/15 to-indigo-500/10",
  },
  {
    title: "Sales Forecasting AI",
    description: "Machine learning solution predicting future sales trends and surfacing actionable business insights for leadership.",
    tech: ["Python", "XGBoost", "Power BI", "Azure"],
    icon: <LineChart className="h-6 w-6" />,
    accent: "from-amber-500/15 to-orange-500/10",
  },
  {
    title: "AI Knowledge Agent",
    description: "Enterprise AI assistant providing instant answers from internal knowledge bases and product documentation.",
    tech: ["LLMs", "RAG", "Azure AI"],
    icon: <Brain className="h-6 w-6" />,
    accent: "from-violet-500/15 to-fuchsia-500/10",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-surface py-24">
      <div className="container-page">
        <SectionHead eyebrow="Featured AI Projects" title="Shipped Outcomes, Not Just Demos" sub="A selection of AI products and intelligent systems delivered end-to-end — from discovery to production." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 card-hover">
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${p.accent} pointer-events-none`} />
              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-card border border-border text-primary shadow-soft">
                  {p.icon}
                </div>
                <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Case Study
                </span>
              </div>
              <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <button className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                View Details <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERTISE -------------------- */
function Expertise() {
  const items = [
    { icon: <Target className="h-5 w-5" />, title: "Product Strategy", desc: "Defining vision, positioning, and outcomes that align teams." },
    { icon: <Users className="h-5 w-5" />, title: "Agile Product Ownership", desc: "Backlog ownership, prioritization, and value delivery." },
    { icon: <FileText className="h-5 w-5" />, title: "Requirements Engineering", desc: "Translating ambiguity into precise, testable requirements." },
    { icon: <MapIcon className="h-5 w-5" />, title: "User Story Mapping", desc: "Mapping journeys to release plans the team can execute." },
    { icon: <Layers className="h-5 w-5" />, title: "Roadmap Planning", desc: "Quarterly outcomes balanced against capacity and risk." },
    { icon: <MessageSquare className="h-5 w-5" />, title: "Stakeholder Collaboration", desc: "Aligning executives, engineering, and end-users." },
    { icon: <Workflow className="h-5 w-5" />, title: "Process Optimization", desc: "Removing friction across business and delivery flows." },
    { icon: <Database className="h-5 w-5" />, title: "Data-Driven Decisions", desc: "Instrumenting products to learn what actually works." },
    { icon: <Cpu className="h-5 w-5" />, title: "AI Product Development", desc: "Designing and shipping production AI features and agents." },
  ];
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHead eyebrow="Product Management Expertise" title="What I Bring to the Table" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CERTIFICATIONS -------------------- */
function Certifications() {
  const certs = [
    { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", icon: <Award className="h-6 w-6" /> },
    { title: "IBM Data Science Certification", issuer: "IBM", icon: <Database className="h-6 w-6" /> },
    { title: "MBA", issuer: "Master of Business Administration", icon: <GraduationCap className="h-6 w-6" /> },
    { title: "MS in Information Technology Management", issuer: "MSITM", icon: <GraduationCap className="h-6 w-6" /> },
  ];
  return (
    <section id="certifications" className="bg-surface py-24">
      <div className="container-page">
        <SectionHead eyebrow="Certifications & Education" title="Credentials That Back the Craft" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">{c.icon}</div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ARTICLES -------------------- */
function Articles() {
  const articles = [
    { title: "AI Isn't Replacing Jobs — It's Replacing Tasks", tag: "AI Strategy", read: "5 min read", icon: <Lightbulb className="h-5 w-5" /> },
    { title: "How AI Agents Are Transforming Business Operations", tag: "AI Agents", read: "7 min read", icon: <Bot className="h-5 w-5" /> },
    { title: "RAG vs Traditional Search: What Business Leaders Should Know", tag: "RAG", read: "6 min read", icon: <Database className="h-5 w-5" /> },
    { title: "The Future of AI Product Management", tag: "Product", read: "8 min read", icon: <Sparkles className="h-5 w-5" /> },
  ];
  return (
    <section id="articles" className="py-24">
      <div className="container-page">
        <SectionHead eyebrow="Articles & Insights" title="Writing on AI, Product & Strategy" />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title} className="group rounded-2xl border border-border bg-card p-7 card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">{a.icon}</div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-muted px-2.5 py-0.5">{a.tag}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{a.title}</h3>
              <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                Read more <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- RESUME -------------------- */
function Resume() {
  return (
    <section id="resume" className="bg-surface py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14 shadow-card">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Resume</div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Get the full picture of my experience
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground">
                15+ years across product management, business analysis, enterprise delivery,
                automation, and applied AI. Download a copy or connect on LinkedIn.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                <Download className="h-4 w-4" /> Download Resume PDF
              </a>
              <a href="https://linkedin.com/in/udaykiran-pottabathula" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                <Linkedin className="h-4 w-4" /> View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
const EMAILJS_SERVICE_ID = "service_0mqj28w";
const EMAILJS_TEMPLATE_ID = "template_oi9lda9";
const EMAILJS_PUBLIC_KEY = "aMs_3JKrqUo--ekRI";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.text || err?.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <SectionHead eyebrow="Contact" title="Let's Build Something Intelligent" sub="Have a product challenge or AI initiative on your roadmap? I'd love to hear about it." />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form ref={formRef} onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-5">
              <Field label="Company" name="company" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                placeholder="Tell me about your project, goals, or challenges..."
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
              </button>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                <Calendar className="h-4 w-4" /> Schedule a Discussion
              </a>
            </div>
            {status === "sent" && (
              <p className="mt-4 text-sm font-medium text-primary">Thanks! Your message has been sent — I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-destructive">{errorMsg}</p>
            )}
          </form>

          <div className="space-y-4">
            <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="puk.udaykiran@gmail.com" href="mailto:puk.udaykiran@gmail.com" />
            <ContactCard icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="linkedin.com/in/udaykiran-pottabathula" href="https://linkedin.com/in/udaykiran-pottabathula" />
            <ContactCard icon={<Github className="h-5 w-5" />} label="GitHub" value="github.com/udaykir005" href="https://github.com/udaykir005" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 card-hover">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-semibold text-foreground">{value}</div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground" />
    </a>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Udaykiran Pottabathula
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Transforming Business Challenges into AI-Powered Product Solutions.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a href="https://linkedin.com/in/udaykiran-pottabathula" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-muted transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/udaykir005" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-muted transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:puk.udaykiran@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-muted transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Udaykiran Pottabathula. All Rights Reserved.
      </div>
    </footer>
  );
}
