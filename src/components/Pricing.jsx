import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    desc: 'For indie hackers getting started',
    price: '$0',
    period: 'Free forever',
    features: ['3 subreddits', 'Basic scheduling', '7-day analytics', '1 account'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    desc: 'For teams serious about Reddit',
    price: '$49',
    period: 'Billed annually',
    features: ['Unlimited subreddits', 'Smart scheduling', '90-day analytics', '5 accounts', 'Competitor tracking', 'Brand alerts'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Agency',
    desc: 'For teams managing multiple brands',
    price: '$149',
    period: 'Billed annually',
    features: ['Everything in Growth', 'Unlimited accounts', 'API access', 'Custom reports', 'Priority support', 'Team collaboration'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <h2>Simple, honest pricing.</h2>
        <p>Start free. Scale when you're ready.</p>
      </div>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div className={`price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
            <div className="price-name">{plan.name}</div>
            <p className="price-desc">{plan.desc}</p>
            <div className="price-value">{plan.price}<span>/mo</span></div>
            <div className="price-period">{plan.period}</div>
            <ul className="price-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className={`price-btn ${plan.featured ? 'filled' : 'outline'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
