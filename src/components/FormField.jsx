export default function FormField({ label, as = "input", className = "", ...props }) {
  const controlClass = "rounded-lg border border-[#dedad6] p-3 text-xs outline-none focus:border-purple";
  const Control = as;
  return (
    <label className="flex flex-col gap-1.5 text-xs font-semibold">
      {label}
      <Control className={`${controlClass} ${className}`} {...props} />
    </label>
  );
}
