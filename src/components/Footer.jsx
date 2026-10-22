import { Instagram, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><Link className="brand" to="/"><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></Link><p>Bringing people together,<br />one experience at a time.</p></div><div className="footer-links"><div><strong>Explore</strong><Link to="/events">All events</Link><Link to="/events">Music</Link><Link to="/events">Workshops</Link></div><div><strong>Company</strong><Link to="/about">About us</Link><Link to="/#how-it-works">How it works</Link><Link to="/contact">Contact</Link></div><div><strong>Follow along</strong><a href="#instagram"><Instagram size={15} /> Instagram</a><a href="#facebook">Facebook</a><a href="#linkedin">LinkedIn</a></div></div></div><div className="footer-bottom"><span>© 2026 Gatherly. Made for moments.</span><span>Privacy policy &nbsp; Terms of use</span></div></footer>;
}
