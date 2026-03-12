"use client";

import Image from "next/image";
import RocketScroll from "@/components/RocketScroll";
import TeamShowcase from "@/components/ui/team-showcase";
import {
  ArrowRight,
  Award,
  DollarSign,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact Us", href: "#contact-us" },
];

const sponsorTiers = [
  {
    name: "Bronze",
    amount: "$500+",
    perks: ["Logo on website", "Social media shoutout"],
  },
  {
    name: "Silver",
    amount: "$1,000+",
    perks: ["Logo on rocket", "Resume book access", "Bronze benefits"],
  },
  {
    name: "Gold",
    amount: "$3,000+",
    perks: ["Prominent logo placement", "Exclusive recruiting event", "Silver benefits"],
  },
];

const pastProjects = [
  {
    name: "Project Zenith",
    year: "2025",
    description:
      "Reached 10,000 feet with a student-researched solid propellant motor and earned technical recognition for avionics recovery work.",
  },
  {
    name: "Project Icarus",
    year: "2024",
    description:
      "Delivered the team's first successful dual-deployment recovery integration and established the baseline for more complex flight profiles.",
  },
];

function SectionHeader({
  icon: Icon,
  label,
  title,
  description,
}: {
  icon: typeof Target;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-red-500/70" />
        <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500/70">
          {label}
        </h2>
      </div>
      <h3 className="mb-4 text-4xl font-semibold tracking-tight text-red-500 drop-shadow-md">
        {title}
      </h3>
      {description ? (
        <p className="max-w-3xl text-lg font-medium leading-relaxed text-zinc-200 drop-shadow-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  const heroContent = (
    <section id="home" className="flex min-h-screen items-center">
      <div className="mx-auto flex w-full max-w-6xl items-end px-6 pb-20 pt-40">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/45 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-400/80">
            High-Power Rocketry at Ohio State
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Student-built rockets. Real flight hardware. Clear paths to join or sponsor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200">
            Buckeye Rocketry gives students hands-on experience in propulsion, avionics,
            recovery, and program operations while building competition-ready launch
            vehicles.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-involved-new-members"
              onClick={() => setActiveTab("Get Involved")}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-red-900/40 transition-colors hover:bg-red-500"
            >
              Join Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#get-involved-sponsors"
              onClick={() => setActiveTab("Get Involved")}
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-black/60 px-6 py-4 text-base font-semibold text-zinc-100 transition-colors hover:border-red-500/50 hover:text-white"
            >
              Sponsor Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2">
              Home
            </span>
            <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2">
              Projects with current and past work
            </span>
            <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2">
              Paths for members and sponsors
            </span>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen text-zinc-300">
      <div className="fixed left-1/2 top-6 z-50 w-11/12 max-w-6xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[#0a0a0a]/90 p-3 shadow-2xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/new-logo-3.png"
              alt="Buckeye Rocketry"
              width={220}
              height={52}
              className="h-[3.25rem] w-auto"
              priority
            />
            <div className="hidden h-8 w-px bg-zinc-800 sm:block" />
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                Since 2026
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-1 overflow-x-auto rounded-full bg-white p-1 text-sm font-medium shadow-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 transition-all ${
                  activeTab === item.label
                    ? "bg-black text-white"
                    : "text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <RocketScroll heroContent={heroContent}>
        <div className="mx-auto max-w-5xl space-y-32 px-6 py-24">
          <section id="about-us" className="scroll-mt-40">
            <SectionHeader
              icon={Target}
              label="About Us"
              title="Mission, overview, and the team’s operating model."
              description="Buckeye Rocketry is an interdisciplinary student engineering team dedicated to designing, building, and launching high-power solid propellant rockets. We combine hands-on systems engineering with rigorous design, manufacturing, and test work."
            />
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg">
                <h4 className="mb-2 text-lg font-semibold text-zinc-100">Design</h4>
                <p className="text-sm text-zinc-300">
                  Students own end-to-end architecture decisions across airframe,
                  avionics, propulsion, and recovery.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg">
                <h4 className="mb-2 text-lg font-semibold text-zinc-100">Build</h4>
                <p className="text-sm text-zinc-300">
                  Hardware is fabricated, integrated, and reviewed with a focus on
                  repeatable manufacturing and flight readiness.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg">
                <h4 className="mb-2 text-lg font-semibold text-zinc-100">Launch</h4>
                <p className="text-sm text-zinc-300">
                  Each project is validated through testing and prepared for competition
                  environments where reliability matters.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-40">
            <SectionHeader
              icon={Rocket}
              label="Projects"
              title="Current work and prior flight milestones."
              description="The Projects section separates active development from completed vehicles so visitors can quickly understand what the team is building now and what it has already flown."
            />
            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="#projects-current"
                className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-red-500/50"
              >
                Current Projects
              </a>
              <a
                href="#projects-past"
                className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-red-500/50"
              >
                Past Projects
              </a>
            </div>

            <div id="projects-current" className="mb-12 scroll-mt-40">
              <h4 className="mb-4 text-2xl font-medium text-red-400 drop-shadow-sm">
                Current Projects
              </h4>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-lg transition-colors hover:border-red-500/50">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h5 className="text-lg font-semibold text-zinc-100">Project Artemis</h5>
                  <span className="rounded-full border border-red-500/30 bg-red-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-200">
                    2026 Active Build
                  </span>
                </div>
                <p className="text-zinc-300">
                  A two-stage high-altitude vehicle targeting 30,000 feet at Spaceport
                  America Cup, with an active drag system and custom flight computer
                  driving the current development cycle.
                </p>
              </div>
            </div>

            <div id="projects-past" className="scroll-mt-40">
              <h4 className="mb-4 text-2xl font-medium text-red-400 drop-shadow-sm">
                Past Projects
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                {pastProjects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-lg transition-colors hover:border-red-500/50"
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h5 className="text-lg font-semibold text-zinc-100">
                        {project.name}
                      </h5>
                      <span className="text-sm text-red-300">{project.year}</span>
                    </div>
                    <p className="text-sm text-zinc-300">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="leadership" className="scroll-mt-40">
            <SectionHeader
              icon={Users}
              label="Leadership"
              title="The team behind the hardware."
              description="Leadership combines technical leads and program operators who keep the team organized across design reviews, build schedules, and competition preparation."
            />
            <div className="overflow-hidden rounded-3xl border border-white/5 bg-black/40 pt-8 shadow-2xl">
              <TeamShowcase />
            </div>
          </section>

          <section id="get-involved" className="scroll-mt-40">
            <SectionHeader
              icon={Handshake}
              label="Get Involved"
              title="Two clear paths: join the team or support the mission."
              description="The Get Involved section is organized around the two audiences that most often act on the site: prospective members and potential sponsors."
            />
            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="#get-involved-new-members"
                className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-red-500/50"
              >
                New Members
              </a>
              <a
                href="#get-involved-sponsors"
                className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-red-500/50"
              >
                Sponsors
              </a>
            </div>

            <div className="space-y-12">
              <div
                id="get-involved-new-members"
                className="scroll-mt-40 rounded-3xl border border-white/10 bg-black/60 p-8 shadow-lg"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Users className="h-5 w-5 text-red-400" />
                  <h4 className="text-2xl font-medium text-zinc-100">New Members</h4>
                </div>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-200">
                  We welcome students from engineering, business, design, and beyond.
                  No prior rocketry experience is required; curiosity, consistency, and
                  willingness to build are.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <a
                    href="#contact-us"
                    onClick={() => setActiveTab("Contact Us")}
                    className="group flex items-center justify-between rounded-2xl bg-red-600 px-6 py-5 text-white shadow-lg shadow-red-900/40 transition-colors hover:bg-red-500"
                  >
                    <div>
                      <div className="text-lg font-semibold">Join Us</div>
                      <div className="text-sm text-red-100">
                        Start with an interest form or introduction email.
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
                    <div className="mb-3 text-lg font-semibold text-zinc-100">
                      Where new members contribute
                    </div>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li>Airframe, avionics, propulsion, and recovery systems</li>
                      <li>Operations, recruiting, sponsor relations, and media</li>
                      <li>Testing, launch prep, and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="get-involved-sponsors"
                className="scroll-mt-40 rounded-3xl border border-white/10 bg-black/60 p-8 shadow-lg"
              >
                <div className="mb-6 flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-red-400" />
                  <h4 className="text-2xl font-medium text-zinc-100">Sponsors</h4>
                </div>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-200">
                  Sponsorship helps fund materials, manufacturing, testing, and travel.
                  Companies and alumni can support the team at multiple levels and gain
                  visibility with a motivated student engineering group.
                </p>
                <div className="mb-8 grid gap-6 md:grid-cols-3">
                  {sponsorTiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`relative overflow-hidden rounded-2xl p-6 text-center shadow-lg ${
                        tier.name === "Gold"
                          ? "border border-red-500/50 bg-red-950/50 text-white"
                          : "border border-white/10 bg-black/50 text-zinc-100"
                      }`}
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-1 ${
                          tier.name === "Gold" ? "bg-red-500" : "bg-red-600"
                        }`}
                      />
                      {tier.name === "Gold" ? (
                        <Award className="absolute -bottom-4 -right-4 h-24 w-24 text-red-500/20" />
                      ) : null}
                      <h5 className="mb-1 text-lg font-semibold">{tier.name}</h5>
                      <div className="mb-4 text-sm text-red-300">{tier.amount}</div>
                      <ul className="space-y-2 text-left text-sm text-zinc-200">
                        {tier.perks.map((perk) => (
                          <li key={perk}>{perk}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact-us"
                  onClick={() => setActiveTab("Contact Us")}
                  className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black/60 px-6 py-4 font-semibold text-zinc-100 transition-colors hover:border-red-500/50 hover:text-white"
                >
                  Contact Us About Sponsorship
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          <section id="contact-us" className="scroll-mt-40">
            <SectionHeader
              icon={Mail}
              label="Contact Us"
              title="Reach the team for membership, sponsorship, or general questions."
              description="Use the contact options below to start a conversation with Buckeye Rocketry. This section supports both student interest and sponsor outreach."
            />
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-8 shadow-lg">
                <a
                  href="mailto:sponsors@buckeyerocketry.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-red-500/50"
                >
                  <Mail className="h-5 w-5 text-red-400" />
                  <div>
                    <div className="font-semibold text-zinc-100">Email</div>
                    <div className="text-sm text-zinc-300">sponsors@buckeyerocketry.com</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-red-500/50"
                >
                  <Linkedin className="h-5 w-5 text-red-400" />
                  <div>
                    <div className="font-semibold text-zinc-100">LinkedIn</div>
                    <div className="text-sm text-zinc-300">Connect with the team</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-red-500/50"
                >
                  <Instagram className="h-5 w-5 text-red-400" />
                  <div>
                    <div className="font-semibold text-zinc-100">Instagram</div>
                    <div className="text-sm text-zinc-300">Follow launches and build updates</div>
                  </div>
                </a>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-zinc-300">
                  For quick outreach, include whether you are a prospective member,
                  sponsor, or collaborator in your message so it reaches the right lead
                  faster.
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/60 p-8 shadow-lg">
                <h4 className="mb-4 text-xl font-medium text-zinc-100">Send an Inquiry</h4>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company, organization, or major"
                    className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                  />
                  <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition-colors hover:bg-red-500">
                    Send Inquiry
                  </button>
                </form>
                <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Response routing available for members, sponsors, and collaborators
                  </span>
                  <a
                    href="mailto:sponsors@buckeyerocketry.com"
                    className="transition-colors hover:text-red-400"
                  >
                    Email the team directly
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 w-full border-t border-white/10 bg-black/80 py-8 text-center text-sm text-zinc-400">
          <p>© 2026 Buckeye Rocketry. At The Ohio State University.</p>
        </footer>
      </RocketScroll>
    </main>
  );
}
