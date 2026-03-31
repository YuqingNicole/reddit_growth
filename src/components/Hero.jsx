import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">公测开放中</div>
        <h1>你的 Reddit 用户正在等你。</h1>
        <p className="hero-sub">
          Upvote 为营销人和创始人提供数据分析、智能排期和社区洞察，
          让你在 Reddit 上实现增长 — 告别盲目发帖。
        </p>
        <div className="hero-actions">
          <button className="btn-accent">免费开始</button>
          <button className="btn-ghost">了解工作原理</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dash-header">
          <span className="dash-title">增长仪表盘</span>
          <span className="dash-period">近 30 天</span>
        </div>
        <div className="dash-body">
          <div className="dash-stats">
            <div className="dash-stat">
              <div className="dash-stat-label">总 Karma</div>
              <div className="dash-stat-value">3,274</div>
              <div className="dash-stat-change up">+12.6%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">帖子触达</div>
              <div className="dash-stat-value">18.5K</div>
              <div className="dash-stat-change up">+9.3%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">互动率</div>
              <div className="dash-stat-value">4.7%</div>
              <div className="dash-stat-change up">+1.2%</div>
            </div>
          </div>
          <div className="dash-chart">
            <div className="dash-chart-label">每周互动趋势</div>
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
