import { useLang, t } from '../i18n'
import './Hero.css'

export default function Hero() {
  const { lang } = useLang()
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">{t(lang, 'Powered by OpenClaw', 'Powered by OpenClaw')}</div>
        <h1>{t(lang, 'AI 驱动的 Reddit 增长引擎。', 'AI-Powered Reddit Growth Engine.')}</h1>
        <p className="hero-sub">
          {t(lang,
            '基于 OpenClaw 自主 Agent，为你的品牌在 Reddit 上执行真实操作 — 智能排期、社区洞察、内容优化，全天候自动运转，不只是建议，而是行动。',
            'Built on OpenClaw autonomous agents that take real action on your behalf — smart scheduling, community intelligence, and content optimization running 24/7. Not just suggestions, but execution.'
          )}
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-accent">{t(lang, '免费开始', 'Start for Free')}</a>
          <button className="btn-ghost">{t(lang, '了解工作原理', 'See How It Works')}</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dash-header">
          <span className="dash-title">{t(lang, '增长仪表盘', 'Growth Dashboard')}</span>
          <span className="dash-period">{t(lang, '近 30 天', 'Last 30 days')}</span>
        </div>
        <div className="dash-body">
          <div className="dash-stats">
            <div className="dash-stat">
              <div className="dash-stat-label">{t(lang, '总 Karma', 'Total Karma')}</div>
              <div className="dash-stat-value">3,274</div>
              <div className="dash-stat-change up">+12.6%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">{t(lang, '帖子触达', 'Post Reach')}</div>
              <div className="dash-stat-value">18.5K</div>
              <div className="dash-stat-change up">+9.3%</div>
            </div>
            <div className="dash-stat">
              <div className="dash-stat-label">{t(lang, '互动率', 'Engagement')}</div>
              <div className="dash-stat-value">4.7%</div>
              <div className="dash-stat-change up">+1.2%</div>
            </div>
          </div>
          <div className="dash-chart">
            <div className="dash-chart-label">{t(lang, '每周互动趋势', 'Weekly Engagement')}</div>
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
