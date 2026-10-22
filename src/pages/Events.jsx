import { useState } from "react";
import { Search } from "lucide-react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import PageShell from "../components/PageShell";
export default function Events() {
  const [query, setQuery] = useState("");
  const filtered = events.filter((event) => `${event.title} ${event.category} ${event.location}`.toLowerCase().includes(query.toLowerCase()));
  return <PageShell><main className="inner-page"><div className="eyebrow"><span /> Explore the calendar</div><h1 className="page-title">Find your next <em>experience.</em></h1><p className="page-lead">Browse events curated for curious, creative and social people.</p><label className="search-box page-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by event, category or location" /></label><div className="event-grid">{filtered.map((event) => <EventCard event={event} key={event.title} />)}</div>{!filtered.length && <div className="empty-state">No events match your search.</div>}</main></PageShell>;
}
