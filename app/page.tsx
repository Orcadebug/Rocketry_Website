import RocketScroll from "@/components/RocketScroll";
import { Rocket, Target, Users, Map, DollarSign, Award, ArrowRight, MessageSquare, Instagram, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-300">
      {/* Hero / Scrollytelling Section */}
      <RocketScroll />

      {/* Navigation Bar (appears after scroll) */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-red-500 flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            <span>BR</span>
          </div>
          <nav className="hidden md:flex gap-8 text-zinc-400 font-medium text-sm">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-red-400 transition-colors">Projects</a>
            <a href="#leadership" className="hover:text-red-400 transition-colors">Leadership</a>
            <a href="#sponsor" className="hover:text-red-400 transition-colors">Sponsor</a>
            <a href="#join" className="hover:text-red-400 transition-colors">Join</a>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">

        {/* About Us */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-red-500/70" />
            <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">About Us</h2>
          </div>
          <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight">Mission statement & overview.</h3>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Buckeye Rocketry is an interdisciplinary student engineering team dedicated to designing, building, and launching high-power solid propellant rockets. Our mission is to provide Ohio State students with hands-on systems engineering experience and to push the boundaries of collegiate rocketry.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            From custom avionics architectures to composite airframe manufacturing, every component is rigorously tested and optimized for maximum performance and reliability at competition.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-4 h-4 text-red-500/70" />
            <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Projects</h2>
          </div>
          <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight">Engineering flight.</h3>

          <div className="space-y-16 mt-12">
            <div>
              <h4 className="text-2xl font-medium mb-4 text-red-400">Current Projects</h4>
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 shadow-sm hover:border-red-900/50 transition-colors">
                <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Artemis (2026)</h5>
                <p className="text-zinc-400">
                  Our current active development focuses on a two-stage high-altitude vehicle aiming for 30,000 feet at the Spaceport America Cup. Featuring an active drag system and custom flight computer.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-medium mb-4 text-red-400">Past Projects</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 shadow-sm hover:border-red-900/50 transition-colors">
                  <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Zenith (2025)</h5>
                  <p className="text-zinc-400 text-sm">
                    Reaching 10,000 feet with a student-researched and mixed solid propellant motor. Awarded technical excellence for avionics recovery system.
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 shadow-sm hover:border-red-900/50 transition-colors">
                  <h5 className="font-semibold text-lg mb-2 text-zinc-100">Project Icarus (2024)</h5>
                  <p className="text-zinc-400 text-sm">
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
          <h3 className="text-4xl font-semibold mb-12 text-red-500 tracking-tight">The team behind the hardware.</h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-medium mb-6 text-red-400 border-b border-white/10 pb-2">Admin</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="font-medium text-zinc-200">President</span>
                  <span className="text-zinc-500 text-sm">John Doe</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-zinc-200">Vice President</span>
                  <span className="text-zinc-500 text-sm">Jane Smith</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-6 text-red-400 border-b border-white/10 pb-2">Business Team</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="font-medium text-zinc-200">Business Lead</span>
                  <span className="text-zinc-500 text-sm">Alex Johnson</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-zinc-200">Treasurer</span>
                  <span className="text-zinc-500 text-sm">Michael Brown</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-zinc-200">Operations Lead</span>
                  <span className="text-zinc-500 text-sm">Sarah Davis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sponsor Us */}
        <section id="sponsor" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-red-500/70" />
            <h2 className="text-sm font-semibold tracking-widest text-red-500/70 uppercase">Sponsor Us</h2>
          </div>
          <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight">Fuel our next launch.</h3>
          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Building complex aerospace hardware requires significant resources. We rely on the generous support of corporate partners and alumni to fund materials, manufacturing, and travel to national competitions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 shadow-sm text-center hover:border-red-900/50 transition-colors">
              <h4 className="font-semibold text-lg mb-1 text-zinc-200">Bronze</h4>
              <div className="text-red-500/80 text-sm mb-4">$500+</div>
              <ul className="text-sm text-zinc-400 space-y-2 text-left">
                <li>• Logo on website</li>
                <li>• Social media shoutout</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 shadow-sm text-center relative overflow-hidden hover:border-red-900/50 transition-colors">
              <div className="absolute top-0 inset-x-0 h-1 bg-red-600"></div>
              <h4 className="font-semibold text-lg mb-1 text-zinc-200">Silver</h4>
              <div className="text-red-500/80 text-sm mb-4">$1,000+</div>
              <ul className="text-sm text-zinc-400 space-y-2 text-left">
                <li>• Logo on rocket</li>
                <li>• Resume book access</li>
                <li>• Bronze benefits</li>
              </ul>
            </div>
            <div className="bg-red-950/30 text-white p-6 rounded-2xl shadow-md text-center border border-red-900/50 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-red-500"></div>
              <Award className="absolute -bottom-4 -right-4 w-24 h-24 text-red-500/10" />
              <h4 className="font-semibold text-lg mb-1">Gold</h4>
              <div className="text-red-400 text-sm mb-4">$3,000+</div>
              <ul className="text-sm text-zinc-300 space-y-2 text-left relative z-10">
                <li>• Prominent logo placement</li>
                <li>• Exclusive recruiting event</li>
                <li>• Silver benefits</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5 shadow-sm">
            <h4 className="font-medium text-xl mb-4 text-zinc-100">Become a Sponsor</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all bg-black text-white placeholder-zinc-600" />
                <input type="email" placeholder="Contact Email" className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all bg-black text-white placeholder-zinc-600" />
              </div>
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all bg-black text-white placeholder-zinc-600 resize-none"></textarea>
              <button className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition-colors">Submit Inquiry</button>
            </form>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-zinc-500">
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
          <h3 className="text-4xl font-semibold mb-6 text-red-500 tracking-tight">Launch your career.</h3>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            We are always looking for passionate students from all majors—engineering, business, design, and more. No prior rocketry experience required.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <a href="#" className="flex-1 bg-red-600 text-white px-6 py-4 rounded-xl flex items-center justify-between hover:bg-red-700 transition-colors group shadow-lg shadow-red-900/20">
              <span className="font-medium">Fill out Interest Form</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex-1 flex gap-4">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 hover:border-white/20 transition-colors text-zinc-300 font-medium">
                <MessageSquare className="w-4 h-4" />
                Messenger Group
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 hover:border-white/20 transition-colors text-zinc-300 font-medium">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </section>

      </div>

      <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-sm text-zinc-500">
        <p>© 2026 Buckeye Rocketry. At The Ohio State University.</p>
      </footer>
    </main>
  );
}
