export default function Eyebrow({ children, light = false }) {
  return (
    <div className={`flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[1.5px] ${light ? "text-white" : "text-purple"}`}>
      <span className={`h-px w-[25px] ${light ? "bg-white" : "bg-purple"}`} />
      {children}
    </div>
  );
}
