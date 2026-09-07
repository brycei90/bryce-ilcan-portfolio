import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";

export const metadata: Metadata = { title: "Projects", description: "Power electronics, PCB, embedded hardware, and UAV engineering projects by Bryce Ilcan." };

export default function ProjectsPage() {
  return <main><section className="section-shell page-intro"><div className="page-intro-grid"><div><p className="eyebrow">Engineering portfolio</p><h1>Projects built from first principles.</h1></div><p>Explore the architecture, implementation, tools, challenges, and validation behind my power electronics, embedded, PCB, and UAV work.</p></div></section><section className="section-shell content-panel"><ProjectExplorer /></section></main>;
}
