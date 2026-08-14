import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";

/* ─── HERO IMAGE ─────────────────────────────────────── */
const HERO_IMG = "/assets/homescreen_11.png";
const LAPTOP_IMG = "/assets/homescreen_11.png";
const TABLET_IMG = "/assets/homescreen_11.png";

/* ─── ICONS ──────────────────────────────────────────── */
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-cyan flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <polyline
      points="20 6 9 12 4 10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 12l-5-2" />
    <polyline
      points="4 12 9 17 20 10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckSimple = () => (
  <svg
    className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── How It Works ───────────────────────────────────── */
const HOW_STEPS = [
  {
    num: "01",
    title: "Easy Application",
    desc: "The application only takes a few clicks and there are no long forms to fill out. Decisions can be as fast as minutes.",
  },
  {
    num: "02",
    title: "Fast Funding",
    desc: "On approval, we deposit funds as soon as the next business day. Once you've paid back 60% of your balance, you may qualify for an automatic top-up.",
  },
  {
    num: "03",
    title: "Easy Payback",
    desc: "Pay off your funding with convenient automatic deductions from your debit and take credit card sales. Take a funding holiday when you need it.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            A simple, transparent process
          </h2>
          <p className="mt-3 text-navy/60 text-base max-w-xl mx-auto">
            From application to funding, every step is designed to be fast,
            clear, and aligned to your business.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {HOW_STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 100}>
              <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-card card-hover h-full">
                {/* Numbered circle */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="step-circle group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </span>
                  <h3 className="font-bold text-navy text-base">
                    {step.title}
                  </h3>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Better Way ─────────────────────────────────────── */
const BETTER_BULLETS = [
  "Funding from $3,000 to $300,000",
  "Payback only when your customers pay you",
  "Transparent pricing with no hidden fees",
];

function BetterWay() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left text */}
        <div className="flex-1">
          <AnimateIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
              There's a Better Way To Fund Your Business
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="text-navy/60 text-base leading-relaxed mb-6">
              Accessing small business funding shouldn't be complicated or
              time-consuming. BizUp developed a simple way for businesses to
              secure up to $300,000.
            </p>
          </AnimateIn>
          <AnimateIn delay={140}>
            <ul className="space-y-3 mb-8">
              {BETTER_BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-navy/80 text-sm"
                >
                  <CheckSimple />
                  {b}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="flex flex-wrap gap-3">
              <Button to="/offer-finance" variant="primary">
                Get Started
              </Button>
              <Button to="/" variant="outline">
                How it works
              </Button>
            </div>
          </AnimateIn>
        </div>

        {/* Right image */}
        <AnimateIn
          delay={100}
          direction="right"
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated bg-navy-light">
            <img
              src={LAPTOP_IMG}
              alt="BizUp dashboard on laptop"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Payback ─────────────────────────────────────────── */
const PAYBACK_BULLETS = [
  "Agreed pricing, upfront",
  "No fees for early repayment",
  "No late charges",
  "No hidden fees",
];

function PaybackSimple() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left image */}
        <AnimateIn
          direction="left"
          className="flex-1 w-full max-w-lg lg:max-w-none order-2 lg:order-1"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated bg-navy-light">
            <img
              src={TABLET_IMG}
              alt="BizUp analytics on tablet"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </AnimateIn>

        {/* Right text */}
        <div className="flex-1 order-1 lg:order-2">
          <AnimateIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
              Payback Is Simple
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="text-navy/60 text-base leading-relaxed mb-6">
              Your finance is repaid using an agreed percentage of your daily
              credit and debit card sales. We recognize that some days you're
              busy and some days you are not. With BizUp, you only pay us back
              when your customers pay you.
            </p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <h3 className="font-bold text-cyan text-base mb-3">
              Our pricing promise
            </h3>
            <p className="text-navy/60 text-sm leading-relaxed mb-5">
              You pay one flat fee for your financing. This fee never changes.
              You'll see how much you have repaid and how much you have
              outstanding every day.
            </p>
          </AnimateIn>
          <AnimateIn delay={160}>
            <ul className="space-y-2.5 mb-7">
              {PAYBACK_BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-navy/80"
                >
                  <CheckSimple />
                  {b}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={220}>
            <Button to="/resources" variant="outline-cyan">
              Frequently Asked Questions
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Resources Teaser ───────────────────────────────── */
const RESOURCE_ITEMS = [
  { num: "01", title: "Financial planning tips for small business owners" },
  { num: "02", title: "How to get on Google search page" },
  { num: "03", title: "Keeping up engagement on social media for business" },
];

function ResourcesTeaser() {
  return (
    <section className="py-20 bg-navy-blue">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Resources</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Learn from our guides
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-base">
            Practical insights to help you grow your business, manage cash flow,
            and make better financial decisions.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-5">
          {RESOURCE_ITEMS.map((item, i) => (
            <AnimateIn key={item.num} delay={i * 100}>
              <Link
                to="/resources"
                className="group block bg-white/[0.06] border border-white/10 rounded-2xl p-6
                           hover:bg-white/[0.11] hover:-translate-y-1 hover:border-white/20
                           transition-all duration-300"
              >
                <span className="step-circle mb-4 group-hover:bg-cyan-dark transition-colors duration-300">
                  {item.num}
                </span>
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-cyan transition-colors duration-300">
                  {item.title}
                </h3>
              </Link>
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
            We Are Ready When You Are
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/offer-finance" variant="primary" size="lg">
              Apply Now
            </Button>
            <Button to="/" variant="outline" size="lg">
              How It Works
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="Secure Finance"
        badgeIcon="shield"
        headline="Finally, Business Finance You Will Love"
        subtext="Access up to $300,000 with transparent pricing and flexible repayment tied to your daily sales. No long forms, no hidden fees — just the capital you need to grow."
        ctas={[
          { label: "Apply Now", to: "/offer-finance", variant: "primary" },
          { label: "How it works", to: "/", variant: "outline-white" },
        ]}
        features={[
          { icon: "light", label: "Funding as fast as 1 day" },
          { icon: "tag", label: "Transparent pricing" },
          { icon: "no-hide", label: "No hidden fees" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp business funding dashboard"
        fundingCard={{
          label: "Example Funding",
          amount: "$150,000",
          subtitle: "Repaid via 10% of daily card sales",
        }}
      />
      <HowItWorks />
      <BetterWay />
      <PaybackSimple />
      <ResourcesTeaser />
      <CTABanner />
    </>
  );
}
