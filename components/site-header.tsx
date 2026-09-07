import Link from "next/link";

const links = [
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["About", "/about"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/"><span className="brand-mark">BI</span><span>Bryce Ilcan</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="nav-contact" href="/contact">Contact</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
