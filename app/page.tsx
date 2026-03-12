import RocketScroll from "@/components/RocketScroll";
import TeamShowcase from "@/components/ui/team-showcase";
import { Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-300">
      <RocketScroll>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <section id="leadership" className="scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Leadership</h2>
            </div>
            <div className="mb-12 max-w-3xl">
              <h3 className="mb-6 text-4xl font-semibold tracking-tight text-red-500 drop-shadow-md">
                The team behind the hardware.
              </h3>
              <p className="text-lg font-medium leading-relaxed text-zinc-200 drop-shadow-sm">
                Meet the student leaders building Buckeye Rocketry&apos;s culture,
                hardware, and launch operations. Explore the rest of the site to
                learn about the team&apos;s projects, mission, and ways to get
                involved.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/5 bg-black/40 pt-8 shadow-2xl">
              <TeamShowcase />
            </div>
          </section>
        </div>
      </RocketScroll>
    </main>
  );
}
