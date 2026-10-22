import { useMemo, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
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
            <Link className="button button-light" to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
            <Link className="button button-dark" to="/signup" onClick={() => setMenuOpen(false)}>Create account <ArrowRight size={16} /></Link>
          </div>
        </nav>
        <div className="header-actions">
          <Link className="login-link" to="/login">Log in</Link>
          <Link className="button button-dark" to="/signup">Create account <ArrowRight size={16} /></Link>
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
              <button className="play-button" onClick={() => scrollTo("how-it-works")}><span><Play size={14} fill="currentColor" /></span> See how it works</button>
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventTitle" element={<EventDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function EventCard({ event }) {
  const [saved, setSaved] = useState(false);
  return <article className="event-card"><div className="event-image"><img src={event.image} alt={event.title} /><span className={`event-tag ${event.accent}`}>{event.category}</span><button className={saved ? "saved" : ""} aria-label={`Save ${event.title}`} onClick={() => setSaved(!saved)}>{saved ? "♥" : "♡"}</button></div><div className="event-info"><h3>{event.title}</h3><div className="event-meta"><span><CalendarDays size={14} /> {event.date}</span><span><Clock3 size={14} /> {event.time}</span></div><div className="event-meta"><span><MapPin size={14} /> {event.location}</span></div><div className="event-bottom"><strong>{event.price} <small>/ person</small></strong><Link to={`/events/${encodeURIComponent(event.title)}`}>View details <ArrowRight size={14} /></Link></div></div></article>;
}

function PageShell({ children }) {
  return <div className="app"><header className="site-header"><Link className="brand" to="/"><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></Link><nav className="main-nav page-nav"><Link to="/">Home</Link><Link to="/events">Explore events</Link><Link to="/about">About us</Link><Link to="/contact">Contact</Link></nav><div className="header-actions"><Link className="login-link" to="/contact">Log in</Link><Link className="button button-dark" to="/events">Explore events <ArrowRight size={16} /></Link></div></header>{children}<footer className="site-footer"><div className="footer-top"><div><Link className="brand" to="/"><span className="brand-mark"><Sparkles size={17} /></span>gatherly<span className="brand-dot">.</span></Link><p>Bringing people together,<br />one experience at a time.</p></div><div className="footer-links"><div><strong>Explore</strong><Link to="/events">All events</Link><Link to="/events">Music</Link><Link to="/events">Workshops</Link></div><div><strong>Company</strong><Link to="/about">About us</Link><Link to="/#how-it-works">How it works</Link><Link to="/contact">Contact</Link></div><div><strong>Follow along</strong><a href="#instagram"><Instagram size={15} /> Instagram</a><a href="#facebook">Facebook</a><a href="#linkedin">LinkedIn</a></div></div></div><div className="footer-bottom"><span>© 2026 Gatherly. Made for moments.</span><span>Privacy policy &nbsp; Terms of use</span></div></footer></div>;
}

function EventsPage() {
  const [query, setQuery] = useState("");
  const filtered = events.filter((event) => `${event.title} ${event.category} ${event.location}`.toLowerCase().includes(query.toLowerCase()));
  return <PageShell><main className="inner-page"><div className="eyebrow"><span /> Explore the calendar</div><h1 className="page-title">Find your next <em>experience.</em></h1><p className="page-lead">Browse events curated for curious, creative and social people.</p><label className="search-box page-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by event, category or location" /></label><div className="event-grid">{filtered.map((event) => <EventCard event={event} key={event.title} />)}</div>{!filtered.length && <div className="empty-state">No events match your search.</div>}</main></PageShell>;
}

function EventDetailsPage() {
  const { eventTitle } = useParams();
  const event = events.find((item) => item.title === decodeURIComponent(eventTitle));
  if (!event) return <PageShell><main className="inner-page"><h1 className="page-title">Event not found.</h1><Link className="button button-primary" to="/events">Back to events</Link></main></PageShell>;
  return <PageShell><main className="detail-page"><img className="detail-image" src={event.image} alt={event.title} /><div className="detail-copy"><span className={`event-tag ${event.accent}`}>{event.category}</span><h1 className="page-title">{event.title}</h1><p className="page-lead">Join a welcoming community for an unforgettable experience filled with new ideas, great conversations and memorable moments.</p><div className="detail-meta"><span><CalendarDays size={17} /> {event.date}</span><span><Clock3 size={17} /> {event.time}</span><span><MapPin size={17} /> {event.location}</span></div><button className="button button-primary" onClick={() => window.alert("Booking will be available in the final version.")}>Reserve your spot <Ticket size={17} /></button></div></main></PageShell>;
}

function AboutPage() {
  return <PageShell><main className="inner-page about-page"><div className="eyebrow"><span /> Our story</div><h1 className="page-title">Good things happen when people <em>come together.</em></h1><p className="page-lead">Gatherly makes it easy to discover meaningful experiences and find the people who make them special. We curate events that help communities connect, learn and celebrate.</p><div className="about-grid"><div><Users size={28} /><h3>Built for connection</h3><p>Find your kind of people in spaces designed for genuine connection.</p></div><div><Sparkles size={28} /><h3>Curated experiences</h3><p>Every event is selected to help you spend your time on what matters.</p></div><div><Ticket size={28} /><h3>Simple discovery</h3><p>Search, save and explore your next favorite thing in a few clicks.</p></div></div></main></PageShell>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <PageShell><main className="inner-page contact-page"><div><div className="eyebrow"><span /> Say hello</div><h1 className="page-title">Let&apos;s make something <em>memorable.</em></h1><p className="page-lead">Have a question or want to host an event? Send us a note and our team will get back to you.</p></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required rows="5" placeholder="Tell us how we can help..." /></label><button className="button button-primary" type="submit">{sent ? "Message sent ✓" : "Send message"} <ArrowRight size={16} /></button></form></main></PageShell>;
}

function AuthPage({ mode }) {
  const isLogin = mode === "login";
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <main className="inner-page auth-page">
        <div className="auth-card">
          <div className="eyebrow"><span /> {isLogin ? "Welcome back" : "Join Gatherly"}</div>
          <h1 className="page-title">{isLogin ? <>Welcome <em>back.</em></> : <>Create your <em>account.</em></>}</h1>
          <p className="page-lead">
            {isLogin
              ? "Log in to manage your saved events and reservations."
              : "Save events, meet your people and make every moment count."}
          </p>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            {!isLogin && <label>Name<input required placeholder="Your name" /></label>}
            <label>Email<input required type="email" placeholder="you@example.com" /></label>
            <label>Password<input required type="password" minLength="6" placeholder="At least 6 characters" /></label>
            <button className="button button-primary" type="submit">
              {submitted ? (isLogin ? "Logged in ✓" : "Account created ✓") : (isLogin ? "Log in" : "Create account")}
              <ArrowRight size={16} />
            </button>
          </form>
          <p className="auth-switch">
            {isLogin ? "New to Gatherly?" : "Already have an account?"}{" "}
            <Link to={isLogin ? "/signup" : "/login"}>{isLogin ? "Create an account" : "Log in"}</Link>
          </p>
        </div>
      </main>
    </PageShell>
  );
}

function Step({ number, title, text }) {
  return <div className="step"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>;
}

export default App;
