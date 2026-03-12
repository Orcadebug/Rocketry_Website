import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  DollarSign,
  Instagram,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
};

const sponsorTiers = [
  {
    name: "Bronze",
    amount: "$500+",
    benefits: ["Logo on website", "Social media shoutout"],
  },
  {
    name: "Silver",
    amount: "$1,000+",
    benefits: ["Logo on rocket", "Resume book access", "Bronze benefits"],
  },
  {
    name: "Gold",
    amount: "$3,000+",
    benefits: [
      "Prominent logo placement",
      "Exclusive recruiting event",
      "Silver benefits",
    ],
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen text-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-36">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-red-950/40 via-black to-black p-8 shadow-2xl shadow-red-950/20 md:p-12">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-5 w-5 text-red-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
              Get Involved
            </p>
          </div>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Launch your career alongside the team.
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
            We are always looking for passionate students from all majors,
            including engineering, business, design, and more. No prior
            rocketry experience is required. Whether you want to build flight
            hardware, support analysis, or help the team grow, there is a place
            to contribute quickly.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Fill Out Interest Form
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            >
              <MessageSquare className="h-4 w-4" />
              Messenger Group
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-white">Build</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Join design, fabrication, avionics, and test work across active
              project teams.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-white">Learn</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Gain hands-on experience with engineering tools, launch
              preparation, and collaborative problem-solving.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-white">Support</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Help the team grow through outreach, business operations,
              partnerships, and sponsor relationships.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-xl md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
                Sponsor Us
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Fuel the next launch.
              </h2>
            </div>
          </div>
          <p className="mb-10 max-w-4xl text-base leading-relaxed text-zinc-300">
            Building complex aerospace hardware requires resources for materials,
            manufacturing, avionics, and travel. Corporate partners and alumni
            support help Buckeye Rocketry keep ambitious student projects moving
            from design review to launch day.
          </p>

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-2xl border p-6 text-center shadow-lg ${
                  tier.name === "Gold"
                    ? "border-red-500/50 bg-red-950/50 text-white"
                    : "border-white/10 bg-black/60"
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
                <h3 className="mb-1 text-lg font-semibold text-zinc-100">
                  {tier.name}
                </h3>
                <div className="mb-4 text-sm text-red-300">{tier.amount}</div>
                <ul className="space-y-2 text-left text-sm text-zinc-300">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/60 p-8 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Become a Sponsor
            </h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
              />
              <button
                type="button"
                className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition-colors hover:bg-red-500"
              >
                Submit Inquiry
              </button>
            </form>
            <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 md:flex-row md:items-center">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                sponsors@buckeyerocketry.com
              </span>
              <a href="#" className="transition-colors hover:text-red-400">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
