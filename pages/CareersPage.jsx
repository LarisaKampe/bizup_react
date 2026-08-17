import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import AnimateIn from "../components/AnimateIn";
import Button from "../components/Button";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

const HERO_IMG = "/assets/homescreen_11.png";

/* ─── Core Values data ───────────────────────────────── */
const CORE_VALUES = [
  {
    icon: "shield",
    title: "Responsible finance",
    desc: "We build products that are fair, transparent, and aligned to real business needs.",
  },
  {
    icon: "heart",
    title: "Respect and delight our customers",
    desc: "We listen, we care, and we deliver experiences that feel simple and human.",
  },
  {
    icon: "clock",
    title: "Transparent and honest information",
    desc: "We explain things clearly, without jargon, and with no hidden surprises.",
  },
  {
    icon: "lock",
    title: "Privacy and data security",
    desc: "We protect data with care and keep trust at the center of every decision.",
  },
  {
    icon: "flag",
    title: "Act like owner",
    desc: "We own outcomes, take initiative, and move fast with clarity.",
  },
  {
    icon: "star",
    title: "Be incredible",
    desc: "We strive for excellence in craft, in teamwork, and in the impact we create.",
  },
];

/* ─── Benefits data ──────────────────────────────────── */
const BENEFITS = [
  {
    icon: "heart",
    title: "Paid volunteer time",
    desc: "Use your time to give back to the causes you care about.",
  },
  {
    icon: "clock",
    title: "Flexible working opportunities",
    desc: "Work in a way that fits your life, your energy, and your focus.",
  },
  {
    icon: "plane",
    title: "Annual travel and experiences credit",
    desc: "Explore, recharge, and create memories that matter.",
  },
  {
    icon: "book",
    title: "Learning and career development",
    desc: "Grow your skills, take on new challenges, and build a career you love.",
  },
  {
    icon: "food",
    title: "Healthy food and snacks",
    desc: "Fuel your day with good food and a supportive team environment.",
  },
  {
    icon: "family",
    title: "General parental and family leave",
    desc: "Support for life's big moments, with care and flexibility.",
  },
];

/* ─── SVG icons map ──────────────────────────────────── */
function ValueIcon({ name, className = "w-5 h-5" }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };
  const icons = {
    shield: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    heart: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    clock: (
      <svg {...props}
    aria-hidden="true"
  >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    lock: (
      <svg {...props}
    aria-hidden="true"
  >
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11V7a4 4 0 018 0v4"
        />
      </svg>
    ),
    flag: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21V5m0 0l18 8-18 8V5z"
        />
      </svg>
    ),
    star: (
      <svg {...props}
    aria-hidden="true"
  >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    plane: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    book: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    food: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    family: (
      <svg {...props}
    aria-hidden="true"
  >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

/* ─── Sticky Tab Nav ─────────────────────────────────── */
const TABS = ["overview", "core-values", "benefits"];
const TAB_LABELS = {
  overview: "Overview",
  "core-values": "Core Values",
  benefits: "Benefits",
};

function StickyTabs({ activeTab }) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-12 overflow-x-auto">
        <div className="flex items-center gap-8 shrink-0">
          {TABS.map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              aria-current={activeTab === tab ? "true" : undefined}
              className={`
                text-sm font-semibold pb-0.5 whitespace-nowrap border-b-2 transition-colors duration-200
                ${
                  activeTab === tab
                    ? "text-cyan border-cyan"
                    : "text-navy/50 border-transparent hover:text-navy hover:border-gray-300"
                }
              `}
            >
              {TAB_LABELS[tab]}
            </a>
          ))}
        </div>
        <Button
          to="/"
          size="sm"
          variant="outline-cyan"
          className="flex-shrink-0 ml-6"
        >
          View Job Openings
        </Button>
      </div>
    </div>
  );
}

/* ─── Overview section ───────────────────────────────── */
function Overview() {
  return (
    <section id="overview" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-6">
            Create a world where every business is BizUp-ed
          </h2>
        </AnimateIn>
        <AnimateIn delay={80}>
          <div className="space-y-4 text-navy/65 text-base leading-relaxed">
            <p>
              Small to medium businesses are the lifeblood of Europe. When small
              businesses get access to finance amazing things happen; they buy
              more inventory, they increase sales and they hire amazing people.
              The trouble is, finding finance for small business can be tricky.
              We don't believe it needs to be like that.
            </p>
            <p>
              BizUp is built around the idea that every business should be able
              to reach its potentials, that every business has the right to
              finance to fuel growth. We believe that by using technology we can
              build a platform that enables business, financial institutions and
              payments companies to work together to build a better economic
              future. That's good for everyone.
            </p>
            <p>
              For us, exciting challenges are ahead, our story is still being
              written and we have much to learn. We are excited about our
              journey and know the best is yet to come.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Core Values section ────────────────────────────── */
function CoreValues() {
  return (
    <section id="core-values" className="py-20 bg-navy-blue scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Core Values</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            We build on a foundation of trust
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            These values guide how we work, how we make decisions, and how we
            show up for our customers every day.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_VALUES.map((val, i) => (
            <AnimateIn key={val.title} delay={i * 80}>
              <div
                className="group bg-white/[0.06] border border-white/10 rounded-2xl p-6
                              hover:bg-white/[0.10] hover:-translate-y-1 hover:border-white/20
                              transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center mb-4
                                group-hover:bg-cyan/30 transition-colors duration-300"
                >
                  <ValueIcon name={val.icon} className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">
                  {val.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits section ───────────────────────────────── */
function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Benefits</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-3">
            Life Is Not A Rehearsal
          </h2>
          <p className="text-navy/55 max-w-xl mx-auto">
            There's life at work and life outside of work. We want everyone to
            live life to the full and have the financial resources and support
            they need.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <AnimateIn key={b.title} delay={i * 80}>
              <div
                className="group flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50
                              hover:border-cyan/30 hover:bg-white hover:shadow-card
                              transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0
                                group-hover:bg-cyan/20 transition-colors duration-300"
                >
                  <ValueIcon name={b.icon} className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-sm mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-navy/55 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SEO ─────────────────────────────────────────────── */
const PAGE_TITLE = "Careers";
const PAGE_DESCRIPTION =
  "Join BizUp and help build fast, transparent finance for small businesses. Explore our culture, core values, and benefits.";
const PAGE_SCHEMA = [
  webPageSchema({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/careers",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ]),
];

/* ─── Page ───────────────────────────────────────────── */
export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Highlight active tab based on scroll position
  useEffect(() => {
    const sectionIds = ["overview", "core-values", "benefits"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/careers"
        schema={PAGE_SCHEMA}
      />
      <HeroSection
        badge="Careers"
        badgeIcon="briefcase"
        headline="There's a Better Way To Fund Your Business"
        subtext="Join a team building fast, transparent finance for small businesses. We're growing fast and looking for people who want to make a real impact."
        ctas={[
          { label: "Contact Us", to: "/", variant: "primary" },
          { label: "View Job Openings", to: "/", variant: "outline-white" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp office team"
        fundingCard={{
          label: "Example Funding",
          amount: "$150,000",
          subtitle: "Repaid via 10% of daily card sales",
        }}
      />

      <StickyTabs activeTab={activeTab} />

      <Overview />
      <CoreValues />
      <Benefits />
    </>
  );
}
