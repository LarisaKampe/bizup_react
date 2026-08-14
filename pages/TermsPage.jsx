import AnimateIn from "../components/AnimateIn";

const LAST_UPDATED = "August 14, 2026";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the BizUp website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Eligibility",
    body: "Our funding products are available to registered businesses that meet our eligibility criteria, including minimum time trading and minimum monthly revenue. We reserve the right to decline any application at our discretion.",
  },
  {
    title: "3. Applications & Funding Offers",
    body: "Submitting an application does not guarantee funding. Any offer we make is subject to review of your business's financial information and may be withdrawn or amended prior to acceptance.",
  },
  {
    title: "4. Fees & Repayment",
    body: "Where an offer is accepted, the agreed fee and repayment structure will be set out in your funding agreement. Repayments are collected as an agreed percentage of daily card sales unless otherwise stated.",
  },
  {
    title: "5. Your Responsibilities",
    body: "You agree to provide accurate, complete information during the application process and to notify us promptly of any material change to your business's financial circumstances.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and software, is the property of BizUp or its licensors and is protected by applicable intellectual property laws.",
  },
  {
    title: "7. Limitation of Liability",
    body: "BizUp is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services, to the fullest extent permitted by law.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms and Conditions from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "9. Governing Law",
    body: "These terms are governed by and construed in accordance with the laws applicable in the jurisdiction in which BizUp operates, without regard to conflict of law principles.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about these Terms and Conditions, please reach out to us at support@bizup.com.",
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

export default function TermsPage() {
  return (
    <>
      <LegalHeader
        eyebrow="Legal"
        title="Terms and Conditions"
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
