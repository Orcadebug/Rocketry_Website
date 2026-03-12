import type { Metadata } from "next";
import { ArrowRight, FolderKanban, Gauge, Rocket, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
};

type Detail = {
  label: string;
  value: string;
};

type Project = {
  id: string;
  shortLabel: string;
  title: string;
  description?: string;
  roles?: Detail[];
  stats?: Detail[];
};

const currentProjects: Project[] = [
  {
    id: "l1-project",
    shortLabel: "L1 Project",
    title: "L1 Project - Project Team for L1 Certification",
    description:
      "The L1 Project Team is dedicated to designing rockets for L1 certification. Every member of this team is responsible for their own rockets from the designing stage to the launching stage. The team is currently planning to launch their rockets by April 2026.",
    roles: [
      { label: "Project Leads", value: "Louis Miranda, Ethan Boylan" },
    ],
  },
  {
    id: "minimum-diameter",
    shortLabel: "Minimum Diameter",
    title:
      "Minimum Diameter Project - Advanced Team for High Performing Rocketry",
    description:
      "The Minimum Diameter Team is focused on designing and launching a rocket to fly as high as possible using a single high powered motor in as small a rocket as possible. This project involves heavily optimizing rocket shape, properly managing weight, and utilizing complex avionics.",
    roles: [
      { label: "Project Leads", value: "Andrew Beck, Dishant Patel" },
    ],
  },
  {
    id: "sp26-experimental",
    shortLabel: "SP26 Experimental",
    title: "SP26 Experimental Project",
    roles: [
      { label: "Project Leads", value: "Dishant Patel, Andrew Beck" },
      { label: "Deputy", value: "?" },
      { label: "Safety Officer", value: "?" },
    ],
    stats: [
      { label: "Height", value: "147 cm" },
      { label: "Diameter", value: "57 mm" },
      { label: "Max Thrust", value: "419 N" },
      { label: "Total Impulse", value: "2554 Ns" },
      { label: "Motor", value: "Aerotech K250W-P" },
      { label: "Apogee", value: "7196 m" },
      { label: "Top Speed", value: "Mach 1.409" },
    ],
  },
  {
    id: "gpp",
    shortLabel: "Guided Parafoil",
    title: "Guided Parafoil Project (GPP) - Advanced Avionics Project",
    description:
      "The GPP Project focuses on developing a guided recovery system to ensure rockets safely return to the launchpad. In this project, the avionics team programs a parafoil to steer the rocket after ejection, using GPS guidance to navigate it back accurately.",
    roles: [{ label: "Project Lead", value: "Daniel Xiao" }],
  },
];

const pastProjects: Project[] = [
  {
    id: "au25-l1-project",
    shortLabel: "AU25 L1",
    title: "AU25 L1 Project",
    roles: [
      { label: "Project Lead", value: "Steven Luo" },
      { label: "Deputy", value: "Dishant Patel" },
      { label: "Safety Officer", value: "Andrew Beck" },
    ],
    stats: [
      { label: "Height", value: "0.85 m" },
      { label: "Diameter", value: "54 mm" },
      { label: "Max Thrust", value: "159.7 N" },
      { label: "Total Impulse", value: "226 Ns" },
      { label: "Motor", value: "H135W-14A" },
      { label: "Apogee", value: "683 m" },
      { label: "Top Speed", value: "168 m/s, Mach 0.489" },
    ],
  },
];

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="scroll-mt-32 rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-xl shadow-black/30"
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          {project.description ? (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">
              {project.description}
            </p>
          ) : null}
        </div>
      </div>

      {project.roles?.length ? (
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {project.roles.map((role) => (
            <div
              key={`${project.id}-${role.label}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                {role.label}
              </p>
              <p className="text-sm text-zinc-200">{role.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {project.stats?.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {project.stats.map((stat) => (
            <div
              key={`${project.id}-${stat.label}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                {stat.label}
              </p>
              <p className="text-sm text-zinc-200">{stat.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-36">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-red-950/40 via-black to-black p-8 shadow-2xl shadow-red-950/20 md:p-12">
          <div className="mb-4 flex items-center gap-3">
            <FolderKanban className="h-5 w-5 text-red-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
              Projects
            </p>
          </div>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Current builds and flight-ready experiments.
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
            At Buckeye Rocketry, students gain far more than just the thrill of
            launch day. They gain invaluable real-world engineering experience.
            Our members have the opportunity to explore high power rocketry and
            earn their Level 1 High-Power Rocketry Certification, while
            developing practical skills in design, fabrication, testing, and
            data analysis. Through the use of industry-standard tools such as
            SolidWorks, MATLAB, ANSYS, and OpenRocket, students translate
            classroom theory into hands-on design and problem-solving. At
            Buckeye Rocketry, members are able to jump in and contribute to any
            one of the project team in just a few meetings.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#current-projects"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Current Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#past-projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            >
              Past Projects
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {currentProjects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-red-500/50 hover:text-white"
              >
                {project.shortLabel}
              </a>
            ))}
          </div>
        </section>

        <section id="current-projects" className="scroll-mt-32">
          <div className="mb-6 flex items-center gap-3">
            <Rocket className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
                Current Projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Active teams and near-term flight work.
              </h2>
            </div>
          </div>
          <div className="grid gap-6">
            {currentProjects.map((project) => (
              <ProjectBlock key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="past-projects" className="scroll-mt-32">
          <div className="mb-6 flex items-center gap-3">
            <Gauge className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
                Past Projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Previous launches and performance baselines.
              </h2>
            </div>
          </div>
          <div className="grid gap-6">
            {pastProjects.map((project) => (
              <ProjectBlock key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-5 w-5 text-red-400" />
            <h2 className="text-2xl font-semibold text-white">
              Interested in joining a project team?
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
            Visit the Get Involved page to connect with the team, learn how new
            members plug into ongoing work, and find the best point of entry for
            your interests.
          </p>
        </section>
      </div>
    </main>
  );
}
