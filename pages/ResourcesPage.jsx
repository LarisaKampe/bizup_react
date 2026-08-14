import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AnimateIn   from '../components/AnimateIn'

const HERO_IMG = '/assets/homescreen_11.png'

/* ─── Article data ───────────────────────────────────── */
// Replace `img` with actual hosted image URLs
const ARTICLES = [
  {
    id: 1,
    category: 'Growth',
    title: 'How to hire the right people for your business',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    id: 2,
    category: 'Culture',
    title: 'Summer refurbishment ideas',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  },
  {
    id: 3,
    category: 'Growth',
    title: 'How to improve window displays',
    img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80',
  },
  {
    id: 4,
    category: 'Product',
    title: 'How to get more online bookings',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    id: 5,
    category: 'Culture',
    title: 'How to make your business family-friendly',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    id: 6,
    category: 'Product',
    title: 'Financial planning tips for small business',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 7,
    category: 'Support',
    title: 'How best to respond to critical reviews',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  },
  {
    id: 8,
    category: 'Growth',
    title: 'The importance of review sites for small business',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    id: 9,
    category: 'Support',
    title: 'What to consider when deciding whether to increase pay or benefits',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
]

const CATEGORIES = ['Most Recent', 'Popular', 'Growth', 'Support', 'Culture', 'Product', 'Help Desk Tips']

/* ─── Article card ───────────────────────────────────── */
function ArticleCard({ article, delay = 0 }) {
  return (
    <AnimateIn delay={delay}>
      <a
        href="#"
        className="group block bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-gray-100"
      >
        {/* Image */}
        <div className="overflow-hidden aspect-video bg-gray-100">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="p-5">
          <h3 className="font-semibold text-navy text-base leading-snug mb-3 group-hover:text-cyan transition-colors duration-200">
            {article.title}
          </h3>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan uppercase tracking-wide hover:underline">
            Read more
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </AnimateIn>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('Most Recent')

  const filtered = activeCategory === 'Most Recent' || activeCategory === 'Popular' || activeCategory === 'Help Desk Tips'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <>
      <HeroSection
        badge="Secure Finance"
        badgeIcon="shield"
        headline="Finally, Business Finance You Will Love"
        subtext="Access up to $300,000 with transparent pricing and flexible repayment tied to your daily sales. No long forms, no hidden fees — just the capital you need to grow."
        ctas={[
          { label: 'Apply Now',    to: '/',  variant: 'primary' },
          { label: 'How it works', to: '/',  variant: 'outline-white' },
        ]}
        features={[
          { icon: 'light',   label: 'Funding as fast as 1 day' },
          { icon: 'tag',     label: 'Transparent pricing' },
          { icon: 'no-hide', label: 'No hidden fees' },
        ]}
        imageSrc={HERO_IMG}
        imageAlt="BizUp business finance dashboard"
        fundingCard={{
          label:    'Example Funding',
          amount:   '$150,000',
          subtitle: 'Repaid via 10% of daily card sales',
        }}
      />

      {/* ── Main content ── */}
      <section className="py-14 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Category filter tabs */}
          <AnimateIn>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                    ${activeCategory === cat
                      ? 'bg-cyan text-white border-cyan shadow-glow'
                      : 'bg-white text-navy border-gray-200 hover:border-cyan hover:text-cyan'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Articles grid */}
          {filtered.length === 0 ? (
            <AnimateIn>
              <div className="text-center py-20 text-navy/40">
                <p className="text-lg font-medium">No articles in this category yet.</p>
              </div>
            </AnimateIn>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} delay={i * 60} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
