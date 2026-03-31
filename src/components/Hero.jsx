import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Now in Public Beta</div>
        <h1>Your Reddit audience is waiting.</h1>
        <p className="hero-sub">
          Upvote gives marketers and founders the analytics, scheduling,
          and community intelligence to grow on Reddit — without the guesswork.
        </p>
        <div className="hero-actions">
          <button className="btn-accent">Start for Free</button>
          <button className="btn-ghost">See How It Works</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dash-header">
          <span className="dash-title">Growth Dashboard</span>
          <span className="dash-period">Last 30 days</span>
        </div>
        <div className="dash-body">
          <div className="dash-stats">
            <div className="dash-stat">
              <div className="dash-stat-label">Total Karma</div>
              <div className="dash-stat-value">3,274</div>
              <div className="dash-stat-change up">+12.6%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">Post Reach</div>
              <div className="dash-stat-value">18.5K</div>
              <div className="dash-stat-change up">+9.3%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">Engagement</div>
              <div className="dash-stat-value">4.7%</div>
              <div className="dash-stat-change up">+1.2%</div>
            </div>
          </div>
          <div className="dash-chart">
            <div className="dash-chart-label">Weekly Engagement</div>
            <div className="chart-bars">
              {[35,52,41,68,85,92,78,60,45,95,88,55].map((h, i) => (
                <div
                  key={i}
                  className={`chart-bar${h >= 78 ? ' active' : ''}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
