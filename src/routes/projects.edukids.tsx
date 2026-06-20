import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Users,
  Workflow, Cloud, Database, Bot, Calendar, Target, Lightbulb,
  Layers, Cpu, Linkedin, Download, Smartphone, Zap, BookOpen, Baby,
  ShieldCheck, TrendingUp, Clock, Send,
} from "lucide-react";

export const Route = createFileRoute("/projects/edukids")({
  head: () => ({
    meta: [
      { title: "EduKids — WhatsApp Vocabulary Learning Platform | Case Study" },
      { name: "description", content: "Case study: EduKids — a WhatsApp-based educational platform delivering daily age-appropriate vocabulary lessons to children. Product strategy, UX, automation and cloud architecture." },
      { property: "og:title", content: "EduKids — WhatsApp Vocabulary Learning Platform" },
      { property: "og:description", content: "How a WhatsApp-first product helps children build vocabulary through daily micro-learning." },
    ],
    links: [{ rel: "canonical", href: "/projects/edukids" }],
  }),
  component: EduKidsCaseStudy,
});

/* -------------------- Reusable bits -------------------- */
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

/* -------------------- Page -------------------- */
function EduKidsCaseStudy() {
  return (
    <main className="bg-background text-foreground">
      {/* Top bar */}
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

      {/* Hero */}
      <Hero />

      {/* Executive Summary */}
      <Summary />

      {/* Business Problem */}
      <BusinessProblem />

      {/* Product Vision */}
      <Vision />

      {/* My Role */}
      <Roles />

      {/* User Journey */}
      <Journey />

      {/* Product Decisions */}
      <Decisions />

      {/* Features */}
      <Features />

      {/* Screenshots */}
      <Screenshots />

      {/* Architecture */}
      <Architecture />


      {/* Tech Stack */}
      <TechStack />

      {/* Results */}
      <Results />

      {/* Roadmap */}
      <Roadmap />

      {/* Lessons */}
      <Lessons />

      {/* Recruiter Takeaway */}
      <Takeaway />

      {/* CTA */}
      <CTA />
    </main>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  const tags = ["WhatsApp", "Twilio", "Azure Functions", "SQL Server", "Microsoft Azure"];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-background to-cyan-500/10 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live Project
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              Educational Technology Platform
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
            EduKids
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Helping children build vocabulary through daily micro-learning delivered directly through WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-md bg-card border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#architecture" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              View Architecture <Layers className="h-4 w-4" />
            </a>
            <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              Contact Me <Send className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Visual flow */}
        <div className="relative">
          <Card className="bg-card/80 backdrop-blur">
            <div className="space-y-3">
              {[
                { icon: <Users className="h-5 w-5" />, label: "Parent", tone: "bg-blue-500/10 text-blue-600 dark:text-blue-300" },
                { icon: <MessageSquare className="h-5 w-5" />, label: "WhatsApp Registration", tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300" },
                { icon: <Sparkles className="h-5 w-5" />, label: "EduKids Platform", tone: "bg-violet-500/10 text-violet-600 dark:text-violet-300" },
                { icon: <BookOpen className="h-5 w-5" />, label: "Daily Vocabulary Lessons", tone: "bg-amber-500/10 text-amber-600 dark:text-amber-300" },
                { icon: <Baby className="h-5 w-5" />, label: "Child Learning", tone: "bg-pink-500/10 text-pink-600 dark:text-pink-300" },
              ].map((step, i, arr) => (
                <div key={step.label}>
                  <div className={`flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 ${step.tone}`}>
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-card">{step.icon}</div>
                    <span className="font-semibold text-foreground">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex justify-center py-1 text-muted-foreground">↓</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Summary -------------------- */
function Summary() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Executive Summary" title="About The Product" />
        <Card className="mx-auto mt-10 max-w-4xl">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              <span className="font-semibold text-foreground">EduKids</span> is a WhatsApp-based educational platform
              designed to help children improve vocabulary through daily micro-learning.
            </p>
            <p>
              Parents register their children through WhatsApp, and based on the child's age group, the platform
              automatically delivers <span className="font-semibold text-foreground">three age-appropriate vocabulary
              words each day</span> along with meanings and examples.
            </p>
            <p>
              The platform removes barriers such as app installation, account creation, and complex onboarding by
              leveraging WhatsApp as the learning channel.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* -------------------- Business Problem -------------------- */
function BusinessProblem() {
  const items = [
    { icon: <Clock className="h-5 w-5" />, text: "Busy parents struggle to maintain consistent learning routines." },
    { icon: <TrendingUp className="h-5 w-5" />, text: "Educational apps often have low engagement rates." },
    { icon: <Smartphone className="h-5 w-5" />, text: "Many learning platforms require app installation and setup." },
    { icon: <BookOpen className="h-5 w-5" />, text: "Children need regular vocabulary exposure for language development." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Business Problem" title="The Challenges We Set Out To Solve" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <Card key={i.text} className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                {i.icon}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{i.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Vision -------------------- */
function Vision() {
  const goals = [
    "Encourage daily learning habits.",
    "Eliminate friction to access educational content.",
    "Personalize learning based on age.",
    "Increase engagement through micro-learning.",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Product Vision" title="Where We're Headed" />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">Vision Statement</h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Enable parents to build their children's vocabulary through simple, consistent, daily learning
              experiences delivered through tools they already use.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">Product Goals</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Roles -------------------- */
function Roles() {
  const roles = [
    { icon: <Target className="h-5 w-5" />, title: "Product Owner", desc: "Defined vision, roadmap, and product strategy." },
    { icon: <Users className="h-5 w-5" />, title: "Business Analyst", desc: "Gathered requirements and designed user journeys." },
    { icon: <Layers className="h-5 w-5" />, title: "Solution Designer", desc: "Designed system architecture and workflows." },
    { icon: <Cpu className="h-5 w-5" />, title: "Full-Stack Builder", desc: "Implemented backend automation and integrations." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="My Role" title="End-to-End Ownership" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <Card key={r.title} className="card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{r.icon}</div>
              <h3 className="mt-4 font-display text-base font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Journey -------------------- */
function Journey() {
  const steps = [
    { n: 1, title: "Initial Contact", desc: 'Parent sends "Hi" to EduKids WhatsApp number.' },
    { n: 2, title: "Conversation Begins", desc: "Automated registration begins." },
    { n: 3, title: "Profile Collection", desc: "System collects Parent Name, Child Name, Child Age, and Learning Preferences." },
    { n: 4, title: "Smart Segmentation", desc: "Child is assigned to an age group." },
    { n: 5, title: "Schedule Activated", desc: "Daily learning schedule is activated." },
    { n: 6, title: "Daily Delivery", desc: "Every day the child receives 3 new vocabulary words with meanings and usage examples through WhatsApp." },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="User Journey" title="From First Hello to Daily Habit" />
        <ol className="relative mx-auto mt-12 max-w-3xl border-l-2 border-primary/30 pl-6">
          {steps.map((s) => (
            <li key={s.n} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[34px] grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                {s.n}
              </span>
              <Card>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------- Decisions -------------------- */
function Decisions() {
  const items = [
    { icon: <MessageSquare className="h-5 w-5" />, title: "Why WhatsApp?", desc: "Parents already use WhatsApp daily. No app installation required." },
    { icon: <Zap className="h-5 w-5" />, title: "Why Micro-Learning?", desc: "Small daily lessons are easier to maintain than long learning sessions." },
    { icon: <Baby className="h-5 w-5" />, title: "Why Age-Based Content?", desc: "Different age groups require different vocabulary complexity." },
    { icon: <Workflow className="h-5 w-5" />, title: "Why Automation?", desc: "Ensures consistency and scalability." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Product Decisions" title="The Thinking Behind The Build" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <Card key={i.title} className="card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{i.icon}</div>
                <h3 className="font-display text-base font-bold">{i.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{i.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Features -------------------- */
function Features() {
  const feats = [
    { icon: <MessageSquare className="h-5 w-5" />, title: "WhatsApp Registration", desc: "Simple conversational onboarding." },
    { icon: <Baby className="h-5 w-5" />, title: "Age-Based Learning Paths", desc: "Personalized vocabulary delivery." },
    { icon: <Calendar className="h-5 w-5" />, title: "Automated Daily Lessons", desc: "Scheduled educational content." },
    { icon: <BookOpen className="h-5 w-5" />, title: "Vocabulary Growth", desc: "Structured word learning." },
    { icon: <Users className="h-5 w-5" />, title: "Parent-Friendly Experience", desc: "No downloads or training required." },
    { icon: <Cloud className="h-5 w-5" />, title: "Scalable Platform", desc: "Supports growth without additional operational effort." },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Features & Capabilities" title="What EduKids Delivers" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <Card key={f.title} className="card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{f.icon}</div>
              <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Screenshots -------------------- */
function Screenshots() {
  const shots = [
    { src: "https://raw.githubusercontent.com/udaykir005/EduKidsFunctionApp/master/Images/Edukids1.jpeg", caption: "Daily vocabulary delivery in WhatsApp" },
    { src: "https://raw.githubusercontent.com/udaykir005/EduKidsFunctionApp/master/Images/Edukids2.jpeg", caption: "Word, meaning and example sentence" },
    { src: "https://raw.githubusercontent.com/udaykir005/EduKidsFunctionApp/master/Images/Edukids3.jpeg", caption: "Conversational micro-learning flow" },
    { src: "https://raw.githubusercontent.com/udaykir005/EduKidsFunctionApp/master/Images/Edukids4.jpeg", caption: "Parent-friendly daily touchpoint" },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHead eyebrow="Product Screenshots" title="See EduKids in Action" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((s, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:shadow-lg">
              <div className="aspect-[9/16] overflow-hidden bg-muted">
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------- Architecture -------------------- */
function Architecture() {
  const flow = [
    { icon: <Users className="h-4 w-4" />, label: "Parent" },
    { icon: <MessageSquare className="h-4 w-4" />, label: "WhatsApp" },
    { icon: <Send className="h-4 w-4" />, label: "Twilio" },
    { icon: <Cpu className="h-4 w-4" />, label: "Azure Functions" },
    { icon: <Database className="h-4 w-4" />, label: "SQL Server" },
    { icon: <BookOpen className="h-4 w-4" />, label: "Vocabulary Content Engine" },
    { icon: <Calendar className="h-4 w-4" />, label: "Scheduled Delivery Service" },
    { icon: <Sparkles className="h-4 w-4" />, label: "Daily Word Lessons" },
  ];
  const explainers = [
    { title: "Serverless First", desc: "Azure Functions scale on demand with zero ops overhead." },
    { title: "Channel-Native UX", desc: "Twilio bridges WhatsApp's Cloud API to internal business logic." },
    { title: "Reliable Scheduling", desc: "Timer-triggered functions ensure consistent daily delivery." },
  ];
  return (
    <section id="architecture" className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Solution Architecture" title="How EduKids Runs Under The Hood" />
        <Card className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-2">
            {flow.map((s, i) => (
              <div key={s.label}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">{s.icon}</div>
                  <span className="text-sm font-semibold">{s.label}</span>
                </div>
                {i < flow.length - 1 && <div className="py-1 text-center text-xs text-muted-foreground">↓</div>}
              </div>
            ))}
          </div>
        </Card>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {explainers.map((e) => (
            <Card key={e.title}>
              <h3 className="font-display text-base font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Tech Stack -------------------- */
function TechStack() {
  const groups = [
    { title: "Messaging", icon: <MessageSquare className="h-5 w-5" />, items: ["WhatsApp", "Twilio"] },
    { title: "Backend", icon: <Cpu className="h-5 w-5" />, items: ["Azure Functions"] },
    { title: "Database", icon: <Database className="h-5 w-5" />, items: ["SQL Server"] },
    { title: "Cloud Platform", icon: <Cloud className="h-5 w-5" />, items: ["Microsoft Azure"] },
    { title: "Automation", icon: <Workflow className="h-5 w-5" />, items: ["Azure Timer Functions"] },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Technology Stack" title="Built on Proven Cloud Foundations" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g.title}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{g.icon}</div>
                <h3 className="font-display text-base font-bold">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Results -------------------- */
function Results() {
  const kpis = [
    { icon: <Calendar className="h-5 w-5" />, title: "Daily Learning Habit Formation", desc: "Encourages continuous learning." },
    { icon: <Zap className="h-5 w-5" />, title: "Frictionless Adoption", desc: "No app installation required." },
    { icon: <Baby className="h-5 w-5" />, title: "Personalized Experience", desc: "Age-appropriate vocabulary." },
    { icon: <Bot className="h-5 w-5" />, title: "Automated Operations", desc: "Minimal manual effort." },
    { icon: <Cloud className="h-5 w-5" />, title: "Scalable Educational Platform", desc: "Supports growing user base." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Results & Impact" title="The Outcomes That Matter" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <Card key={k.title} className="card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                {k.icon}
              </div>
              <h3 className="mt-4 font-display text-base font-bold">{k.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Roadmap -------------------- */
function Roadmap() {
  const phases = [
    { n: "Phase 1", status: "Completed", title: "WhatsApp Registration" },
    { n: "Phase 2", status: "Completed", title: "Daily Vocabulary Delivery" },
    { n: "Phase 3", status: "Planned", title: "Interactive Vocabulary Quizzes" },
    { n: "Phase 4", status: "Planned", title: "Parent Progress Reports" },
    { n: "Phase 5", status: "Planned", title: "Gamification and Rewards" },
    { n: "Phase 6", status: "Planned", title: "AI-Based Personalized Learning Paths" },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Future Roadmap" title="What's Next" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((p) => {
            const done = p.status === "Completed";
            return (
              <Card key={p.n} className="card-hover">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{p.n}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    done ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                  }`}>
                    {done ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />} {p.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{p.title}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Lessons -------------------- */
function Lessons() {
  const items = [
    { icon: <Target className="h-5 w-5" />, title: "Product Insights", desc: "Simplicity increases adoption." },
    { icon: <Users className="h-5 w-5" />, title: "User Experience Insights", desc: "Parents prefer solutions integrated into existing habits." },
    { icon: <Cpu className="h-5 w-5" />, title: "Technical Insights", desc: "Automation is critical for scalability." },
    { icon: <TrendingUp className="h-5 w-5" />, title: "Business Insights", desc: "Micro-learning creates sustainable engagement." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Lessons Learned" title="Key Takeaways From Building EduKids" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <Card key={i.title} className="card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{i.icon}</div>
                <h3 className="font-display text-base font-bold">{i.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{i.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Takeaway -------------------- */
function Takeaway() {
  const demos = [
    "Product Strategy",
    "Product Ownership",
    "User-Centered Design",
    "Workflow Automation",
    "Educational Technology Innovation",
    "Cloud Architecture",
    "End-to-End Product Delivery",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <Card className="mx-auto max-w-4xl bg-gradient-to-br from-primary/10 via-card to-transparent">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold">What This Project Demonstrates</h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {demos.map((d) => (
              <span key={d} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {d}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <Card className="mx-auto max-w-3xl text-center">
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Interested in discussing Product Management, Educational Technology, or AI-Driven Learning Solutions?
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              <Download className="h-4 w-4" /> Download Resume
            </Link>
            <Link to="/" hash="projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              View Other Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
