import HeroSection from "../components/HeroSection";
import AnimateIn from "../components/AnimateIn";
import Button from "../components/Button";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

const HERO_IMG = "/assets/homescreen_11.png";

/* ─── Stats ───────────────────────────────────────────── */
const STATS = [
  { value: "$50M+", label: "Funded to small businesses" },
  { value: "5,000+", label: "Businesses funded" },
  { value: "24 hrs", label: "Average time to funding" },
  { value: "4.8/5", label: "Average customer rating" },
];

function Stats() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 80} className="text-center">
              <p className="text-3xl lg:text-4xl font-extrabold text-navy mb-1">
                {s.value}
              </p>
              <p className="text-sm text-navy/55">{s.label}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Our Story ───────────────────────────────────────── */
function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <AnimateIn>
          <span className="section-label">Our Story</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-6">
            Business finance, without the headache
          </h2>
        </AnimateIn>
        <AnimateIn delay={80}>
          <div className="space-y-4 text-navy/65 text-base leading-relaxed">
            <p>
              BizUp started with a simple observation: small businesses are the
              backbone of the economy, yet getting the finance they need to grow
              is often slow, confusing, and full of hidden costs. We set out to
              change that.
            </p>
            <p>
              We built a platform that connects businesses with funding in a way
              that's fast, transparent, and tied to how they actually sell — not
              rigid monthly payments that don't flex with a slow week.
              Repayments scale with daily sales, pricing is agreed upfront, and
              there are no long forms to fill in.
            </p>
            <p>
              Today, we've helped thousands of businesses access the capital
              they need to buy inventory, hire great people, and grow on their
              own terms. Our story is still being written — and we're just
              getting started.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Principles ──────────────────────────────────────── */
const PRINCIPLES = [
  {
    title: "Transparent by default",
    desc: "One flat fee, agreed upfront. No hidden charges, no surprises buried in the fine print.",
  },
  {
    title: "Built around your cash flow",
    desc: "Repayments move with your daily sales, so a slow day doesn't put you under pressure.",
  },
  {
    title: "Fast, human decisions",
    desc: "No long forms and no endless waiting — decisions can land in minutes, funding as soon as the next business day.",
  },
];

function Principles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">What We Believe</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            The principles behind every product
          </h2>
        </AnimateIn>
        <div className="grid sm:grid-cols-3 gap-6">
          {PRINCIPLES.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 100}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card card-hover h-full">
                <h3 className="font-bold text-navy text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>
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
            Want To Be Part Of Our Story?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/offer-finance" variant="primary" size="lg">
              Apply Now
            </Button>
            <Button to="/careers" variant="outline" size="lg">
              View Careers
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function AboutPage() {
  const title = "About Us";
  const description =
    "BizUp is on a mission to make business funding fast, fair, and transparent — so every business gets the chance to grow on its own terms.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/about"
        schema={[
          webPageSchema({ name: title, description, path: "/about" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />
      <HeroSection
        badge="About Us"
        badgeIcon="shield"
        headline="Finance Built Around Your Business"
        subtext="BizUp is on a mission to make business funding fast, fair, and transparent — so every business gets the chance to grow on its own terms."
        ctas={[
          { label: "Apply Now", to: "/offer-finance", variant: "primary" },
          { label: "Meet The Team", to: "/careers", variant: "outline-white" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp team at work"
        fundingCard={{
          label: "Founded",
          amount: "2019",
          subtitle: "Helping businesses grow ever since",
        }}
      />
      <Stats />
      <OurStory />
      <Principles />
      <CTABanner />
    </>
  );
}
