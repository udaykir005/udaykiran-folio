import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Target, Users, Linkedin, Download,
  Globe, Layers, Lightbulb, Rocket, Search, Smartphone, FileText, Award,
  Briefcase, MonitorSmartphone, GitBranch, BarChart3, Compass, PenTool, Code2,
} from "lucide-react";

export const Route = createFileRoute("/projects/brand-platform")({
  head: () => ({
    meta: [
      { title: "Professional Brand Platform — Personal Branding Case Study" },
      { name: "description", content: "Case study: designing and shipping a recruiter-focused personal brand platform showcasing product management, enterprise transformation, and AI work." },
      { property: "og:title", content: "Professional Brand Platform — Case Study" },
      { property: "og:description", content: "Recruiter-focused personal brand platform: product strategy, UX, content architecture, SEO, and modern web delivery." },
      { property: "og:url", content: "https://udaykiran.net/projects/brand-platform" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://udaykiran.net/projects/brand-platform" }],
  }),
  component: BrandPlatformCaseStudy,
});

/* ---------- Reusable ---------- */
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

const TECH = ["Lovable", "React", "TypeScript", "Tailwind CSS", "Netlify", "Google Search Console", "SEO"];

/* ---------- Page ---------- */
function BrandPlatformCaseStudy() {
  return (
    <main className="bg-background text-foreground">
      <div className="border-b border-border bg-card/60 backdrop-blur">
        <div className="container-page flex items-center justify-between py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-muted">
            Contact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Hero />
      <Summary />
      <Problem />
      <Vision />
      <Role />
      <Personas />
      <Discovery />
      <Features />
      <Decisions />
      <InfoArchitecture />
      <Architecture />
      <TechStack />
      <SEO />
      <Results />
      <Lessons />
      <Takeaway />
      <CTA />
    </main>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
      <div className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Project · Personal Branding & Career Growth Platform
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Professional <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Brand Platform</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Designed and built a modern digital presence that helps recruiters, hiring managers, and potential clients quickly understand professional experience, skills, and project impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://udaykiran.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90">
                <Globe className="h-4 w-4" /> Visit Live Site
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
                View Architecture
              </a>
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-muted/40">
              <div className="space-y-3">
                {[
                  { label: "Professional Experience", icon: <Briefcase className="h-4 w-4" /> },
                  { label: "Project Case Studies", icon: <FileText className="h-4 w-4" /> },
                  { label: "Recruiter-Friendly Experience", icon: <Users className="h-4 w-4" /> },
                  { label: "Personal Brand Platform", icon: <Sparkles className="h-4 w-4" /> },
                  { label: "Career Opportunities", icon: <Rocket className="h-4 w-4" /> },
                ].map((s, i) => (
                  <div key={s.label}>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600">{s.icon}</div>
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
                    {i < 4 && <div className="mx-auto my-1 h-4 w-px bg-border" />}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Summary ---------- */
function Summary() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="EXECUTIVE SUMMARY" title="About The Project" />
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>Traditional resumes often fail to communicate the depth of professional experience, project outcomes, and product leadership capabilities.</p>
          <p>To solve this challenge, a professional branding platform was created to present career achievements, enterprise projects, AI initiatives, certifications, and technical expertise in a modern, recruiter-friendly format.</p>
          <p>The platform acts as a central hub for personal branding, professional storytelling, and career growth.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const items = [
    "Resumes provide limited space to showcase project impact.",
    "Recruiters often spend only seconds reviewing candidate profiles.",
    "Enterprise projects are difficult to explain through a traditional resume.",
    "Professional achievements are spread across multiple platforms.",
    "Personal branding requires a consistent digital presence.",
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="BUSINESS PROBLEM" title="Why a Resume Alone Isn't Enough" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-500/10 text-amber-600 text-xs font-bold">{i + 1}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Vision ---------- */
function Vision() {
  const objectives = [
    "Improve recruiter engagement",
    "Showcase project case studies",
    "Strengthen professional branding",
    "Increase discoverability through SEO",
    "Create a single source of truth for professional achievements",
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT VISION" title="A Platform, Not a Resume" />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5">
            <Target className="h-8 w-8 text-amber-600" />
            <h3 className="mt-4 font-display text-xl font-bold">Vision Statement</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Create a professional platform that communicates expertise, project outcomes, and product leadership more effectively than a traditional resume.
            </p>
          </Card>
          <Card>
            <Lightbulb className="h-8 w-8 text-amber-600" />
            <h3 className="mt-4 font-display text-xl font-bold">Product Objectives</h3>
            <ul className="mt-3 space-y-2">
              {objectives.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- My Role ---------- */
function Role() {
  const roles = [
    { icon: <Target className="h-6 w-6" />, title: "Product Owner", desc: "Defined goals, target audience, and user journeys." },
    { icon: <Compass className="h-6 w-6" />, title: "UX Strategist", desc: "Designed recruiter-focused navigation and content structure." },
    { icon: <PenTool className="h-6 w-6" />, title: "Content Architect", desc: "Organized experience, certifications, and projects into a cohesive narrative." },
    { icon: <Code2 className="h-6 w-6" />, title: "Platform Builder", desc: "Built and deployed the platform using modern web technologies." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="MY ROLE" title="End-to-End Product Ownership" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <Card key={r.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-600">{r.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Personas ---------- */
function Personas() {
  const personas = [
    { title: "Recruiters", desc: "Need quick understanding of skills and experience." },
    { title: "Hiring Managers", desc: "Need evidence of business impact and leadership." },
    { title: "Potential Clients", desc: "Need confidence in expertise and delivery capability." },
    { title: "Professional Network", desc: "Need a centralized location to learn about experience and projects." },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="TARGET USERS" title="Built For The People Who Hire" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <Card key={p.title}>
              <Users className="h-7 w-7 text-amber-600" />
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Discovery Timeline ---------- */
function Discovery() {
  const steps = [
    { phase: "Research", desc: "Analyzed recruiter behavior and portfolio best practices." },
    { phase: "Problem Definition", desc: "Identified limitations of traditional resumes." },
    { phase: "Content Strategy", desc: "Defined key sections and storytelling approach." },
    { phase: "UX Design", desc: "Created recruiter-friendly navigation." },
    { phase: "Development", desc: "Built platform using modern web technologies." },
    { phase: "Launch", desc: "Published and optimized for search engines." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT DISCOVERY" title="From Insight to Launch" />
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative space-y-5 border-l-2 border-amber-500/30 pl-6">
            {steps.map((s, i) => (
              <div key={s.phase} className="relative">
                <div className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-amber-500 text-xs font-bold text-white">{i + 1}</div>
                <Card>
                  <h3 className="font-display text-lg font-bold">{s.phase}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Key Features ---------- */
function Features() {
  const features = [
    { icon: <FileText className="h-6 w-6" />, title: "Project Case Studies", desc: "Detailed project storytelling with business impact." },
    { icon: <Briefcase className="h-6 w-6" />, title: "Professional Experience Showcase", desc: "Career history and accomplishments." },
    { icon: <Award className="h-6 w-6" />, title: "Certifications Hub", desc: "Industry certifications and credentials." },
    { icon: <Download className="h-6 w-6" />, title: "Resume Download", desc: "Easy access to professional profile." },
    { icon: <Linkedin className="h-6 w-6" />, title: "Contact & Networking", desc: "Multiple engagement channels." },
    { icon: <Smartphone className="h-6 w-6" />, title: "Mobile Responsive Design", desc: "Optimized across all devices." },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="KEY FEATURES" title="What Recruiters Get In One Place" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-600">{f.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Decisions ---------- */
function Decisions() {
  const decisions = [
    { q: "Why a Portfolio Instead of Only a Resume?", a: "Allows deeper storytelling and project visibility." },
    { q: "Why Case Studies?", a: "Demonstrates outcomes, decision-making, and business impact." },
    { q: "Why SEO?", a: "Increase discoverability by recruiters and hiring managers." },
    { q: "Why Mobile-First Design?", a: "Many recruiters review profiles from mobile devices." },
    { q: "Why Personal Branding?", a: "Professional visibility is increasingly important in today's market." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT DECISIONS" title="The Trade-Offs Behind the Build" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {decisions.map((d) => (
            <Card key={d.q}>
              <h3 className="font-display text-base font-bold">{d.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Information Architecture ---------- */
function InfoArchitecture() {
  const nodes = ["Home", "About", "Projects", "Certifications", "Resume", "Contact"];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="INFORMATION ARCHITECTURE" title="A Clear Path Through The Story" />
        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="bg-gradient-to-br from-card to-muted/40">
            <div className="space-y-2">
              {nodes.map((n, i) => (
                <div key={n}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600 text-xs font-bold">{i + 1}</div>
                    <span className="text-sm font-semibold">{n}</span>
                  </div>
                  {i < nodes.length - 1 && <div className="mx-auto my-1 h-4 w-px bg-border" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Architecture ---------- */
function Architecture() {
  const flow = [
    { label: "User", icon: <Users className="h-4 w-4" /> },
    { label: "Netlify Hosting", icon: <Globe className="h-4 w-4" /> },
    { label: "React Frontend", icon: <Code2 className="h-4 w-4" /> },
    { label: "Project Content", icon: <FileText className="h-4 w-4" /> },
    { label: "SEO Layer", icon: <Search className="h-4 w-4" /> },
    { label: "Google Search", icon: <Search className="h-4 w-4" /> },
    { label: "Recruiters & Hiring Managers", icon: <Briefcase className="h-4 w-4" /> },
  ];
  return (
    <section id="architecture" className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="SOLUTION ARCHITECTURE" title="How The Platform Reaches Recruiters" />
        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="bg-gradient-to-br from-card to-muted/40">
            <div className="space-y-2">
              {flow.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600">{s.icon}</div>
                    <span className="text-sm font-medium">{s.label}</span>
                  </div>
                  {i < flow.length - 1 && <div className="mx-auto my-1 h-4 w-px bg-border" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  const groups = [
    { title: "Frontend", icon: <Code2 className="h-6 w-6" />, items: ["React", "TypeScript", "Tailwind CSS"] },
    { title: "Platform", icon: <Sparkles className="h-6 w-6" />, items: ["Lovable"] },
    { title: "Hosting", icon: <Globe className="h-6 w-6" />, items: ["Netlify"] },
    { title: "SEO", icon: <Search className="h-6 w-6" />, items: ["Google Search Console", "Structured Data", "Sitemap", "Metadata Optimization"] },
    { title: "Analytics", icon: <BarChart3 className="h-6 w-6" />, items: ["Future Analytics Integration"] },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="TECHNOLOGY STACK" title="Modern, Lean, and Recruiter-Ready" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-600">{g.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SEO ---------- */
function SEO() {
  const improvements = ["Sitemap generation", "Robots.txt", "Structured data", "Meta tags", "Open Graph support", "Search Console integration"];
  const goals = ["Product Owner", "Product Manager", "Business Analyst", "AI Solutions", "ERP Modernization", "Azure", "Digital Transformation"];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="SEO & DISCOVERABILITY" title="Engineered To Be Found" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Card>
            <Search className="h-8 w-8 text-amber-600" />
            <h3 className="mt-4 font-display text-xl font-bold">SEO Improvements</h3>
            <ul className="mt-3 space-y-2">
              {improvements.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {i}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5">
            <Target className="h-8 w-8 text-amber-600" />
            <h3 className="mt-4 font-display text-xl font-bold">Search Visibility Goals</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {goals.map((g) => (
                <span key={g} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">{g}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  const results = [
    { title: "Professional Visibility", desc: "Centralized online presence.", icon: <Globe className="h-6 w-6" /> },
    { title: "Improved Storytelling", desc: "Better communication of project outcomes.", icon: <FileText className="h-6 w-6" /> },
    { title: "Recruiter Accessibility", desc: "Information available 24/7.", icon: <Users className="h-6 w-6" /> },
    { title: "Personal Brand Growth", desc: "Professional identity strengthened.", icon: <Sparkles className="h-6 w-6" /> },
    { title: "Search Discoverability", desc: "Improved SEO foundation.", icon: <Search className="h-6 w-6" /> },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="RESULTS & IMPACT" title="What The Platform Delivers" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <Card key={r.title} className="bg-gradient-to-br from-card to-muted/40">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-600">{r.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Lessons ---------- */
function Lessons() {
  const lessons = [
    { title: "Product Lessons", desc: "Users engage more with stories than resumes.", icon: <Lightbulb className="h-6 w-6" /> },
    { title: "UX Lessons", desc: "Simple navigation improves engagement.", icon: <Compass className="h-6 w-6" /> },
    { title: "Branding Lessons", desc: "Consistency builds trust.", icon: <Sparkles className="h-6 w-6" /> },
    { title: "SEO Lessons", desc: "Discoverability is a critical product feature.", icon: <Search className="h-6 w-6" /> },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="LESSONS LEARNED" title="What This Project Taught" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <Card key={l.title}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 text-amber-600">{l.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Takeaway ---------- */
function Takeaway() {
  const items = [
    "Product Ownership",
    "User Experience Design",
    "Digital Strategy",
    "Personal Branding",
    "Content Architecture",
    "SEO Optimization",
    "Modern Web Development",
    "End-to-End Product Delivery",
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <Card className="mx-auto max-w-5xl bg-gradient-to-br from-amber-500/10 via-card to-orange-500/10 p-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">RECRUITER TAKEAWAY</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">What This Project Demonstrates</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-semibold">{it}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-20">
      <div className="container-page">
        <Card className="mx-auto max-w-4xl bg-gradient-to-br from-amber-500/10 via-card to-orange-500/10 p-10 text-center">
          <Rocket className="mx-auto h-10 w-10 text-amber-600" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">Let's Talk</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Interested in discussing Product Management, Business Analysis, AI Solutions, or Digital Transformation?
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/udaykiranpottabathula/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <Link to="/" hash="resume" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
              <Download className="h-4 w-4" /> Download Resume
            </Link>
            <Link to="/" hash="projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
              <Layers className="h-4 w-4" /> View Other Projects
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
