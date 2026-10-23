import { Sparkles, Ticket, Users } from "lucide-react";
import PageShell from "../components/PageShell";
import communityImage from "../assets/gatherly-community.jpg";

export default function About() {
  return <PageShell><main className="mx-auto min-h-[620px] max-w-[1180px] px-2.5 py-[110px] max-[850px]:py-[80px] max-[560px]:px-5 max-[560px]:py-[70px]">
    <section className="grid grid-cols-[1fr_390px] items-center gap-[80px] max-[850px]:grid-cols-1 max-[850px]:gap-12">
      <div>
        <div className="flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[1.5px] text-purple"><span className="h-px w-[25px] bg-purple" /> Our story</div>
        <h1 className="my-[18px] max-w-[760px] text-[60px] font-semibold leading-[1.08] tracking-[-3px] max-[560px]:text-[43px]">Good things happen when people <em>come together.</em></h1>
        <p className="max-w-[560px] text-[15px] leading-[1.7] text-muted">Gatherly makes it easy to discover meaningful experiences and find the people who make them special. We curate events that help communities connect, learn and celebrate.</p>
      </div>
      <div className="relative mx-auto w-full max-w-[390px]">
        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#fbe4d5] max-[560px]:-right-2" />
        <img className="relative h-[480px] w-full rotate-2 rounded-[22px] object-cover shadow-[0_20px_50px_#584d5b1c] max-[560px]:h-[390px]" src={communityImage} alt="A Gatherly community member enjoying a garden event" />
        <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-4 py-3 shadow-[0_10px_30px_#3e345115] max-[560px]:-left-2">
          <strong className="block text-xs">Moments worth sharing</strong>
          <span className="mt-1 block text-[10px] text-muted">Connect. Create. Celebrate.</span>
        </div>
      </div>
    </section>
    <div className="mt-[80px] grid max-w-[900px] grid-cols-3 gap-[18px] max-[850px]:mt-16 max-[850px]:grid-cols-2 max-[560px]:mt-14 max-[560px]:grid-cols-1">
      <div className="rounded-[14px] border border-[#eeeae6] bg-white p-[26px]"><Users size={28} className="text-purple" /><h3 className="my-5 mb-2 text-base">Built for connection</h3><p className="text-xs leading-[1.6] text-muted">Find your kind of people in spaces designed for genuine connection.</p></div>
      <div className="rounded-[14px] border border-[#eeeae6] bg-white p-[26px]"><Sparkles size={28} className="text-purple" /><h3 className="my-5 mb-2 text-base">Curated experiences</h3><p className="text-xs leading-[1.6] text-muted">Every event is selected to help you spend your time on what matters.</p></div>
      <div className="rounded-[14px] border border-[#eeeae6] bg-white p-[26px]"><Ticket size={28} className="text-purple" /><h3 className="my-5 mb-2 text-base">Simple discovery</h3><p className="text-xs leading-[1.6] text-muted">Search, save and explore your next favorite thing in a few clicks.</p></div>
    </div>
  </main></PageShell>;
}
