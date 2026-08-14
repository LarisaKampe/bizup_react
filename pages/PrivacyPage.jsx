import AnimateIn from "../components/AnimateIn";

const LAST_UPDATED = "August 14, 2026";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, business details, and financial information submitted during an application, as well as information collected automatically when you use our website, like device and usage data.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to process funding applications, communicate with you, improve our products, and meet our legal and regulatory obligations.",
  },
  {
    title: "3. How We Share Information",
    body: "We may share your information with funding partners, service providers who support our operations, and regulators or law enforcement where required by law. We do not sell your personal information.",
  },
  {
    title: "4. Cookies",
    body: "We use cookies and similar technologies to keep our website secure, remember your preferences, and understand how our site is used. You can control cookies through your browser settings.",
  },
  {
    title: "5. Data Security",
    body: "We use industry-standard technical and organizational measures to protect your information from unauthorized access, loss, or misuse.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your information for as long as necessary to provide our services and to comply with our legal and regulatory obligations.",
  },
  {
    title: "7. Your Rights",
    body: "Depending on where you're located, you may have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us using the details below.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We'll post the revised version here with an updated effective date.",
  },
  {
    title: "9. Contact Us",
    body: "If you have questions about this Privacy Policy or how we handle your information, contact us at privacy@bizup.com.",
  },
];

function LegalHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-navy-blue pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <AnimateIn>
          <span className="section-label">{eyebrow}</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            {title}
          </h1>
          <p className="text-white/55 text-sm">{subtitle}</p>
        </AnimateIn>
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED} — this site was made for practicing purposes and this page is placeholder legal text.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-10">
          {SECTIONS.map((s, i) => (
            <AnimateIn key={s.title} delay={Math.min(i * 40, 240)}>
              <h2 className="font-bold text-navy text-lg mb-2">{s.title}</h2>
              <p className="text-navy/65 text-sm leading-relaxed">{s.body}</p>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
