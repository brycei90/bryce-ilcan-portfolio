import Link from "next/link";
import { ConverterDiagram, ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/portfolio";

const featured = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Calgary, Alberta · Open to May 2027 internships</p>
          <h1>I design the hardware <span>behind intelligent systems.</span></h1>
          <p className="hero-lede">
            I&apos;m Bryce Ilcan, an Electrical Engineering student building power converters,
            custom PCBs, embedded devices, and autonomous UAV systems.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">Explore my work</Link>
            <a className="button button-secondary" href="/Bryce-Ilcan-Resume-2026.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-links" aria-label="Professional profiles">
            <a href="https://github.com/brycei90" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/bryce-ilcan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:bryceilcan29@gmail.com">Email</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-kicker"><span>ACTIVE RESEARCH</span><span>725 W</span></div>
          <ConverterDiagram />
          <div className="visual-stats">
            <div><strong>324 V</strong><span>input bus</span></div>
            <div><strong>12 V</strong><span>output</span></div>
            <div><strong>4-layer</strong><span>custom PCB</span></div>
          </div>
        </div>
      </section>

      <section className="credibility-strip" aria-label="Career highlights">
        <div><strong>60+</strong><span>member UAV team</span></div>
        <div><strong>1st</strong><span>SUAS design deliverables</span></div>
        <div><strong>725 W</strong><span>converter research</span></div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>From system architecture<br />to tested hardware.</h2>
          </div>
          <p>Each case study documents the problem, design decisions, tools, implementation, and next validation step.</p>
        </div>
        <div className="project-grid featured-grid">
          {featured.map((project, index) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectVisual type={project.visual} index={index + 1} image={project.coverImage?.src} alt={project.coverImage?.alt} imageFit={project.coverImage?.fit} />
              <div className="project-card-copy">
                <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <h3>{project.shortTitle}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <span className="text-link">View case study</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="center-row"><Link className="button button-secondary" href="/projects">View all projects</Link></div>
      </section>

      <section className="dark-section">
        <div className="section-shell split-section">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2>Power electronics meets embedded hardware.</h2>
          </div>
          <div className="focus-list">
            <article><span>01</span><div><h3>Power conversion</h3><p>PSFB topologies, synchronous rectification, open-loop control, and planar magnetics.</p></div></article>
            <article><span>02</span><div><h3>PCB development</h3><p>Component selection, schematic capture, layout, assembly, bring-up, and validation.</p></div></article>
            <article><span>03</span><div><h3>Embedded systems</h3><p>nRF52840 hardware, digital interfaces, power management, Zephyr, and embedded C.</p></div></article>
            <article><span>04</span><div><h3>Autonomous aircraft</h3><p>Avionics integration, telemetry, mission planning, custom batteries, and flight testing.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-shell section-block contact-cta">
        <div>
          <p className="eyebrow">Let&apos;s build something</p>
          <h2>Looking for a hardware engineer who likes getting deep into the design?</h2>
        </div>
        <div>
          <p>I&apos;m seeking 12–16 month hardware, power-electronics, PCB, or embedded internships beginning May 2027.</p>
          <Link className="button button-primary" href="/contact">Start a conversation</Link>
        </div>
      </section>
    </main>
  );
}
