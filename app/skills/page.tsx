import type { Metadata } from "next";

export const metadata: Metadata = { title: "Technical Skills", description: "Tools and capabilities across power electronics, PCB design, embedded systems, software, and UAVs." };

const groups = [
  ["Power electronics & simulation", ["DC-DC Converters", "PLECS", "LTspice", "FEMM", "Ansys Maxwell", "Planar Magnetics", "Open-loop Control", "Modulation"]],
  ["PCB & hardware", ["Altium Designer", "Schematic Capture", "PCB Layout", "Component Selection", "Prototyping", "Oscilloscope", "Multimeter", "Soldering", "Reflow", "Li-ion Pack Fabrication"]],
  ["Embedded systems", ["nRF52840", "Raspberry Pi", "I²C", "SPI", "UART", "QSPI", "SWD", "USB", "GPIO", "Zephyr RTOS", "Devicetree", "Embedded C"]],
  ["Software & tools", ["C", "C++", "Python", "JavaScript", "TypeScript", "React", "FastAPI", "WebSockets", "Quartus", "Fusion 360", "Git", "Linux"]],
  ["UAV & autonomy", ["ArduPilot", "ArduCopter", "pymavlink", "Mission Planner", "Telemetry", "Autonomous Missions", "Ground Control Stations"]],
  ["Engineering workflow", ["Requirements", "Architecture", "Simulation", "Design Reviews", "Prototyping", "Bring-up", "Integration", "Testing"]],
];

export default function SkillsPage() {
  return <main><section className="section-shell page-intro"><div className="page-intro-grid"><div><p className="eyebrow">Technical toolkit</p><h1>Skills grounded in real projects.</h1></div><p>I use these tools to move from system requirements through simulation, design, integration, and validation—not as isolated résumé keywords.</p></div></section><section className="section-shell content-panel"><div className="skills-grid">{groups.map(([title, skills], index) => <article className="skill-card" key={title as string}><span className="number">0{index + 1}</span><h2>{title as string}</h2><div className="tag-row">{(skills as string[]).map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article>)}</div></section></main>;
}
