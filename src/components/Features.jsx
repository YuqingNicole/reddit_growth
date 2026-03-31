import './Features.css'

const features = [
  { icon: '⏱', title: 'Smart Scheduling', desc: 'Our model analyzes 847K+ posts to find the exact window when your subreddit is most active. Schedule once, hit peak every time.' },
  { icon: '📈', title: 'Subreddit Analytics', desc: 'Deep dive into any community. See what flairs perform, which formats win, and when mods are most active.' },
  { icon: '⚡', title: 'Karma Tracking', desc: 'Real-time karma velocity across all your accounts. Set growth targets and track week-over-week momentum.' },
  { icon: '📊', title: 'Content Performance', desc: 'Every post, scored. See upvote curves, comment sentiment, and cross-post performance at a glance.' },
  { icon: '👁', title: 'Competitor Watch', desc: 'Track any Reddit account. See their posting cadence, top content, and which communities they\'re targeting.' },
  { icon: '🔔', title: 'Brand Mentions', desc: 'Instant alerts when your brand, product, or keywords appear on Reddit. Never miss a conversation again.' },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>Built for serious Reddit growth.</h2>
        <p>Every tool you need to understand communities, time your posts, and measure what matters.</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="f-card" key={i}>
            <div className="f-icon">{f.icon}</div>
            <h3 className="f-title">{f.title}</h3>
            <p className="f-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
