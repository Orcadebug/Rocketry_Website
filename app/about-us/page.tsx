import type { Metadata } from "next";
import { Compass, Flag, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen text-zinc-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-24 pt-36">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-red-950/40 via-black to-black p-8 shadow-2xl shadow-red-950/20 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
            About Us
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Building rockets. Expanding engineering education.
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
            Buckeye Rocketry is a student project team founded in 2025 dedicated
            to designing, building, and launching experimental rockets at The
            Ohio State University. While our long-term goal is to push the
            boundaries of amateur rocketry with projects such as multistage and
            high-altitude designs, our mission is to enhance the education of
            students across engineering and science disciplines. We offer members
            the opportunity to earn their first certification into high power
            rocketry, while also developing technical skills in design,
            fabrication, testing, and analysis that are invaluable for
            engineering careers. Our members gain the unique chance to explore
            bold ideas, expand their technical abilities, and contribute to a
            community driven by curiosity and innovation.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <Compass className="h-5 w-5 text-red-400" />
              <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            </div>
            <p className="text-base leading-relaxed text-zinc-300">
              To build a community of passionate explorers who push the limits of
              rocketry through collaboration, creativity, and relentless
              curiosity.
            </p>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-5 w-5 text-red-400" />
              <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            </div>
            <p className="text-base leading-relaxed text-zinc-300">
              At Buckeye Rocketry, we strive to bridge classroom knowledge with
              hands-on experience. Through teamwork, creativity, and technical
              excellence, we empower students to design, build, and launch
              rockets that embody innovation and curiosity.
            </p>
          </section>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <Flag className="h-5 w-5 text-red-400" />
            <h2 className="text-2xl font-semibold text-white">What Members Gain</h2>
          </div>
          <p className="max-w-4xl text-base leading-relaxed text-zinc-300">
            Members work across design, fabrication, testing, analysis, and
            launch preparation while building the confidence to contribute to
            ambitious experimental hardware. The result is hands-on experience
            that complements classroom learning and prepares students for
            engineering careers.
          </p>
        </section>
      </div>
    </main>
  );
}
