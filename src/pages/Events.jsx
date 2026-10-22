import { useState } from "react";
import { Search } from "lucide-react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import PageShell from "../components/PageShell";
export default function Events() {
  const [query, setQuery] = useState("");
  const filtered = events.filter((event) => `${event.title} ${event.category} ${event.location}`.toLowerCase().includes(query.toLowerCase()));
  return <PageShell><main className="inner-page mx-auto min-h-[620px] max-w-[1180px] px-2.5 py-[110px] max-[560px]:px-5 max-[560px]:py-[70px]"><div className="eyebrow flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[1.5px] text-purple"><span className="h-px w-[25px] bg-purple" /> Explore the calendar</div><h1 className="page-title my-[18px] max-w-[760px] text-[60px] font-semibold leading-[1.08] tracking-[-3px] max-[560px]:text-[43px]">Find your next <em>experience.</em></h1><p className="page-lead max-w-[560px] text-[15px] leading-[1.7] text-muted">Browse events curated for curious, creative and social people.</p><label className="search-box page-search my-9 flex w-[360px] items-center gap-2 rounded-full border border-[#e3dfdc] bg-white px-[15px] py-2.5 text-xs text-[#aaa] max-[560px]:w-full"><Search size={17} /><input className="w-full border-0 bg-transparent text-xs outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by event, category or location" /></label><div className="event-grid grid grid-cols-3 gap-5 max-[560px]:grid-cols-1">{filtered.map((event) => <EventCard event={event} key={event.title} />)}</div>{!filtered.length && <div className="empty-state rounded-xl border border-dashed border-[#ded9d4] p-[45px] text-center text-muted">No events match your search.</div>}</main></PageShell>;
}
