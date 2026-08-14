import { useInView } from "../useInView";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 *
 * @param {number}  delay     - Extra delay in ms (for staggered children)
 * @param {string}  className - Additional tailwind classes
 * @param {'up'|'left'|'right'|'fade'} direction
 */
export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const [ref, inView] = useInView();

  const dirMap = {
    up: "translateY(28px)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : dirMap[direction],
        transition: `opacity 0.65s ease, transform 0.65s ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
