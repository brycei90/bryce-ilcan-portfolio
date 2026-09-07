"use client";

import Link from "next/link";
import { useState } from "react";
import { ProjectVisual } from "@/components/project-visual";
import { categories, projects } from "@/lib/portfolio";

export function ProjectExplorer() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.categories.includes(active));
  return (
    <>
      <div className="filter-list" role="group" aria-label="Filter projects by discipline">
        {categories.map((category) => (
          <button className={`filter-button ${active === category ? "active" : ""}`} type="button" aria-pressed={active === category} onClick={() => setActive(category)} key={category}>{category}</button>
        ))}
      </div>
      <p className="project-count">SHOWING {visible.length} / {projects.length} PROJECTS</p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
            <ProjectVisual type={project.visual} index={index + 1} image={project.coverImage?.src} alt={project.coverImage?.alt} imageFit={project.coverImage?.fit} />
            <div className="project-card-copy">
              <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
              <h3>{project.shortTitle}</h3><p>{project.summary}</p>
              <div className="tag-row">{project.tags.slice(0,4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <span className="text-link">View case study ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
