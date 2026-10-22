import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";
import PageShell from "../components/PageShell";
export default function EventDetails() {
  const { eventTitle } = useParams();
  const event = events.find((item) => item.title === decodeURIComponent(eventTitle));
  if (!event) return <PageShell><main className="inner-page"><h1 className="page-title">Event not found.</h1><Link className="button button-primary" to="/events">Back to events</Link></main></PageShell>;
  return <PageShell><main className="detail-page"><img className="detail-image" src={event.image} alt={event.title} /><div className="detail-copy"><span className={`event-tag ${event.accent}`}>{event.category}</span><h1 className="page-title">{event.title}</h1><p className="page-lead">Join a welcoming community for an unforgettable experience filled with new ideas, great conversations and memorable moments.</p><div className="detail-meta"><span><CalendarDays size={17} /> {event.date}</span><span><Clock3 size={17} /> {event.time}</span><span><MapPin size={17} /> {event.location}</span></div><button className="button button-primary" onClick={() => window.alert("Booking will be available in the final version.")}>Reserve your spot <Ticket size={17} /></button></div></main></PageShell>;
}
