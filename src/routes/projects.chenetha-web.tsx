import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Cloud, Database, Layers, Cpu,
  Linkedin, Download, ShieldCheck, Globe, Server, Users, Workflow as WorkflowIcon,
  Package, FileText, BarChart3, Lock, Boxes, Lightbulb, Target, Sparkles,
  MonitorSmartphone, Rocket, GitBranch, Award, Building2, Github,
} from "lucide-react";

export const Route = createFileRoute("/projects/chenetha-web")({
  head: () => ({
    meta: [
      { title: "Chenetha ERP Web Platform — Legacy Modernization Case Study" },
      { name: "description", content: "Case study: modernizing a legacy textile desktop ERP into a Blazor + Azure web platform. Product ownership, business analysis, cloud transformation, and solution delivery." },
      { property: "og:title", content: "Chenetha ERP Web Platform — Modernization Case Study" },
      { property: "og:description", content: "From legacy desktop ERP to cloud-hosted Blazor web platform on Microsoft Azure." },
      { property: "og:url", content: "https://udaykiran.net/projects/chenetha-web" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://udaykiran.net/projects/chenetha-web" }],
  }),
  component: ChenethaWebCaseStudy,
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

const TECH = ["Blazor", ".NET 8", "SQL Server", "Azure App Service", "Azure SQL Database", "REST APIs"];

/* ---------- Page ---------- */
function ChenethaWebCaseStudy() {
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

      <Hero />
      <Summary />
      <Problem />
      <Vision />
      <Role />
      <Journey />
      <Discovery />
      <Features />
      <Screenshots />
      <UserJourney />
      <Architecture />
      <AzureSection />
      <TechStack />
      <Decisions />
      <Results />
      <Lessons />
      <Roadmap />
      <Takeaway />
      <CTA />
    </main>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
      <div className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Production Application · Enterprise Business Application
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Chenetha ERP <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Modernization Platform</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Migrated critical textile business workflows from a legacy desktop application to a modern Blazor-based web platform hosted on Microsoft Azure.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90">
                <Server className="h-4 w-4" /> View Architecture
              </a>
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Transformation flow */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-muted/40">
              <div className="space-y-3">
                {[
                  { icon: <MonitorSmartphone className="h-4 w-4" />, label: "Legacy Desktop ERP", muted: true },
                  { icon: <Lightbulb className="h-4 w-4" />, label: "Business Process Analysis" },
                  { icon: <GitBranch className="h-4 w-4" />, label: "Web Modernization" },
                  { icon: <Cloud className="h-4 w-4" />, label: "Cloud Deployment" },
                  { icon: <Globe className="h-4 w-4" />, label: "Anywhere Access", highlight: true },
                ].map((step, i) => (
                  <div key={step.label}>
                    <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${step.highlight ? "border-primary/40 bg-primary/5" : step.muted ? "border-dashed border-border bg-muted/30 text-muted-foreground" : "border-border bg-card"}`}>
                      <span className={`grid h-8 w-8 place-items-center rounded-lg ${step.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>{step.icon}</span>
                      <span className="text-sm font-semibold">{step.label}</span>
                    </div>
                    {i < 4 && <div className="ml-7 h-3 w-px bg-border" />}
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

/* ---------- Executive Summary ---------- */
function Summary() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="EXECUTIVE SUMMARY" title="About the project" />
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Chenetha ERP is a textile business management system originally developed as a desktop application. While the desktop version successfully managed critical business operations, users faced limitations related to accessibility, deployment, maintenance, and remote access.
          </p>
          <p>
            To address these challenges, a modern web-based version was developed using <span className="font-semibold text-foreground">Blazor</span> and hosted on <span className="font-semibold text-foreground">Microsoft Azure</span>. The web platform focuses on delivering the most frequently used and business-critical ERP functions while providing a more intuitive user experience and broader accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const challenges = [
    { icon: <MonitorSmartphone className="h-5 w-5" />, text: "Users could only access the ERP from installed desktop environments." },
    { icon: <Download className="h-5 w-5" />, text: "Software deployment and updates required manual installation." },
    { icon: <Globe className="h-5 w-5" />, text: "Business users needed remote access to operational data." },
    { icon: <Layers className="h-5 w-5" />, text: "The legacy UI was difficult to use on modern devices." },
    { icon: <Rocket className="h-5 w-5" />, text: "Scaling the application for future growth was challenging." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="BUSINESS PROBLEM" title="What the legacy app couldn't solve" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <Card key={i} className="card-hover">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-destructive/10 text-destructive">{c.icon}</div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{c.text}</p>
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
    "Modernize legacy technology",
    "Improve user experience",
    "Increase accessibility",
    "Reduce deployment overhead",
    "Support future scalability",
    "Enable cloud adoption",
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT VISION" title="A cloud-first ERP, accessible from anywhere" />
        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="bg-gradient-to-br from-blue-500/10 via-card to-cyan-500/5 border-primary/20">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary"><Target className="h-6 w-6" /></span>
              <div>
                <h3 className="font-display text-xl font-bold">Vision Statement</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Enable textile business users to access critical ERP functionality from anywhere through a secure, cloud-hosted web application.
                </p>
              </div>
            </div>
          </Card>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {objectives.map((o) => (
              <div key={o} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {o}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Role ---------- */
function Role() {
  const roles = [
    { icon: <Target className="h-5 w-5" />, title: "Product Owner", desc: "Defined modernization roadmap and prioritized features." },
    { icon: <Lightbulb className="h-5 w-5" />, title: "Business Analyst", desc: "Analyzed desktop workflows and identified core business functions." },
    { icon: <Layers className="h-5 w-5" />, title: "Solution Architect", desc: "Designed application architecture and cloud deployment strategy." },
    { icon: <Cpu className="h-5 w-5" />, title: "Full-Stack Developer", desc: "Built web application using Blazor and .NET technologies." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="MY ROLE" title="Wearing every hat from discovery to delivery" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <Card key={r.title} className="card-hover">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">{r.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Legacy vs Modern ---------- */
function Journey() {
  const legacy = ["Windows-only access", "Local installations", "Manual updates", "Limited scalability", "Traditional UI"];
  const modern = ["Browser-based access", "Cloud-hosted", "Centralized deployment", "Scalable architecture", "Modern responsive UI"];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="LEGACY → MODERN" title="The transformation at a glance" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border-dashed">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <MonitorSmartphone className="h-4 w-4" /> Legacy Desktop ERP
            </div>
            <ul className="mt-5 space-y-3">
              {legacy.map((l) => (
                <li key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" /> {l}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-primary/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Globe className="h-4 w-4" /> Modern Web ERP
            </div>
            <ul className="mt-5 space-y-3">
              {modern.map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {m}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Discovery ---------- */
function Discovery() {
  const steps = [
    { icon: <Lightbulb className="h-5 w-5" />, title: "Discovery Process", desc: "Evaluate desktop ERP usage patterns." },
    { icon: <Users className="h-5 w-5" />, title: "Stakeholder Interviews", desc: "Identify frequently used business functions." },
    { icon: <Target className="h-5 w-5" />, title: "Prioritization Strategy", desc: "Select high-value workflows for initial release." },
    { icon: <Rocket className="h-5 w-5" />, title: "MVP Definition", desc: "Deliver core functionality before full migration." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT MANAGEMENT" title="Business analysis & feature prioritization" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <Card className="card-hover h-full">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">{s.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const features = [
    { icon: <Users className="h-5 w-5" />, title: "Customer Management", desc: "Manage customer information and business relationships." },
    { icon: <Package className="h-5 w-5" />, title: "Product Catalog Management", desc: "Maintain textile product information." },
    { icon: <FileText className="h-5 w-5" />, title: "Sales Order Processing", desc: "Track and manage sales orders." },
    { icon: <Boxes className="h-5 w-5" />, title: "Inventory Visibility", desc: "Access inventory information." },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Reporting & Analytics", desc: "Business insights and operational reporting." },
    { icon: <Lock className="h-5 w-5" />, title: "User Management", desc: "Role-based access and security." },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="CORE FUNCTIONALITIES" title="What shipped in the first release" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="card-hover">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-primary">{f.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- User Journey ---------- */
function UserJourney() {
  const steps = ["User Login", "Dashboard", "Customer Management", "Order Processing", "Inventory Tracking", "Reports & Insights"];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="USER JOURNEY" title="From login to insights" />
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-soft">{s}</div>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Architecture ---------- */
function Architecture() {
  const layers = [
    { icon: <Globe className="h-4 w-4" />, label: "Web Browser" },
    { icon: <Layers className="h-4 w-4" />, label: "Blazor Frontend" },
    { icon: <Cpu className="h-4 w-4" />, label: ".NET Backend Services" },
    { icon: <WorkflowIcon className="h-4 w-4" />, label: "Business Logic Layer" },
    { icon: <Database className="h-4 w-4" />, label: "SQL Server Database" },
    { icon: <Cloud className="h-4 w-4" />, label: "Azure Hosting Infrastructure" },
  ];
  return (
    <section id="architecture" className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="SOLUTION ARCHITECTURE" title="A clean, layered web architecture on Azure" />
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {layers.map((l, i) => (
            <div key={l.label}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">{l.icon}</span>
                <span className="text-sm font-semibold">{l.label}</span>
              </div>
              {i < layers.length - 1 && <div className="ml-7 h-3 w-px bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Azure ---------- */
function AzureSection() {
  const why = ["Secure cloud hosting", "High availability", "Simplified deployment", "Scalability", "Centralized management"];
  const services = [
    { icon: <Server className="h-5 w-5" />, name: "Azure App Service" },
    { icon: <Database className="h-5 w-5" />, name: "Azure SQL Database" },
    { icon: <Boxes className="h-5 w-5" />, name: "Azure Storage" },
    { icon: <BarChart3 className="h-5 w-5" />, name: "Azure Monitoring" },
  ];
  return (
    <section className="border-b border-border bg-gradient-to-br from-blue-500/5 via-surface to-cyan-500/5 py-20">
      <div className="container-page">
        <SectionHead eyebrow="CLOUD TRANSFORMATION" title="Why Microsoft Azure" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="font-display text-lg font-bold">Why Azure?</h3>
            <ul className="mt-5 space-y-3">
              {why.map((w) => (
                <li key={w} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {w}
                </li>
              ))}
            </ul>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <Card key={s.name} className="card-hover text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">{s.icon}</span>
                <p className="mt-3 text-sm font-semibold">{s.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  const groups = [
    { title: "Frontend", items: ["Blazor", "HTML", "CSS", "Bootstrap"] },
    { title: "Backend", items: [".NET", "C#", "REST APIs"] },
    { title: "Database", items: ["SQL Server"] },
    { title: "Cloud", items: ["Microsoft Azure", "Azure App Service", "Azure SQL Database"] },
    { title: "DevOps", items: ["GitHub", "CI/CD Pipelines"] },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="TECHNOLOGY STACK" title="Tools behind the build" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g.title} className="card-hover">
              <h3 className="font-display text-base font-bold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{i}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Decisions ---------- */
function Decisions() {
  const items = [
    { title: "Why Modernize?", desc: "Improve accessibility and reduce operational friction." },
    { title: "Why Blazor?", desc: "Leverage existing .NET expertise while building modern web experiences." },
    { title: "Why Azure?", desc: "Provide secure, scalable cloud infrastructure." },
    { title: "Why MVP Approach?", desc: "Deliver value quickly while minimizing migration risk." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="PRODUCT DECISIONS" title="The thinking behind the choices" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((d) => (
            <Card key={d.title} className="card-hover">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-display text-lg font-bold">{d.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  const kpis = [
    { icon: <Globe className="h-5 w-5" />, title: "Anywhere Access", desc: "Users can access the ERP through a web browser." },
    { icon: <Rocket className="h-5 w-5" />, title: "Reduced Deployment Effort", desc: "Centralized application updates." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Improved User Experience", desc: "Modern and intuitive interface." },
    { icon: <Layers className="h-5 w-5" />, title: "Foundation for Future Growth", desc: "Supports continued ERP modernization." },
    { icon: <Cloud className="h-5 w-5" />, title: "Cloud Readiness", desc: "Prepared for future integrations and expansion." },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="RESULTS & IMPACT" title="What changed for the business" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <Card key={k.title} className="card-hover bg-gradient-to-br from-card to-blue-500/5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">{k.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{k.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{k.desc}</p>
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
    { title: "Product Lessons", desc: "Prioritization is critical during modernization initiatives." },
    { title: "Technical Lessons", desc: "Legacy-to-web migration requires balancing speed and scope." },
    { title: "User Experience Lessons", desc: "Users value simplicity and accessibility." },
    { title: "Business Lessons", desc: "Incremental modernization reduces implementation risk." },
  ];
  return (
    <section className="border-b border-border bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="LESSONS LEARNED" title="What this project taught me" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {lessons.map((l) => (
            <Card key={l.title} className="card-hover">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <h3 className="font-display text-lg font-bold">{l.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Screenshots ---------- */
function Screenshots() {
  const base = "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/ChenethaWeb";
  const shots = [
    { src: `${base}/Image1.png`, title: "Dashboard Overview" },
    { src: `${base}/Image2.png`, title: "Operations Module" },
    { src: `${base}/Image3.png`, title: "Inventory Management" },
    { src: `${base}/Image4.png`, title: "Reports & Analytics" },
    { src: `${base}/Image5.png`, title: "Administration" },
  ];
  return (
    <section className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Application Screenshots</h2>
        <p className="mb-8 text-muted-foreground">A look at the Chenetha ERP web platform in action.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {shots.map((s) => (
            <figure key={s.src} className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition hover:shadow-md">
              <a href={s.src} target="_blank" rel="noopener noreferrer">
                <img src={s.src} alt={`Chenetha ERP Web - ${s.title}`} loading="lazy" className="h-auto w-full object-cover" />
              </a>
              <figcaption className="border-t border-border px-4 py-2 text-sm font-medium text-muted-foreground">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Roadmap ---------- */
function Roadmap() {
  const phases = [
    { phase: "Phase 1", status: "Completed", title: "Core ERP Functionality" },
    { phase: "Phase 2", status: "Completed", title: "Advanced Reporting" },
    { phase: "Phase 3", status: "Completed", title: "Mobile Optimization" },
    { phase: "Phase 4", status: "Completed", title: "Workflow Automation" },
    { phase: "Phase 5", status: "Completed", title: "AI-Powered Forecasting & Insights" },
    { phase: "Phase 6", status: "Planned", title: "Complete Desktop-to-Web Migration" },
  ];
  return (
    <section className="border-b border-border py-20">
      <div className="container-page">
        <SectionHead eyebrow="FUTURE ROADMAP" title="What's next" />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative space-y-4 border-l-2 border-border pl-6">
            {phases.map((p) => (
              <div key={p.phase} className="relative">
                <span className={`absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full border-2 ${p.status === "Completed" ? "border-primary bg-primary" : "border-border bg-card"}`}>
                  {p.status === "Completed" && <CheckCircle2 className="h-3 w-3 text-primary-foreground" />}
                </span>
                <Card className="card-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{p.phase}</span>
                      <h3 className="mt-1 font-display text-base font-bold">{p.title}</h3>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${p.status === "Completed" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>{p.status}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Takeaway ---------- */
function Takeaway() {
  const skills = [
    "Product Ownership", "Business Analysis", "Legacy System Modernization", "Enterprise Application Design",
    "Cloud Transformation", "Azure Architecture", "Stakeholder Management", "Feature Prioritization", "Full Lifecycle Product Delivery",
  ];
  return (
    <section className="border-b border-border bg-gradient-to-br from-blue-500/10 via-surface to-cyan-500/5 py-20">
      <div className="container-page">
        <SectionHead eyebrow="RECRUITER TAKEAWAY" title="What this project demonstrates" />
        <div className="mx-auto mt-12 max-w-4xl">
          <Card className="bg-card/80 backdrop-blur">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium card-hover">
                  <Award className="h-3.5 w-3.5 text-primary" /> {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-20">
      <div className="container-page">
        <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-transparent">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Let's talk about modernization</h2>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                Interested in discussing ERP Modernization, Product Ownership, Business Analysis, or Cloud Transformation?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/udaykiran-pottabathula/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-white/90">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                <Download className="h-4 w-4" /> Download Resume
              </Link>
              <Link to="/" hash="projects" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                View Other Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
