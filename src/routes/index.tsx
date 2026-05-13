import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Play, Clock, Flame, Trophy, Award, Sparkles, ChevronRight,
  Bookmark, Download, CheckCircle2, Circle, PlayCircle, Search, Bell,
  Home, BarChart3, Compass, Settings, GraduationCap, Target, Zap,
  TrendingUp, Calendar, FileText, Lock, Star, ArrowRight, Plus,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Continue Learning — Lumen LMS" },
      { name: "description", content: "Resume your courses, track progress, and stay consistent with Lumen's Continue Learning dashboard." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <TopBar />
          <main className="px-10 py-8 space-y-10 max-w-[1400px] mx-auto">
            <Greeting />
            <HeroContinue />
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                <SectionHeader title="Active courses" subtitle="Pick up where you left off" action="View all" />
                <ActiveCourses />
              </div>
              <div className="space-y-6">
                <SectionHeader title="This week" subtitle="Your learning rhythm" />
                <AnalyticsWidget />
                <StreakCard />
              </div>
            </div>
            <div>
              <SectionHeader title="Recommended for you" subtitle="Curated by AI based on your activity" badge="AI" />
              <Recommendations />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <SectionHeader title="Course continuation" subtitle="Inside: Advanced React Patterns · Module 4" />
                <CourseContinuation />
              </div>
              <div className="space-y-6">
                <SectionHeader title="Achievements" subtitle="Recent milestones" />
                <Achievements />
                <DailyGoal />
              </div>
            </div>
            <div>
              <SectionHeader title="Empty state preview" subtitle="What new learners see" />
              <EmptyState />
            </div>
            <footer className="pt-8 pb-12 text-xs text-muted-foreground border-t border-border">
              Lumen LMS · Continue Learning · Designed for focus, built for retention.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Layout ───────────── */

function Sidebar() {
  const items = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BookOpen, label: "My Courses" },
    { icon: Compass, label: "Explore" },
    { icon: BarChart3, label: "Progress" },
    { icon: Trophy, label: "Achievements" },
    { icon: Calendar, label: "Schedule" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <aside className="w-60 shrink-0 h-screen sticky top-0 border-r border-border bg-card px-4 py-6 flex flex-col gap-1">
      <div className="flex items-center gap-2 px-3 pb-6">
        <div className="h-9 w-9 rounded-xl bg-primary grid place-items-center">
          <GraduationCap className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-semibold tracking-tight">Lumen</div>
          <div className="text-[11px] text-muted-foreground -mt-0.5">Learning OS</div>
        </div>
      </div>
      {items.map((it) => (
        <button
          key={it.label}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
            it.active
              ? "bg-primary-soft text-primary font-medium"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          <it.icon className="h-4 w-4" />
          {it.label}
        </button>
      ))}
      <div className="mt-auto rounded-xl bg-gradient-to-br from-primary-soft to-accent p-4">
        <Sparkles className="h-5 w-5 text-primary mb-2" />
        <div className="text-sm font-semibold text-foreground">Upgrade to Pro</div>
        <div className="text-xs text-muted-foreground mt-1 mb-3">Unlock certificates & mentor sessions.</div>
        <Button size="sm" className="w-full">Upgrade</Button>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-background/80 border-b border-border">
      <div className="px-10 h-16 flex items-center gap-6 max-w-[1400px] mx-auto">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search courses, lessons, instructors…"
            className="w-full h-10 pl-9 pr-4 rounded-lg bg-secondary border border-transparent focus:border-ring focus:bg-card outline-none text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Flame className="h-4 w-4 text-streak" />
          <span className="text-foreground font-medium">7</span> day streak
        </div>
        <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-secondary text-muted-foreground">
          <Bell className="h-4 w-4" />
        </button>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">AM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

/* ───────────── Sections ───────────── */

function Greeting() {
  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="text-sm text-muted-foreground">Wednesday, May 13</div>
        <h1 className="text-3xl font-semibold tracking-tight mt-1">Welcome back, Amelia 👋</h1>
        <p className="text-muted-foreground mt-1.5">You're <span className="text-foreground font-medium">2 lessons</span> away from completing this week's goal.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">View schedule</Button>
        <Button><Plus className="h-4 w-4" /> Add course</Button>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle, action, badge }: { title: string; subtitle?: string; action?: string; badge?: string }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          {badge && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-primary-soft text-primary">
              <Sparkles className="h-3 w-3" /> {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      {action && (
        <button className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          {action} <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

function HeroContinue() {
  return (
    <div
      className="rounded-3xl p-8 text-white relative overflow-hidden shadow-[var(--shadow-elevated)]"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute right-20 bottom-0 h-40 w-40 rounded-full bg-white/5 blur-xl" />
      <div className="relative grid grid-cols-5 gap-8 items-center">
        <div className="col-span-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/15 backdrop-blur">
            <PlayCircle className="h-3.5 w-3.5" /> Resume where you left off
          </div>
          <h2 className="text-3xl font-semibold tracking-tight mt-4 leading-tight">
            Advanced React Patterns
          </h2>
          <div className="text-white/80 text-sm mt-1">Module 4 · Lesson 3 — <span className="text-white">Compound Components</span></div>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <Stat label="Progress" value="68%" />
            <Divider />
            <Stat label="Lessons left" value="9" />
            <Divider />
            <Stat label="Time left" value="2h 40m" />
          </div>

          <div className="mt-6">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: "68%" }} />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Play className="h-4 w-4 fill-current" /> Resume learning
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/15 hover:text-white">
              View syllabus
            </Button>
          </div>
        </div>

        <div className="col-span-2">
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5">
            <div className="text-xs uppercase tracking-wider text-white/70 font-medium">Recent activity</div>
            <ul className="mt-3 space-y-3">
              {[
                { t: "Completed", l: "useReducer deep dive", d: "2h ago", icon: CheckCircle2 },
                { t: "Bookmarked", l: "Context performance", d: "Yesterday", icon: Bookmark },
                { t: "Started", l: "Compound Components", d: "Yesterday", icon: PlayCircle },
              ].map((a, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white/15 grid place-items-center">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm truncate">{a.l}</div>
                    <div className="text-xs text-white/60">{a.t} · {a.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}
function Divider() { return <div className="h-8 w-px bg-white/20" />; }

/* ───────────── Active courses ───────────── */

const courses = [
  {
    title: "Design Systems with Figma",
    instructor: "Mira Chen",
    progress: 82,
    lesson: "Lesson 14 — Tokens & themes",
    difficulty: "Intermediate",
    time: "1h 10m left",
    color: "from-violet-500 to-fuchsia-500",
    icon: "🎨",
  },
  {
    title: "Data Structures in Python",
    instructor: "Dr. Arjun Patel",
    progress: 45,
    lesson: "Lesson 8 — Hash maps",
    difficulty: "Beginner",
    time: "4h 20m left",
    color: "from-emerald-500 to-teal-500",
    icon: "🐍",
  },
  {
    title: "Product Strategy Foundations",
    instructor: "Lena Hoffmann",
    progress: 28,
    lesson: "Lesson 4 — Market sizing",
    difficulty: "Advanced",
    time: "6h 05m left",
    color: "from-amber-500 to-orange-500",
    icon: "📈",
  },
  {
    title: "Spoken Spanish A2",
    instructor: "Carla Vega",
    progress: 61,
    lesson: "Lesson 22 — Past tense",
    difficulty: "Beginner",
    time: "3h 15m left",
    color: "from-sky-500 to-indigo-500",
    icon: "🗣️",
  },
];

function ActiveCourses() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {courses.map((c) => <CourseCard key={c.title} {...c} />)}
    </div>
  );
}

function CourseCard(c: (typeof courses)[number]) {
  const diffColor =
    c.difficulty === "Beginner" ? "bg-success-soft text-success"
    : c.difficulty === "Intermediate" ? "bg-warning-soft text-warning"
    : "bg-primary-soft text-primary";
  return (
    <div className="group rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all">
      <div className={`h-32 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-5xl mb-4 relative overflow-hidden`}>
        <span>{c.icon}</span>
        <Badge className={`absolute top-3 right-3 ${diffColor} border-0 font-medium`}>{c.difficulty}</Badge>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold tracking-tight truncate">{c.title}</h3>
          <div className="text-xs text-muted-foreground mt-0.5">by {c.instructor}</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-muted-foreground">{c.lesson}</span>
          <span className="font-medium">{c.progress}%</span>
        </div>
        <Progress value={c.progress} className="h-1.5" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> {c.time}
        </div>
        <Button size="sm" variant="ghost" className="text-primary hover:bg-primary-soft -mr-2">
          Resume <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

/* ───────────── Analytics ───────────── */

function AnalyticsWidget() {
  const days = [
    { d: "M", h: 1.2 }, { d: "T", h: 0.8 }, { d: "W", h: 1.8 },
    { d: "T", h: 0.4 }, { d: "F", h: 2.2 }, { d: "S", h: 1.5 }, { d: "S", h: 0 },
  ];
  const max = 2.5;
  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between mb-1">
        <div>
          <div className="text-xs text-muted-foreground">Hours learned</div>
          <div className="text-2xl font-semibold tracking-tight">7.9h <span className="text-sm text-success font-medium">+18%</span></div>
        </div>
        <div className="h-9 w-9 rounded-lg bg-success-soft grid place-items-center">
          <TrendingUp className="h-4 w-4 text-success" />
        </div>
      </div>
      <div className="mt-5 h-28 flex items-end gap-2">
        {days.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full h-full flex items-end">
              <div
                className={`w-full rounded-md ${d.h > 0 ? "bg-primary" : "bg-secondary"}`}
                style={{ height: `${Math.max((d.h / max) * 100, 6)}%` }}
              />
            </div>
            <div className="text-[10px] text-muted-foreground">{d.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3 text-center">
        <div>
          <div className="text-lg font-semibold">14</div>
          <div className="text-[11px] text-muted-foreground">Lessons done</div>
        </div>
        <div>
          <div className="text-lg font-semibold">3</div>
          <div className="text-[11px] text-muted-foreground">Milestones</div>
        </div>
      </div>
    </div>
  );
}

function StreakCard() {
  return (
    <div
      className="rounded-2xl p-5 text-white relative overflow-hidden shadow-[var(--shadow-card)]"
      style={{ background: "var(--gradient-streak)" }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 bg-white/15 rounded-full blur-xl" />
      <div className="flex items-center gap-3 relative">
        <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur grid place-items-center">
          <Flame className="h-6 w-6" />
        </div>
        <div>
          <div className="text-2xl font-semibold leading-none">7 days</div>
          <div className="text-xs text-white/80 mt-1">Learning streak 🔥</div>
        </div>
      </div>
      <div className="mt-4 flex gap-1.5 relative">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex-1 h-8 rounded-md bg-white/25 grid place-items-center text-[10px] font-medium">
            {["M","T","W","T","F","S","S"][i]}
          </div>
        ))}
      </div>
      <p className="text-xs text-white/85 mt-4 relative">Complete one lesson today to extend your streak.</p>
    </div>
  );
}

/* ───────────── Recommendations ───────────── */

const recs = [
  { title: "TypeScript at Scale", instructor: "Owen Park", duration: "6h", tag: "Engineering", icon: "🧩", match: 96 },
  { title: "Storytelling for PMs", instructor: "Nadia Sayed", duration: "3h 20m", tag: "Product", icon: "📖", match: 91 },
  { title: "Prompt Engineering 101", instructor: "Yara Lim", duration: "2h 15m", tag: "AI", icon: "✨", match: 88 },
];

function Recommendations() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-4">
      {recs.map((r) => (
        <div key={r.title} className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-xl bg-primary-soft grid place-items-center text-2xl">{r.icon}</div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground">
              <Zap className="h-3 w-3" /> {r.match}% match
            </span>
          </div>
          <h3 className="font-semibold tracking-tight mt-4">{r.title}</h3>
          <div className="text-xs text-muted-foreground mt-0.5">by {r.instructor}</div>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <Badge variant="secondary" className="font-normal">{r.tag}</Badge>
            <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {r.duration}</span>
          </div>
          <Button className="w-full mt-4" variant="outline">Start learning <ArrowRight className="h-4 w-4" /></Button>
        </div>
      ))}
    </div>
  );
}

/* ───────────── Course continuation ───────────── */

type Lesson = { t: string; done?: boolean; current?: boolean; locked?: boolean; bookmarked?: boolean };
const modules: { title: string; lessons: Lesson[] }[] = [
  { title: "Module 1 — Fundamentals", lessons: [{ t: "JSX revisited", done: true }, { t: "State & props", done: true }] },
  { title: "Module 2 — Hooks", lessons: [{ t: "useState patterns", done: true }, { t: "useReducer deep dive", done: true }, { t: "Custom hooks", done: true }] },
  { title: "Module 3 — Performance", lessons: [{ t: "Memoization", done: true }, { t: "Context performance", done: true, bookmarked: true }] },
  { title: "Module 4 — Patterns", lessons: [
    { t: "Render props", done: true },
    { t: "HOCs in 2025", done: true },
    { t: "Compound Components", current: true },
    { t: "Slot pattern", done: false },
    { t: "Headless UI", done: false },
  ]},
  { title: "Module 5 — Production", lessons: [{ t: "Code splitting", done: false, locked: true }, { t: "Error boundaries", done: false, locked: true }] },
];

function CourseContinuation() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden grid grid-cols-5">
      <aside className="col-span-2 border-r border-border bg-secondary/40 p-5 max-h-[560px] overflow-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Course content</div>
        <div className="space-y-4">
          {modules.map((m) => (
            <div key={m.title}>
              <div className="text-xs font-semibold text-foreground mb-2">{m.title}</div>
              <ul className="space-y-1">
                {m.lessons.map((l, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded-md ${
                      l.current ? "bg-primary-soft text-primary font-medium" : "text-foreground/80 hover:bg-secondary"
                    }`}
                  >
                    {l.locked ? <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                      : l.current ? <PlayCircle className="h-3.5 w-3.5 text-primary" />
                      : l.done ? <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                      : <Circle className="h-3.5 w-3.5 text-muted-foreground" />}
                    <span className={`flex-1 truncate ${l.locked ? "text-muted-foreground" : ""}`}>{l.t}</span>
                    {l.bookmarked && <Bookmark className="h-3 w-3 text-warning fill-warning" />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      <div className="col-span-3 p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Module 4 · Patterns</span><ChevronRight className="h-3 w-3" /><span className="text-foreground">Compound Components</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight mt-2">Compound Components</h3>
        <p className="text-sm text-muted-foreground mt-1">Build flexible component APIs that share implicit state — like Tabs, Accordion, and Select.</p>

        <div className="mt-5 aspect-video rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 grid place-items-center relative overflow-hidden">
          <button className="h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-xl hover:scale-105 transition-transform">
            <Play className="h-7 w-7 text-primary fill-current ml-1" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs text-white">
            <span>04:12</span>
            <div className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-1/3" />
            </div>
            <span>14:08</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Target className="h-3.5 w-3.5" /> Lesson 3 of 5 · 32% through module
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline"><Bookmark className="h-3.5 w-3.5" /> Bookmark</Button>
            <Button size="sm" variant="outline"><FileText className="h-3.5 w-3.5" /> Notes</Button>
            <Button size="sm" variant="outline"><Download className="h-3.5 w-3.5" /> Resources</Button>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-success-soft border border-success/20 p-4 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-success" />
          <div className="text-sm text-success-foreground">
            <span className="font-semibold text-success">You're almost there!</span>{" "}
            <span className="text-foreground/80">Complete 2 more lessons to unlock your certificate.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Achievements + goal ───────────── */

function Achievements() {
  const badges = [
    { icon: Flame, label: "7-day streak", color: "bg-streak-soft text-streak", earned: true },
    { icon: Trophy, label: "First course", color: "bg-warning-soft text-warning", earned: true },
    { icon: Star, label: "Night owl", color: "bg-primary-soft text-primary", earned: true },
    { icon: Award, label: "Certificate", color: "bg-secondary text-muted-foreground", earned: false },
  ];
  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
      <div className="grid grid-cols-4 gap-3">
        {badges.map((b) => (
          <div key={b.label} className={`flex flex-col items-center gap-2 p-3 rounded-xl ${b.earned ? b.color : "opacity-50 " + b.color}`}>
            <b.icon className="h-6 w-6" />
            <div className="text-[10px] font-medium text-center leading-tight">{b.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground mb-2">Next certificate</div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary-soft grid place-items-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Advanced React Patterns</div>
            <Progress value={68} className="h-1 mt-1.5" />
          </div>
          <div className="text-xs text-muted-foreground">68%</div>
        </div>
      </div>
    </div>
  );
}

function DailyGoal() {
  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">Daily goal</div>
          <div className="text-lg font-semibold tracking-tight">25 / 30 min</div>
        </div>
        <div className="relative h-14 w-14">
          <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.92 0.008 250)" strokeWidth="3" />
            <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.55 0.19 270)" strokeWidth="3" strokeLinecap="round"
              strokeDasharray={`${(25/30)*94.2} 94.2`} />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-xs font-semibold">83%</div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">Just 5 more minutes to hit your goal today.</p>
    </div>
  );
}

/* ───────────── Empty state ───────────── */

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center mt-4">
      <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-primary-soft to-accent grid place-items-center">
        <BookOpen className="h-9 w-9 text-primary" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">Your learning journey starts here</h3>
      <p className="text-sm text-muted-foreground mt-1.5 max-w-md mx-auto">
        You haven't started a course yet. Browse our catalog of 1,200+ courses curated by experts.
      </p>
      <div className="mt-5 flex items-center justify-center gap-2">
        <Button><Compass className="h-4 w-4" /> Explore courses</Button>
        <Button variant="outline">Take skills quiz</Button>
      </div>
    </div>
  );
}
