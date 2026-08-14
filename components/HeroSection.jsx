import AnimateIn from "./AnimateIn";
import Button from "./Button";
import FundingCard from "./FundingCard";

const ShieldIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
const BriefIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const LightIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
const TagIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
);
const NoHideIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const BADGE_ICONS = {
  shield: <ShieldIcon />,
  briefcase: <BriefIcon />,
  partner: <ShieldIcon />,
};

/**
 * @param {string}   badge            - Pill text above headline
 * @param {string}   badgeIcon        - 'shield' | 'briefcase'
 * @param {string}   headline         - Main h1 text
 * @param {string}   subtext          - Paragraph below headline
 * @param {Array}    ctas             - [{label, to|href, variant}]
 * @param {Array}    features         - [{icon, label}]  optional row of tags
 * @param {string}   imageSrc         - URL of right-side image
 * @param {string}   imageAlt
 * @param {object}   fundingCard      - {label, amount, subtitle}
 * @param {string}   className        - Extra classes on outer section
 */
export default function HeroSection({
  badge,
  badgeIcon = "shield",
  headline,
  subtext,
  ctas = [],
  features = [],
  imageSrc,
  imageAlt = "",
  fundingCard,
  className = "",
}) {
  return (
    <section
      className={`
        relative bg-navy-blue overflow-hidden
        pt-12 pb-16 lg:pt-16 lg:pb-20
        ${className}
      `}
    >
      {/* Subtle radial glow in top-right */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[640px] h-[640px] rounded-full bg-cyan/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* ── Left: text content ── */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          {badge && (
            <AnimateIn>
              <div className="badge-pill mb-5 w-fit">
                {BADGE_ICONS[badgeIcon]}
                <span>{badge}</span>
              </div>
            </AnimateIn>
          )}

          {/* Headline */}
          <AnimateIn delay={60}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] mb-5">
              {headline}
            </h1>
          </AnimateIn>

          {/* Subtext */}
          <AnimateIn delay={120}>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              {subtext}
            </p>
          </AnimateIn>

          {/* CTAs */}
          {ctas.length > 0 && (
            <AnimateIn delay={180}>
              <div className="flex flex-wrap items-center gap-3 mb-7">
                {ctas.map((cta, i) => (
                  <Button
                    key={i}
                    to={cta.to}
                    href={cta.href}
                    variant={
                      cta.variant ?? (i === 0 ? "primary" : "outline-white")
                    }
                    size="md"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            </AnimateIn>
          )}

          {/* Feature tags */}
          {features.length > 0 && (
            <AnimateIn delay={240}>
              <div className="flex flex-wrap gap-2">
                {features.map((f, i) => (
                  <span key={i} className="feature-tag">
                    {f.icon === "light" && <LightIcon />}
                    {f.icon === "tag" && <TagIcon />}
                    {f.icon === "no-hide" && <NoHideIcon />}
                    {f.label}
                  </span>
                ))}
              </div>
            </AnimateIn>
          )}
        </div>

        {/* ── Right: image + floating card ── */}
        <AnimateIn
          delay={100}
          direction="right"
          className="flex-1 w-full max-w-[500px] lg:max-w-none relative flex-shrink-0 lg:w-[45%]"
        >
          {/* Image frame */}
          <div className="relative rounded-2xl overflow-hidden bg-navy-light">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full object-cover aspect-[4/3] lg:aspect-[5/4]"
                loading="eager"
              />
            ) : (
              /* Placeholder gradient if no image provided */
              <div className="w-full aspect-[4/3] lg:aspect-[5/4] bg-gradient-to-br from-navy-light via-navy to-navy-muted flex items-center justify-center">
                <span className="text-white/20 text-sm">Add hero image</span>
              </div>
            )}
          </div>

          {/* Floating funding card */}
          {fundingCard && (
            <FundingCard
              label={fundingCard.label}
              amount={fundingCard.amount}
              subtitle={fundingCard.subtitle}
              className="absolute bottom-5 left-5 sm:left-5 z-10
                         animate-fade-up"
              style={{ animationDelay: "300ms" }}
            />
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
