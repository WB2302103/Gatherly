import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const close = () => setMenuOpen(false);
  const goToSection = (id) => (event) => {
    event.preventDefault();
    close();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 0);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return <header className="site-header">
    <Link className="brand" to="/" onClick={close}><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></Link>
    <nav className={`main-nav page-nav ${menuOpen ? "is-open" : ""}`}>
      <Link to="/" onClick={location.pathname === "/" ? goToSection("home") : close}>Home</Link><Link to={location.pathname === "/" ? "#events" : "/events"} onClick={location.pathname === "/" ? goToSection("events") : close}>Explore events</Link><Link to="/#how-it-works" onClick={goToSection("how-it-works")}>How it works</Link><Link to="/about" onClick={close}>About us</Link>
      <div className="mobile-actions"><Link className="button button-light" to="/login" onClick={close}>Log in</Link><Link className="button button-dark" to="/signup" onClick={close}>Create account <ArrowRight size={16} /></Link></div>
    </nav>
    <div className="header-actions"><Link className="login-link" to="/login">Log in</Link><Link className="button button-dark" to="/signup">Create account <ArrowRight size={16} /></Link></div>
    <button className="menu-toggle" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}
