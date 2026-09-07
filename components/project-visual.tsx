export function ConverterDiagram() {
  return (
    <div className="converter-diagram" aria-label="Simplified phase-shifted full-bridge converter architecture">
      <svg className="waveform" viewBox="0 0 620 110" role="img" aria-label="Phase shifted switching waveforms">
        <path d="M0 28 H45 V75 H110 V28 H180 V75 H245 V28 H315 V75 H380 V28 H450 V75 H515 V28 H620" />
        <path opacity=".5" d="M0 58 H90 V95 H155 V58 H225 V95 H290 V58 H360 V95 H425 V58 H495 V95 H560 V58 H620" />
      </svg>
      <div className="diagram-flow">
        <div className="diagram-node"><strong>DC BUS</strong><span>324 V NOM.</span></div><span className="diagram-arrow">→</span>
        <div className="diagram-node"><strong>PSFB</strong><span>PHASE SHIFT</span></div><span className="diagram-arrow">→</span>
        <div className="diagram-node"><strong>PLANAR XFMR</strong><span>MULTILEVEL SEC.</span></div>
      </div>
    </div>
  );
}

const nodes: Record<string, string[]> = {
  converter: ["324V", "PSFB", "XFMR", "12V"],
  embedded: ["LiPo", "PMIC", "nRF", "LCD"],
  battery: ["CELLS", "BQ76952", "MUX", "RPI"],
  drone: ["GCS", "MAVLINK", "FCU", "UAV"],
  firmware: ["INPUT", "ZEPHYR", "GPIO"],
  esc: ["DC", "GATE", "MOSFET", "MOTOR"],
};

export function ProjectVisual({ type, index = 1, image, alt, imageFit = "contain" }: { type: string; index?: number; image?: string; alt?: string; imageFit?: "cover" | "contain" }) {
  if (image) {
    return (
      <div className={`project-visual project-visual-photo ${imageFit === "cover" ? "project-visual-photo-cover" : ""}`}>
        <img src={image} alt={alt ?? "Project hardware render"} />
        <span className="visual-index">PROJECT / {String(index).padStart(2,"0")}</span>
        <div className="visual-label"><strong>{type.toUpperCase()}</strong><span>VIEW HARDWARE ↗</span></div>
      </div>
    );
  }
  const items = nodes[type] ?? nodes.embedded;
  return (
    <div className="project-visual">
      <span className="visual-index">PROJECT / {String(index).padStart(2,"0")}</span>
      <div className="mini-schematic" aria-hidden="true">
        {items.map((item, i) => <span key={item} style={{display:"contents"}}><i>{item}</i>{i < items.length - 1 && <b>→</b>}</span>)}
      </div>
      <div className="visual-label"><strong>{type.toUpperCase()}</strong><span>VIEW SYSTEM ↗</span></div>
    </div>
  );
}
