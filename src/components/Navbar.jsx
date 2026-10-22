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
  return <header className="site-header mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-8 max-[560px]:h-[70px] max-[560px]:px-5">
    <Link className="brand flex items-center gap-2 text-[21px] font-bold tracking-[-0.8px]" to="/" onClick={close}><span className="brand-mark grid h-[31px] w-[31px] place-items-center rounded-[10px] bg-purple text-white"><Sparkles size={17} /></span>gatherly<span className="brand-dot text-purple">.</span></Link>
    <nav className={`main-nav page-nav ml-[100px] flex gap-8 max-[850px]:ml-0 max-[850px]:gap-3.5 max-[560px]:hidden ${menuOpen ? "is-open absolute left-[15px] right-[15px] top-[70px] z-10 flex flex-col gap-5 rounded-xl bg-white p-5 shadow-[0_15px_30px_#3331]" : ""}`}>
      <Link to="/" onClick={location.pathname === "/" ? goToSection("home") : close}>Home</Link><Link to={location.pathname === "/" ? "#events" : "/events"} onClick={location.pathname === "/" ? goToSection("events") : close}>Explore events</Link><Link to="/#how-it-works" onClick={goToSection("how-it-works")}>How it works</Link><Link to="/about" onClick={close}>About us</Link>
      <div className="mobile-actions"><Link className="button button-light" to="/login" onClick={close}>Log in</Link><Link className="button button-dark" to="/signup" onClick={close}>Create account <ArrowRight size={16} /></Link></div>
    </nav>
    <div className="header-actions flex items-center gap-[25px] max-[560px]:hidden"><Link className="login-link text-[13px] text-[#6f6d72] hover:text-purple" to="/login">Log in</Link><Link className="button button-dark inline-flex items-center gap-[9px] rounded-full bg-ink px-[19px] py-[13px] text-[13px] font-semibold text-white" to="/signup">Create account <ArrowRight size={16} /></Link></div>
    <button className="menu-toggle hidden max-[560px]:block" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}
