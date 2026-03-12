import type { Metadata } from "next";
import { Instagram, Linkedin, Mail, MessageSquareQuote } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
};

const contactCards = [
  {
    title: "General Questions",
    description:
      "Reach out with questions about the team, meetings, project work, or collaboration opportunities.",
    icon: MessageSquareQuote,
  },
  {
    title: "Email",
    description: "For team and sponsorship inquiries, contact sponsors@buckeyerocketry.com.",
    icon: Mail,
  },
  {
    title: "Social",
    description: "Stay connected through Instagram and LinkedIn as the team shares updates and launches.",
    icon: Instagram,
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen text-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-36">
        <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-red-950/40 via-black to-black p-8 shadow-2xl shadow-red-950/20 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-red-400">
            Contact Us
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Start a conversation with Buckeye Rocketry.
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
            Use this page for general questions, collaboration ideas, media
            requests, and outreach. If you are specifically interested in
            supporting the team, the Get Involved page also includes sponsor
            information and a dedicated sponsor inquiry form.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-black/70 p-6 shadow-xl"
              >
                <Icon className="mb-4 h-5 w-5 text-red-400" />
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {card.description}
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Send a message
            </h2>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-zinc-300">
              Share your name, email, and a short note about how you&apos;d like
              to connect with the team.
            </p>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full resize-none rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-500 transition-all focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/80"
              />
              <button
                type="button"
                className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition-colors hover:bg-red-500"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Contact Details
            </h2>
            <div className="space-y-5 text-sm text-zinc-300">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4 text-red-400" />
                  Email
                </p>
                <p>sponsors@buckeyerocketry.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 flex items-center gap-2 text-white">
                  <Instagram className="h-4 w-4 text-red-400" />
                  Instagram
                </p>
                <p>Instagram profile link coming soon.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 flex items-center gap-2 text-white">
                  <Linkedin className="h-4 w-4 text-red-400" />
                  LinkedIn
                </p>
                <a href="#" className="transition-colors hover:text-red-400">
                  Connect with the team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
