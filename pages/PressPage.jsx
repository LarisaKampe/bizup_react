import HeroSection from "../components/HeroSection";
import AnimateIn from "../components/AnimateIn";
import Button from "../components/Button";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

const HERO_IMG = "/assets/homescreen_11.png";

/* ─── Featured in ────────────────────────────────────── */
const PUBLICATIONS = [
  "Finance Weekly",
  "The Business Post",
  "StartUp Daily",
  "FinTech Today",
  "Growth Magazine",
];

function FeaturedIn() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy/40">
            As Featured In
          </span>
        </AnimateIn>
        <AnimateIn delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {PUBLICATIONS.map((name) => (
              <span
                key={name}
                className="text-lg font-extrabold text-navy/25 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Press releases ──────────────────────────────────── */
const RELEASES = [
  {
    date: "June 12, 2026",
    title: "BizUp surpasses $50M in funding to small businesses",
    excerpt:
      "BizUp marks a major milestone, having deployed over $50 million in transparent, sales-linked funding to thousands of small and medium businesses.",
  },
  {
    date: "March 3, 2026",
    title: "BizUp launches new partner program for financial institutions",
    excerpt:
      "The new program lets banks and lenders offer BizUp's funding products directly to their business customers through a co-branded, embedded experience.",
  },
  {
    date: "November 18, 2025",
    title: "BizUp named a rising fintech to watch",
    excerpt:
      "Industry analysts highlight BizUp's transparent pricing model and daily-sales repayment structure as a standout approach in small business finance.",
  },
];

function PressReleases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="section-label">Newsroom</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            Latest press releases
          </h2>
        </AnimateIn>

        <div className="space-y-5">
          {RELEASES.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 100}>
              <article className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card card-hover">
                <p className="text-xs font-bold uppercase tracking-wide text-cyan mb-2">
                  {r.date}
                </p>
                <h3 className="font-bold text-navy text-lg mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {r.excerpt}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Media contact ───────────────────────────────────── */
function MediaContact() {
  return (
    <section className="py-20 bg-navy-blue">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <AnimateIn>
          <span className="section-label">Media Inquiries</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Working on a story about BizUp?
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8">
            Reach out to our press team for interviews, data, executive
            commentary, or our media kit.
          </p>
          <Button href="mailto:press@bizup.com" variant="primary" size="lg">
            press@bizup.com
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function PressPage() {
  const title = "Press & News";
  const description =
    "Announcements, media coverage, and press contacts for journalists covering BizUp and small business finance.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/press"
        schema={[
          webPageSchema({ name: title, description, path: "/press" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Press", path: "/press" },
          ]),
        ]}
      />
      <HeroSection
        badge="Press"
        badgeIcon="shield"
        headline="BizUp In The News"
        subtext="Announcements, media coverage, and resources for journalists covering BizUp and the future of small business finance."
        ctas={[
          { label: "Contact Press Team", href: "mailto:press@bizup.com", variant: "primary" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp newsroom"
        fundingCard={{
          label: "Media Mentions",
          amount: "40+",
          subtitle: "Features across finance & startup press",
        }}
      />
      <FeaturedIn />
      <PressReleases />
      <MediaContact />
    </>
  );
}
