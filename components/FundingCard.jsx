/**
 * The floating white card shown in hero sections.
 */
export default function FundingCard({
  label,
  amount,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-elevated
        px-6 py-5
        ${className}
      `}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1.5">
        {label}
      </p>
      <p className="text-3xl font-extrabold text-navy leading-tight mb-1">
        {amount}
      </p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
