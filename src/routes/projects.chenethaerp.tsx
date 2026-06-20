import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Users, Workflow, Cloud,
  Database, Calendar, Target, Lightbulb, Layers, Cpu, Linkedin, Download,
  ShieldCheck, TrendingUp, Factory, Package, FileText, Truck, Receipt,
  MessageSquare, BarChart3, Lock, Server, Boxes, Wrench, Award, Building2, Github,
} from "lucide-react";

export const Route = createFileRoute("/projects/chenethaerp")({
  head: () => ({
    meta: [
      { title: "ChenethaERP — Textile Manufacturing ERP | Case Study" },
      { name: "description", content: "Case study: ChenethaERP — an end-to-end ERP for textile manufacturing with AWS cloud document management and Twilio WhatsApp automation. Designed, built, and supported solo." },
      { property: "og:title", content: "ChenethaERP — Textile Manufacturing ERP" },
      { property: "og:description", content: "Production-grade ERP digitizing manufacturing, inventory, accounting, dispatch, and customer communication." },
    ],
    links: [{ rel: "canonical", href: "/projects/chenethaerp" }],
  }),
  component: ChenethaERPCaseStudy,
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

const TECH = [
  ".NET", "C#", "Windows Forms", "SQL Server", "AWS",
  "Twilio WhatsApp API", "RBAC", "Crystal Reports", "ERP", "Manufacturing Software",
];

const METRICS = [
  { label: "Business Functions", value: "8+", icon: <Building2 className="h-5 w-5" /> },
  { label: "Core Modules", value: "20+", icon: <Boxes className="h-5 w-5" /> },
  { label: "Cloud + WhatsApp", value: "Automated", icon: <Cloud className="h-5 w-5" /> },
  { label: "Single Developer", value: "End-to-End", icon: <Wrench className="h-5 w-5" /> },
];

/* -------------------- Page -------------------- */
function ChenethaERPCaseStudy() {
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
      <Problem />
      <Role />
      <Features />
      <Screenshots />
      <Workflow_ />
      <WhatsApp />
      <AWSIntegration />
      <Security />
      <Architecture />
      <Achievements />
      <Impact />
      <Learnings />
      <CTA />
    </main>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-24">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: "radial-gradient(circle at 15% 10%, oklch(0.7 0.18 250 / 0.18), transparent 45%), radial-gradient(circle at 85% 30%, oklch(0.6 0.2 270 / 0.15), transparent 45%)" }}
      />
      <div className="container-page">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Enterprise Case Study · ERP · Manufacturing
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Cheneth<span className="text-gradient">aERP</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Complete ERP Platform for Textile Manufacturing Operations
        </p>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
          A production-grade ERP platform developed from the ground up to streamline textile
          manufacturing, inventory management, accounting, logistics, reporting, and customer
          communication. Built and maintained entirely by me, the platform supports daily operations
          across multiple business functions and integrates cloud technologies to automate
          customer-facing workflows.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform">
            Contact Me <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="https://github.com/udaykir005/ChenethaERP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
            <Github className="h-4 w-4" /> View on GitHub
          </a>
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
            More Projects
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {METRICS.map((m) => (
            <Card key={m.label}>
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">{m.icon}</div>
              <div className="mt-3 font-display text-2xl font-bold tracking-tight">{m.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROBLEM -------------------- */
function Problem() {
  const items = [
    "Manual production tracking",
    "Inventory discrepancies",
    "Delayed invoicing",
    "Poor visibility into loom production",
    "Difficult payment reconciliation",
    "Inefficient dispatch management",
    "Manual customer communications",
    "Lack of centralized reporting",
    "Limited operational insights",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead
          eyebrow="The Problem"
          title="Business Challenge"
          sub="Before ChenethaERP, textile manufacturing operations depended heavily on spreadsheets, paper records, manual calculations, and disconnected business processes."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <Card key={i} className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{i}</span>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          The organization needed a single integrated platform capable of managing manufacturing,
          inventory, sales, accounting, and customer operations.
        </p>
      </div>
    </section>
  );
}

/* -------------------- MY ROLE -------------------- */
function Role() {
  const roles = [
    "Product Manager", "Business Analyst", "Solution Architect",
    "Lead Developer", "Database Designer", "ERP Consultant",
  ];
  const responsibilities = [
    "Stakeholder interviews", "Requirements gathering", "Business process mapping",
    "Product strategy", "UI/UX design", "Database design",
    "Application architecture", "Development", "Testing",
    "Deployment", "User training", "Production support",
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="My Contribution" title="Roles & Responsibilities" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Roles</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {r}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Responsibilities</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {responsibilities.map((r) => (
                <div key={r} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {r}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6 text-center">
          <p className="text-base font-semibold text-foreground">
            The entire platform was conceptualized, architected, developed, and deployed by me.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */
function Features() {
  const groups = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Customer & Sales Management",
      items: ["Customer Management", "Customer Master Data", "Sales Order Entry", "Invoice Generation", "Invoice Tracking", "Customer Payment Monitoring", "Monthly Due Management", "Customer Ledger Tracking"],
    },
    {
      icon: <Factory className="h-5 w-5" />,
      title: "Manufacturing Operations",
      items: ["Beam Stock Entry", "Loom Production Recording", "Processing Job Management", "Ready Stock Management", "Production Tracking", "Manufacturing Workflow Management"],
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "Inventory & Warehouse",
      items: ["Bale Management", "Packing Slip Generation", "Label Printing", "Draw Label Printing", "Inventory Tracking", "Warehouse Operations"],
    },
    {
      icon: <Receipt className="h-5 w-5" />,
      title: "Finance & Accounting",
      items: ["Payment Posting", "Check Management", "Payment Allocation", "Invoice Reconciliation", "Journal Entries", "Financial Tracking"],
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Logistics & Dispatch",
      items: ["Transport Details Management", "Dispatch Tracking", "Shipment Coordination", "Delivery Management"],
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Compliance & Reporting",
      items: ["GST Reporting", "Sales Reports", "Payment Reports", "Production Reports", "Inventory Reports", "Management Reporting"],
    },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Platform Capabilities" title="Features Across the Business" sub="A unified ERP covering the full textile manufacturing lifecycle." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <Card key={g.title} className="card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">{g.icon}</div>
                <h3 className="font-display text-lg font-bold tracking-tight">{g.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {i}
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

/* -------------------- SCREENSHOTS -------------------- */
function Screenshots() {
  const shots = [
    { src: "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/chenethaERP/Image1.png", caption: "Dashboard & navigation" },
    { src: "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/chenethaERP/Image2.png", caption: "Sales & invoice management" },
    { src: "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/chenethaERP/Image3.png", caption: "Manufacturing operations" },
    { src: "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/chenethaERP/Image4.png", caption: "Inventory & dispatch" },
    { src: "https://raw.githubusercontent.com/udaykir005/udaykiran-folio/refs/heads/main/images/chenethaERP/Image5.png", caption: "Reports & analytics" },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Product Screenshots" title="Inside ChenethaERP" sub="A look at the desktop application powering daily operations." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <figure key={s.src} className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
              <img src={s.src} alt={s.caption} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105" />
              <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WORKFLOW -------------------- */
function Workflow_() {
  const steps = [
    "Customer Order", "Sales Order Entry", "Beam Stock Allocation", "Loom Production",
    "Processing Jobs", "Ready Stock Creation", "Packing & Bale Management",
    "Invoice Generation", "Dispatch & Transport", "Payment Collection",
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="End-to-End Process" title="Textile Manufacturing Workflow" sub="From customer order to payment collection — every step digitized." />
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="grid gap-3">
            {steps.map((s, idx) => (
              <li key={s} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="font-medium">{s}</div>
                {idx < steps.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHATSAPP -------------------- */
function WhatsApp() {
  const caps = ["Invoice PDF delivery", "Order status updates", "Customer notifications", "Business communication workflows", "Instant document sharing"];
  const value = ["Faster communication", "Reduced manual effort", "Better customer experience", "Improved operational efficiency"];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Automation" title="Customer Communication Automation" sub="Integrated Twilio WhatsApp Business API directly into the ERP to automate communications and document delivery." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary"><MessageSquare className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-bold">Capabilities</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {caps.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary"><TrendingUp className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-bold">Business Value</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {value.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {v}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- AWS -------------------- */
function AWSIntegration() {
  const flow = ["Invoice Generated", "PDF Created", "Uploaded to AWS Storage", "Secure Access URL Generated", "Twilio WhatsApp Triggered", "Invoice Delivered to Customer"];
  const benefits = ["Secure document storage", "Automated delivery", "Reduced operational effort", "Improved accessibility", "Reliable document management"];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Cloud" title="AWS Cloud-Based Invoice Management" sub="Cloud-native invoice delivery designed and implemented using AWS services." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary"><Cloud className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-bold">Delivery Workflow</h3>
            </div>
            <ol className="mt-5 space-y-2">
              {flow.map((s, i) => (
                <li key={s} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3 text-sm">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary"><Award className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-bold">Benefits</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECURITY -------------------- */
function Security() {
  const items = ["Role-Based Access Control (RBAC)", "User Authentication", "Permission Management", "Screen-Level Security", "Report-Level Security", "Controlled Operational Access"];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Enterprise Security" title="Security & Access Control" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="flex flex-col items-center justify-center text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
              <Lock className="h-9 w-9" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">RBAC Enforced</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every screen, report, and operation is scoped by role — ensuring users only access what they need.
            </p>
          </Card>
          <Card>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl border border-border bg-background/40 p-3 text-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {i}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ARCHITECTURE -------------------- */
function Architecture() {
  const layers = [
    { icon: <Users className="h-5 w-5" />, label: "Users", sub: "Production · Sales · Accounts · Dispatch" },
    { icon: <Cpu className="h-5 w-5" />, label: "ChenethaERP Desktop Application", sub: ".NET Windows Forms" },
    { icon: <Layers className="h-5 w-5" />, label: "Business Services Layer", sub: "Domain Logic · Validations · Workflows" },
    { icon: <Database className="h-5 w-5" />, label: "SQL Server Database", sub: "Master Data · Transactions · Ledgers" },
    { icon: <FileText className="h-5 w-5" />, label: "Reporting Engine", sub: "Crystal Reports · Management Reports" },
    { icon: <Cloud className="h-5 w-5" />, label: "AWS Cloud Storage", sub: "Invoice PDFs · Secure URLs" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Twilio WhatsApp Business API", sub: "Automated Delivery" },
    { icon: <Target className="h-5 w-5" />, label: "Customers", sub: "Invoice PDFs & Notifications" },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Architecture" title="System Architecture" sub="From operator input to customer delivery — the layered stack." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {layers.map((l, i) => (
            <div key={l.label}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">{l.icon}</div>
                <div className="min-w-0">
                  <div className="font-semibold">{l.label}</div>
                  <div className="text-xs text-muted-foreground">{l.sub}</div>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1 text-muted-foreground">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ACHIEVEMENTS -------------------- */
function Achievements() {
  const items = [
    "Built complete ERP platform from scratch",
    "Single developer ownership",
    "Supports entire textile manufacturing workflow",
    "Used daily by operations teams",
    "Implemented cloud integrations",
    "Automated customer communications",
    "Implemented RBAC security",
    "Centralized enterprise reporting",
    "Reduced manual processes",
    "Improved operational visibility",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Results" title="Key Achievements" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Card key={i} className="flex items-start gap-3 card-hover">
              <Award className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{i}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- IMPACT -------------------- */
function Impact() {
  const items = [
    "Centralized operations", "Improved inventory visibility", "Faster invoicing",
    "Better production tracking", "Reduced manual effort", "Improved customer communication",
    "Better financial tracking", "Increased operational efficiency", "Enhanced reporting capabilities",
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <SectionHead eyebrow="Outcomes" title="Business Impact" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <Card key={i} className="flex items-start gap-3 card-hover">
              <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{i}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- LEARNINGS -------------------- */
function Learnings() {
  const items = [
    "ERP Product Design", "Manufacturing Process Optimization", "Stakeholder Management",
    "Business Process Automation", "Enterprise Workflow Design", "User Adoption Strategies",
    "Digital Transformation", "Reporting & Analytics", "Customer Communication Automation",
    "End-to-End Product Ownership",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHead eyebrow="Product Leadership" title="Key Learnings" sub="What this end-to-end product ownership experience reinforced." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {items.map((i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground card-hover">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-card">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Let's Connect</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Interested in discussing ERP modernization, manufacturing technology, enterprise software products,
            AI-driven operations, or product leadership opportunities?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/udaykiranpottabathula/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a href="https://github.com/udaykir005/ChenethaERP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              <Github className="h-4 w-4" /> View on GitHub
            </a>
            <Link to="/" hash="resume" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              <Download className="h-4 w-4" /> View Resume
            </Link>
            <Link to="/" hash="projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              More Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
