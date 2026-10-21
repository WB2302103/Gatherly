import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Play,
  Search,
  Sparkles,
  Ticket,
  Users,
  X,
} from "lucide-react";

const categories = [
  { name: "All events", icon: "✦" },
  { name: "Music", icon: "♫" },
  { name: "Business", icon: "↗" },
  { name: "Workshop", icon: "⌘" },
  { name: "Sports", icon: "✧" },
];

const events = [
  {
    title: "Neon Nights Festival",
    category: "Music",
    date: "Oct 26, 2026",
    time: "7:00 PM",
    location: "Rooftop Arena, Dhaka",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    accent: "violet",
  },
  {
    title: "Future of Work Summit",
    category: "Business",
    date: "Nov 02, 2026",
    time: "10:00 AM",
    location: "Innovation Hub, Dhaka",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
    accent: "orange",
  },
  {
    title: "Clay & Calm Workshop",
    category: "Workshop",
    date: "Nov 08, 2026",
    time: "4:30 PM",
    location: "The Makers Space",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
    accent: "blue",
  },
];

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All events");
  const [search, setSearch] = useState("");

  const visibleEvents = useMemo(() => {
    const term = search.trim().toLowerCase();
    return events.filter((event) => {
      const categoryMatch =
        activeCategory === "All events" || event.category === activeCategory;
      const searchMatch =
        !term ||
        `${event.title} ${event.category} ${event.location}`
          .toLowerCase()
          .includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => scrollTo("home")}>
          <span className="brand-mark"><Sparkles size={17} /></span>
          gatherly<span className="brand-dot">.</span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("events")}>Explore events</button>
          <button onClick={() => scrollTo("how-it-works")}>How it works</button>
          <button onClick={() => scrollTo("about")}>About us</button>
          <div className="mobile-actions">
            <button className="button button-light">Log in</button>
            <button className="button button-dark">Create account <ArrowRight size={16} /></button>
          </div>
        </nav>
        <div className="header-actions">
          <button className="login-link">Log in</button>
          <button className="button button-dark">Create account <ArrowRight size={16} /></button>
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Your next great memory starts here</div>
            <h1 className="hero-title">Make every<br /><em>moment</em> count.</h1>
            <p>Discover experiences that bring people together. From intimate workshops to unforgettable festivals, find your next favorite event.</p>
            <div className="hero-buttons">
              <button className="button button-primary" onClick={() => scrollTo("events")}>Explore events <ArrowRight size={17} /></button>
              <button className="play-button"><span><Play size={14} fill="currentColor" /></span> See how it works</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <img src="https://i.pravatar.cc/80?img=12" alt="" />
                <img src="https://i.pravatar.cc/80?img=32" alt="" />
                <img src="https://i.pravatar.cc/80?img=47" alt="" />
                <span>+</span>
              </div>
              <div><strong>12k+</strong><small>happy attendees</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=90" alt="People enjoying an outdoor event" />
              <div className="image-caption">
                <div className="caption-icon"><CalendarDays size={17} /></div>
                <div><strong>Good times ahead</strong><span>Find your kind of fun</span></div>
              </div>
            </div>
            <div className="floating-card floating-top"><Sparkles size={15} /><span>Curated for you</span></div>
            <div className="floating-card floating-bottom"><div className="mini-avatar"><img src="https://i.pravatar.cc/80?img=5" alt="" /></div><span><strong>Maria just joined</strong><small>Neon Nights Festival</small></span><Check size={16} /></div>
          </div>
        </section>

        <section className="trust-bar">
          <span>Trusted by people who love to</span>
          <b>CONNECT</b><b>CREATE</b><b>CELEBRATE</b><b>EXPLORE</b>
        </section>

        <section className="events-section section" id="events">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> Don&apos;t miss out</div><h2>Find your next<br /><em>favorite thing.</em></h2></div>
            <p>Whether you&apos;re looking to learn something new, meet inspiring people, or simply have a great time—we&apos;ve got an event for you.</p>
          </div>
          <div className="event-tools">
            <div className="category-tabs">
              {categories.map((category) => <button className={activeCategory === category.name ? "active" : ""} key={category.name} onClick={() => setActiveCategory(category.name)}><span>{category.icon}</span>{category.name}</button>)}
            </div>
            <label className="search-box"><Search size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search events..." /></label>
          </div>
          <div className="event-grid">
            {visibleEvents.map((event) => <EventCard event={event} key={event.title} />)}
          </div>
          {visibleEvents.length === 0 && <div className="empty-state">No events found. Try another search or category.</div>}
          <div className="center-button"><button className="button button-outline" onClick={() => { setActiveCategory("All events"); setSearch(""); }}>View all events <ArrowRight size={16} /></button></div>
        </section>

        <section className="experience section" id="how-it-works">
          <div className="experience-image"><img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=85" alt="Friends laughing together" /><span className="experience-sticker">Good<br />vibes<br />only ✦</span></div>
          <div className="experience-copy"><div className="eyebrow"><span /> It&apos;s easy to get started</div><h2>More than an event.<br /><em>It&apos;s an experience.</em></h2><p>We believe the best moments happen when great people and great experiences come together. Here&apos;s how to find yours.</p><div className="steps"><Step number="01" title="Discover" text="Browse events curated around what you love." /><Step number="02" title="Connect" text="Save your spot and meet your kind of people." /><Step number="03" title="Experience" text="Show up, be present, and make it memorable." /></div></div>
        </section>

        <section className="cta-section" id="about"><div><div className="eyebrow light"><span /> Your people are waiting</div><h2>Ready to make<br /><em>some memories?</em></h2></div><button className="button button-white" onClick={() => scrollTo("events")}>Find an event <ArrowRight size={17} /></button></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><div><a className="brand" href="#home"><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></a><p>Bringing people together,<br />one experience at a time.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#events">All events</a><a href="#events">Music</a><a href="#events">Workshops</a></div><div><strong>Company</strong><a href="#about">About us</a><a href="#how-it-works">How it works</a><a href="#about">Contact</a></div><div><strong>Follow along</strong><a href="#home"><Instagram size={15} /> Instagram</a><a href="#home">Facebook</a><a href="#home">LinkedIn</a></div></div></div><div className="footer-bottom"><span>© 2026 Gatherly. Made for moments.</span><span>Privacy policy &nbsp; Terms of use</span></div></footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function EventCard({ event }) {
  return <article className="event-card"><div className="event-image"><img src={event.image} alt="" /><span className={`event-tag ${event.accent}`}>{event.category}</span><button aria-label={`Save ${event.title}`}>♡</button></div><div className="event-info"><h3>{event.title}</h3><div className="event-meta"><span><CalendarDays size={14} /> {event.date}</span><span><Clock3 size={14} /> {event.time}</span></div><div className="event-meta"><span><MapPin size={14} /> {event.location}</span></div><div className="event-bottom"><strong>{event.price} <small>/ person</small></strong><button>View details <ArrowRight size={14} /></button></div></div></article>;
}

function Step({ number, title, text }) {
  return <div className="step"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>;
}

export default App;
