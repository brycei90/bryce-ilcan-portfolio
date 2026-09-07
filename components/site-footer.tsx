import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div><h2>Bryce Ilcan</h2><p>Electrical engineering portfolio · Power electronics, PCB design, embedded hardware, and UAV systems.</p></div>
          <div className="footer-links">
            <Link href="/projects">Projects</Link><Link href="/experience">Experience</Link><Link href="/about">About</Link>
            <a href="https://github.com/brycei90" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/bryce-ilcan" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom"><span>Calgary, Alberta, Canada</span><span>© {new Date().getFullYear()} Bryce Ilcan</span></div>
      </div>
    </footer>
  );
}
