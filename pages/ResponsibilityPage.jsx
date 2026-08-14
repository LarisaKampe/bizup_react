import HeroSection from "../components/HeroSection";
import AnimateIn from "../components/AnimateIn";
import Button from "../components/Button";

const HERO_IMG = "/assets/homescreen_11.png";

/* ─── Pillars ─────────────────────────────────────────── */
const PILLARS = [
  {
    icon: "scale",
    title: "Responsible lending",
    desc: "We only fund what a business can realistically repay, with pricing that's agreed upfront and never changes.",
  },
  {
    icon: "users",
    title: "Community investment",
    desc: "A share of our profits goes back into local small business grants and financial literacy programs.",
  },
  {
    icon: "leaf",
    title: "Environmental commitment",
    desc: "We're reducing our operational footprint and favor paperless, digital-first processes across the business.",
  },
  {
    icon: "handshake",
    title: "Diversity & inclusion",
    desc: "We build a team — and fund a customer base — that reflects the diversity of the businesses we serve.",
  },
];

function PillarIcon({ name, className = "w-5 h-5" }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };
  const icons = {
    scale: (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18M5 8l-3 6a4 4 0 008 0l-3-6m14 0l-3 6a4 4 0 008 0l-3-6M5 8h4M15 8h4M5 8l2-3M19 8l-2-3"
        />
      </svg>
    ),
    users: (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    leaf: (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 3c1 2 2 5.5 0 12-1.5 3-3 4-6 5 1-2 1-4 0-6-1.5-3-2.5-5-2-9"
        />
      </svg>
    ),
    handshake: (
      <svg {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 16l-2.5 2.5a1.5 1.5 0 01-2.121-2.121L11 12l3 3m-3-3l3.5-3.5a1.5 1.5 0 012.121 0l1.5 1.5m-7.121 2l4 4m-9-9l3-3a2 2 0 012.828 0L14 6"
        />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

function Pillars() {
  return (
    <section className="py-20 bg-navy-blue">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Our Commitments</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Growth that gives back
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            Being a responsible finance company means more than fair pricing. It
            means thinking about the impact we have on our people, our
            communities, and the planet.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 80}>
              <div
                className="group h-full bg-white/[0.06] border border-white/10 rounded-2xl p-6
                              hover:bg-white/[0.10] hover:-translate-y-1 hover:border-white/20
                              transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center mb-4
                                group-hover:bg-cyan/30 transition-colors duration-300"
                >
                  <PillarIcon name={p.icon} className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Impact stats ────────────────────────────────────── */
const IMPACT_STATS = [
  { value: "$500K+", label: "Donated to small business grants" },
  { value: "1,200+", label: "Hours of financial literacy training" },
  { value: "40%", label: "Reduction in paper use since 2023" },
];

function Impact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Our Impact</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            Measured, not just mentioned
          </h2>
        </AnimateIn>
        <div className="grid sm:grid-cols-3 gap-6">
          {IMPACT_STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 100}>
              <div className="text-center bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                <p className="text-3xl lg:text-4xl font-extrabold text-navy mb-2">
                  {s.value}
                </p>
                <p className="text-navy/60 text-sm">{s.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="py-16 bg-lime">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-8">
            Growing Businesses, Responsibly
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/offer-finance" variant="primary" size="lg">
              Apply Now
            </Button>
            <Button to="/about" variant="outline" size="lg">
              About BizUp
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function ResponsibilityPage() {
  return (
    <>
      <HeroSection
        badge="Corporate Responsibility"
        badgeIcon="shield"
        headline="Responsible Finance, Real Impact"
        subtext="We believe growth and responsibility go hand in hand. Here's how we give back to the businesses, communities, and planet we depend on."
        ctas={[
          { label: "Apply Now", to: "/offer-finance", variant: "primary" },
          { label: "About Us", to: "/about", variant: "outline-white" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp community investment"
        fundingCard={{
          label: "Community Giving",
          amount: "$500K+",
          subtitle: "Invested in small business grants",
        }}
      />
      <Pillars />
      <Impact />
      <CTABanner />
    </>
  );
}
