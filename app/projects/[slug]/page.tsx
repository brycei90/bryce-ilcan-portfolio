import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound();
  return (
    <main>
      <section className="section-shell project-hero">
        <div><p className="eyebrow">{project.category} · {project.status}</p><h1>{project.title}</h1><p className="summary">{project.summary}</p><div className="tag-row" style={{marginTop:24}}>{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>{project.confidential && <div className="confidential-note">Some technical details are intentionally withheld because this is ongoing research that may involve unpublished or patent-sensitive work.</div>}</div>
        <ProjectVisual type={project.visual} image={project.coverImage?.src} alt={project.coverImage?.alt} imageFit={project.coverImage?.fit} />
      </section>
      <section className="section-shell case-layout">
        <aside className="case-aside"><h2>Case study</h2><ul><li>01 / Overview</li><li>02 / {project.requirementsTitle ?? "Requirements"}</li><li>03 / My contribution</li><li>04 / Process</li><li>05 / Status & results</li><li>06 / Project media</li></ul></aside>
        <div className="case-main">
          <section className="case-section"><h2>Overview</h2><p>{project.overview}</p></section>
          <section className="case-section"><h2>{project.requirementsTitle ?? "Design requirements"}</h2><p>{project.requirementsTitle ? "The project brought the following embedded communication, control, sensing, and debugging work into one functioning system." : "The design was shaped by the following system-level and implementation requirements."}</p><div className="bullet-grid">{project.requirements.map((item) => <div className="bullet-item" key={item}>{item}</div>)}</div></section>
          <section className="case-section"><h2>My contribution</h2><p>My responsibilities spanned technical development, integration, and—where applicable—team leadership.</p><div className="bullet-grid">{project.contributions.map((item) => <div className="bullet-item" key={item}>{item}</div>)}</div></section>
          <section className="case-section"><h2>Engineering process</h2><p>{project.process}</p></section>
          <section className="case-section"><h2>Status and results</h2><p>{project.results}</p></section>
          <section className="case-section"><h2>Project media</h2>{project.images?.length ? <><p>Selected project photographs and design captures. Open any image to inspect it at full resolution.</p><div className="media-grid">{project.images.map((image) => <figure className={image.wide ? "project-media-card project-media-card-wide" : "project-media-card"} key={image.src}><a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-resolution image: ${image.caption}`}><img src={image.src} alt={image.alt} loading="lazy" /></a><figcaption>{image.caption}</figcaption></figure>)}</div></> : <><p>High-resolution screenshots, annotated diagrams, prototype photographs, waveforms, and test results will be added as the project progresses.</p><div className="media-grid">{project.media.map((item) => <div className="media-placeholder" key={item}>Planned: {item}</div>)}</div></>}</section>
          <Link className="button button-secondary" href="/projects">← Back to all projects</Link>
        </div>
      </section>
    </main>
  );
}
