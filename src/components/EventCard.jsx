import { useState } from "react";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export default function EventCard({ event }) {
  const [saved, setSaved] = useState(false);
  return <article className="event-card"><div className="event-image"><img src={event.image} alt={event.title} /><span className={`event-tag ${event.accent}`}>{event.category}</span><button className={saved ? "saved" : ""} aria-label={`Save ${event.title}`} onClick={() => setSaved(!saved)}>{saved ? "♥" : "♡"}</button></div><div className="event-info"><h3>{event.title}</h3><div className="event-meta"><span><CalendarDays size={14} /> {event.date}</span><span><Clock3 size={14} /> {event.time}</span></div><div className="event-meta"><span><MapPin size={14} /> {event.location}</span></div><div className="event-bottom"><strong>{event.price} <small>/ person</small></strong><Link to={`/events/${encodeURIComponent(event.title)}`}>View details <ArrowRight size={14} /></Link></div></div></article>;
}
