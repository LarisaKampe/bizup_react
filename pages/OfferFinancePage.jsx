import HeroSection from "../components/HeroSection";
import AnimateIn from "../components/AnimateIn";

const HERO_IMG = "/assets/homescreen_11.png";

/* ─── Partnership types ──────────────────────────────── */
const PARTNERSHIPS = [
  {
    num: "01",
    title: "Terminal and Payment Service Providers",
    desc: "You're already servicing business customers. Helping them get the finance they need to grow is truly transformational. We can integrate directly into your customer-facing website and pre-score customers with a tailor-made offer.",
    reasonsTitle: null,
    reasons: [],
  },
  {
    num: "02",
    title: "Websites, Platform Providers",
    desc: "You're already transferring payments to your merchants and partners. Helping them get the finance they need to grow increases stickiness to your platform and helps you both grow. We can integrate in your customers-facing website and pre-score customers with a tailor-made offer.",
    reasonsTitle: null,
    reasons: [],
  },
  {
    num: "03",
    title: "Brokers, Lenders, Funders",
    desc: "Our sales team is here to assist you through BizUp's funding process.",
    reasonsTitle: "Why join our program?",
    reasons: [
      "We empower you to sell from start to finish",
      "70%+ approval rate on qualified leads",
      "Offer a solution that's transparent and tailor-made to a customer's needs",
    ],
  },
  {
    num: "04",
    title: "Banks and Financial Institutions",
    desc: "BizUp partners with banks to deliver fast simple business financing for small to medium-sized business. We help you deliver incremental working capital to your clients, without interrupting the client relationship, all within an intuitive online multi-language interface.",
    reasonsTitle: "Why partner with BizUp?",
    reasons: [
      "Own the relationship, while generating incremental for your financial institution",
      "Expand your digital offering for B2B customers",
      "Increase balance sheet productivity (optional)",
      "Explore cross border funding opportunities (optional)",
      "Explore participation and sauceization opportunities (optional)",
    ],
  },
  {
    num: "05",
    title: "Bookkeepers, Accountants and Advisory Firms",
    desc: "You provide critical advice to small business owners. But when it comes to financing options, things can get tricky. Luckily BizUp is here to help. Introducing your clients to BizUp means giving them better options for financing their everyday business expenses and growth.",
    reasonsTitle: "Why partner with BizUp?",
    reasons: [
      "Help your clients get the financing they need",
      "We're fast, flexible and focused solely on helping small business owners succeed",
      "Earn lucrative referral fees, or discounts for your customers on our financing offers",
      "Our funding managers are friendly and ready to help your clients explore their options with BizUp",
    ],
  },
];

/* ─── Bullet icon ────────────────────────────────────── */
const BulletCheck = () => (
  <svg
    className="w-3.5 h-3.5 text-cyan flex-shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <circle
      cx="10"
      cy="10"
      r="10"
      className="text-cyan/15"
      fill="currentColor"
    />
    <path
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      d="M6 10l3 3 5-5"
    />
  </svg>
);

/* ─── Partnership card ───────────────────────────────── */
function PartnerCard({ p, delay = 0 }) {
  const isWide = p.num === "04" || p.num === "05";

  return (
    <AnimateIn delay={delay} className={isWide ? "md:col-span-1" : ""}>
      <div
        className="group h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-card
                      hover:-translate-y-1 hover:shadow-elevated hover:border-cyan/20
                      transition-all duration-300"
      >
        {/* Number badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="step-circle group-hover:bg-cyan-dark transition-colors duration-300">
            {p.num}
          </span>
          <h3 className="font-bold text-navy text-base leading-snug">
            {p.title}
          </h3>
        </div>

        <p className="text-navy/60 text-sm leading-relaxed mb-4">{p.desc}</p>

        {p.reasonsTitle && (
          <>
            <h4 className="font-bold text-cyan text-sm mb-3">
              {p.reasonsTitle}
            </h4>
            <ul className="space-y-2">
              {p.reasons.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-navy/65"
                >
                  <BulletCheck />
                  {r}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </AnimateIn>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function OfferFinancePage() {
  return (
    <>
      <HeroSection
        badge="Partner with BizUp"
        badgeIcon="partner"
        headline="Let's Work Together"
        subtext="Help your clients get the financing they need to grow their business. Deliver an incredible customer experience. Generate incremental revenue. Accelerate your services strategy. Unlock and monetize your data."
        ctas={[
          { label: "Contact Us", to: "/", variant: "primary" },
          { label: "View Solutions", to: "/", variant: "outline-white" },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp partner handshake"
        fundingCard={{
          label: "Partnership Benefits",
          amount: "$300,000+",
          subtitle: "Potential funding for your clients",
        }}
      />

      {/* ── Partnership Types ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section header */}
          <AnimateIn className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span
                className="w-1.5 h-1.5 rounded-lg bg-cyan"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Partnership Types
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
              What type of partnership is right for you?
            </h2>
            <p className="mt-3 text-navy/55 max-w-xl mx-auto text-base">
              Whether you're a payment provider, a bank, or an advisory firm, we
              have a tailored solution to help your clients grow.
            </p>
          </AnimateIn>

          {/* Top row: 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {PARTNERSHIPS.slice(0, 3).map((p, i) => (
              <PartnerCard key={p.num} p={p} delay={i * 80} />
            ))}
          </div>

          {/* Bottom row: 2 wider cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {PARTNERSHIPS.slice(3).map((p, i) => (
              <PartnerCard key={p.num} p={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
