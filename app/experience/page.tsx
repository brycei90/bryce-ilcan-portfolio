import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience", description: "Leadership, power-electronics research, and hands-on engineering experience." };

export default function ExperiencePage() {
  return (
    <main><section className="section-shell page-intro"><div className="page-intro-grid"><div><p className="eyebrow">Experience</p><h1>Leading teams. Building hardware.</h1></div><p>My experience connects research-level power conversion with practical avionics development, system integration, and team leadership.</p></div></section>
      <section className="section-shell content-panel"><div className="timeline">
        <article className="timeline-item"><p className="timeline-date">MAY 2026 — PRESENT</p><h2>University of Calgary</h2><p className="timeline-role">Power Electronics Researcher</p><ul><li>Developing a 725 W, nominal 324 V-to-12 V phase-shifted full-bridge DC-DC converter with synchronous rectification and a stackable multilevel secondary architecture.</li><li>Simulating the power stage and open-loop modulation strategies in PLECS.</li><li>Designed a custom planar transformer using analytical calculations and validated its magnetic performance in FEMM and Ansys Maxwell.</li><li>Designed a four-layer PCB integrating planar transformer and inductor structures with signal routing and high-power copper planes.</li></ul></article>
        <article className="timeline-item"><p className="timeline-date">OCTOBER 2024 — PRESENT</p><h2>Schulich Unmanned Aerial Vehicles</h2><p className="timeline-role">Co-Avionics Lead · Junior Executive, Jul 2025–Feb 2026 · Avionics Member, Oct 2024–Jun 2025</p><ul><li>Lead the electrical team within a 60+ member student design club, coordinating PCB development and aircraft electrical integration.</li><li>Spearhead a custom electronic speed controller while overseeing GPS, smart DC-DC converter, and instrumented motor-test-stand projects.</li><li>Led a three-person team designing a BQ76952-based Li-ion monitoring PCB in Altium with multiplexed I²C communication to a Raspberry Pi.</li><li>Developed C++ plugins for Lockheed Martin VCSI and supported aircraft integration and autonomous mission planning.</li><li>Helped the team place first out of 81 teams in SUAS 2025 design deliverables and ninth overall at C-UASC 2026.</li></ul></article>
      </div></section>
    </main>
  );
}
