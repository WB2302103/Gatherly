import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const close = () => setMenuOpen(false);
  const homeLink = (id) => location.pathname === "/" ? `#${id}` : `/#${id}`;
  return <header className="site-header">
    <Link className="brand" to="/" onClick={close}><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></Link>
    <nav className={`main-nav page-nav ${menuOpen ? "is-open" : ""}`}>
      <Link to={homeLink("home")} onClick={close}>Home</Link><Link to={location.pathname === "/" ? "#events" : "/events"} onClick={close}>Explore events</Link><Link to={homeLink("how-it-works")} onClick={close}>How it works</Link><Link to={location.pathname === "/" ? "#about" : "/about"} onClick={close}>About us</Link>
      <div className="mobile-actions"><Link className="button button-light" to="/login" onClick={close}>Log in</Link><Link className="button button-dark" to="/signup" onClick={close}>Create account <ArrowRight size={16} /></Link></div>
    </nav>
    <div className="header-actions"><Link className="login-link" to="/login">Log in</Link><Link className="button button-dark" to="/signup">Create account <ArrowRight size={16} /></Link></div>
    <button className="menu-toggle" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}
