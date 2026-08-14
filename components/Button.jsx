import { Link } from "react-router-dom";

/**
 * @param {'primary'|'outline'|'outline-white'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} to  - if set, renders as react-router Link
 * @param {string} href - if set, renders as <a>
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 active:scale-95 whitespace-nowrap";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-cyan border-2 border-cyan text-white hover:bg-cyan-dark hover:shadow-glow",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-navy",
    "outline-cyan":
      "border-2 border-cyan text-cyan hover:bg-cyan hover:text-white",
    ghost: "text-cyan hover:underline",
    lime: "bg-lime text-navy hover:brightness-110",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to)
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
