const variants = {
  primary: "bg-purple px-[23px] py-[15px] text-white shadow-[0_9px_20px_#6554db2e]",
  outline: "border border-[#ddd9d4] bg-white text-ink",
  dark: "bg-ink text-white",
  light: "bg-lavender text-purple",
  white: "bg-white px-6 py-[15px] text-ink",
};

export default function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-[9px] rounded-full px-[19px] py-[13px] text-[13px] font-semibold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
