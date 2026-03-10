"use client";

import RocketScroll from "@/components/RocketScroll";
import TeamShowcase from "@/components/ui/team-showcase";
import { Rocket, Target, Users, Map, DollarSign, Award, ArrowRight, MessageSquare, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <main className="min-h-screen text-zinc-300">
      {/* Floating Island Navigation Bar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl bg-[#0a0a0a]/90  border border-white/10 rounded-full shadow-2xl flex items-center justify-between p-2 pl-6">

        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <img src="/new-logo-2.png" alt="Buckeye Rocketry" className="h-[3.25rem] w-auto -my-1" />
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-zinc-800"></div>
          <div className="hidden sm:flex flex-col justify-center">
            <span className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">Since 2026</span>
          </div>
        </div>

        {/* Secondary Actions (Like Porsche's "01 My order") */}
        <div className="hidden lg:flex items-center bg-[#18181b] border border-white/5 rounded-full p-1 pl-1 pr-6 hover:bg-[#27272a] transition-colors cursor-pointer group">
          <div className="flex items-center justify-center bg-black border border-white/5 text-white px-3 py-1.5 rounded-full group-hover:border-zinc-700 transition-colors">
            <Users className="w-3.5 h-3.5" />
          </div>
          <a href="#join" className="ml-3 text-sm text-zinc-400 font-medium group-hover:text-white transition-colors">Join Us</a>
        </div>

        {/* Core Navigation (White Pill) */}
        <nav className="hidden md:flex items-center bg-white p-1 rounded-full text-sm font-medium shadow-md">
          {["Home", "About", "Projects", "Leadership"].map((tab) => (
            <a
              key={tab}
              href={tab === "Home" ? "#" : `#${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-full transition-all ${activeTab === tab
                ? "bg-black text-white"
                : "text-zinc-900 hover:bg-zinc-100"
                }`}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero / Scrollytelling Section wrapping the entire page content */}
      <RocketScroll>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">

          {/* About Us */}
          <section id="about" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">About Us</h2>
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight drop-shadow-md">Mission statement & overview.</h3>
            <p className="text-lg text-zinc-200 leading-relaxed mb-6 font-medium drop-shadow-sm">
              Buckeye Rocketry is an interdisciplinary student engineering team dedicated to designing, building, and launching high-power solid propellant rockets. Our mission is to provide Ohio State students with hands-on systems engineering experience and to push the boundaries of collegiate rocketry.
            </p>
            <p className="text-lg text-zinc-200 leading-relaxed font-medium drop-shadow-sm">
              From custom avionics architectures to composite airframe manufacturing, every component is rigorously tested and optimized for maximum performance and reliability at competition.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Projects</h2>
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight drop-shadow-md">Engineering flight.</h3>

            <div className="space-y-16 mt-12">
              <div>
                <h4 className="text-2xl font-medium mb-4 text-red-400 drop-shadow-sm">Current Projects</h4>
                <div className="bg-black/60  rounded-2xl p-8 border border-white/10 shadow-lg hover:border-red-500/50 transition-colors">
                  <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Artemis (2026)</h5>
                  <p className="text-zinc-300">
                    Our current active development focuses on a two-stage high-altitude vehicle aiming for 30,000 feet at the Spaceport America Cup. Featuring an active drag system and custom flight computer.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-medium mb-4 text-red-400 drop-shadow-sm">Past Projects</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/60  rounded-2xl p-8 border border-white/10 shadow-lg hover:border-red-500/50 transition-colors">
                    <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Zenith (2025)</h5>
                    <p className="text-zinc-300 text-sm">
                      Reaching 10,000 feet with a student-researched and mixed solid propellant motor. Awarded technical excellence for avionics recovery system.
                    </p>
                  </div>
                  <div className="bg-black/60  rounded-2xl p-8 border border-white/10 shadow-lg hover:border-red-500/50 transition-colors">
                    <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Icarus (2024)</h5>
                    <p className="text-zinc-300 text-sm">
                      First successful dual-deployment recovery system integration, laying the groundwork for complex flight profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section id="leadership" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Leadership</h2>
            </div>
            <h3 className="text-4xl font-semibold mb-12 text-red-500 tracking-tight drop-shadow-md">The team behind the hardware.</h3>

            <div className="bg-black/40  pt-8 rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
              <TeamShowcase />
            </div>
          </section>

          {/* Sponsor Us */}
          <section id="sponsor" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Sponsor Us</h2>
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight drop-shadow-md">Fuel our next launch.</h3>
            <p className="text-lg text-zinc-200 leading-relaxed mb-10 font-medium drop-shadow-sm">
              Building complex aerospace hardware requires significant resources. We rely on the generous support of corporate partners and alumni to fund materials, manufacturing, and travel to national competitions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/60  p-6 rounded-2xl border border-white/10 shadow-lg text-center hover:border-red-500/50 transition-colors">
                <h4 className="font-semibold text-lg mb-1 text-zinc-100">Bronze</h4>
                <div className="text-red-400 text-sm mb-4">$500+</div>
                <ul className="text-sm text-zinc-300 space-y-2 text-left">
                  <li>• Logo on website</li>
                  <li>• Social media shoutout</li>
                </ul>
              </div>
              <div className="bg-black/60  p-6 rounded-2xl border border-white/10 shadow-lg text-center relative overflow-hidden hover:border-red-500/50 transition-colors">
                <div className="absolute top-0 inset-x-0 h-1 bg-red-600"></div>
                <h4 className="font-semibold text-lg mb-1 text-zinc-100">Silver</h4>
                <div className="text-red-400 text-sm mb-4">$1,000+</div>
                <ul className="text-sm text-zinc-300 space-y-2 text-left">
                  <li>• Logo on rocket</li>
                  <li>• Resume book access</li>
                  <li>• Bronze benefits</li>
                </ul>
              </div>
              <div className="bg-red-950/50  text-white p-6 rounded-2xl shadow-xl text-center border border-red-500/50 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-red-500"></div>
                <Award className="absolute -bottom-4 -right-4 w-24 h-24 text-red-500/20" />
                <h4 className="font-semibold text-lg mb-1 drop-shadow-sm">Gold</h4>
                <div className="text-red-300 text-sm mb-4 drop-shadow-sm">$3,000+</div>
                <ul className="text-sm text-zinc-200 space-y-2 text-left relative z-10">
                  <li>• Prominent logo placement</li>
                  <li>• Exclusive recruiting event</li>
                  <li>• Silver benefits</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/60  rounded-2xl p-8 border border-white/10 shadow-lg">
              <h4 className="font-medium text-xl mb-4 text-zinc-100 drop-shadow-sm">Become a Sponsor</h4>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/80 transition-all bg-black/50 text-white placeholder-zinc-500" />
                  <input type="email" placeholder="Contact Email" className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/80 transition-all bg-black/50 text-white placeholder-zinc-500" />
                </div>
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/80 transition-all bg-black/50 text-white placeholder-zinc-500 resize-none"></textarea>
                <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors shadow-lg shadow-red-900/40">Submit Inquiry</button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Alternatively, email us at: sponsors@buckeyerocketry.com
                </span>
                <a href="#" className="hover:text-red-400 mt-2 md:mt-0 transition-colors">Connect on LinkedIn</a>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section id="join" className="scroll-mt-24 mb-24">
            <div className="flex items-center gap-2 mb-4">
              <Map className="w-4 h-4 text-red-500/70" />
              <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Join Us</h2>
            </div>
            <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight drop-shadow-md">Launch your career.</h3>
            <p className="text-lg text-zinc-200 leading-relaxed mb-8 font-medium drop-shadow-sm">
              We are always looking for passionate students from all majors—engineering, business, design, and more. No prior rocketry experience required.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <a href="#" className="flex-1 bg-red-600 text-white px-6 py-4 rounded-xl flex items-center justify-between hover:bg-red-500 transition-colors group shadow-lg shadow-red-900/40">
                <span className="font-semibold text-lg">Fill out Interest Form</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex-1 flex gap-4">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-black/60  border border-white/10 rounded-xl hover:bg-black/80 hover:border-white/20 transition-colors text-zinc-200 font-medium shadow-md">
                  <MessageSquare className="w-5 h-5" />
                  Messenger Group
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-black/60  border border-white/10 rounded-xl hover:bg-black/80 hover:border-white/20 transition-colors text-zinc-200 font-medium shadow-md">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </section>

        </div>

        <footer className="w-full border-t border-white/10 bg-black/80  py-8 text-center text-sm text-zinc-400 mt-12">
          <p>© 2026 Buckeye Rocketry. At The Ohio State University.</p>
        </footer>
      </RocketScroll>
    </main>
  );
}
