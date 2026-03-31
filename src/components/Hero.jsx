import { useLang, t } from '../i18n'
import './Hero.css'

export default function Hero() {
  const { lang } = useLang()
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">{t(lang, '公测开放中', 'Now in Public Beta')}</div>
        <h1>{t(lang, '你的 Reddit 用户正在等你。', 'Your Reddit audience is waiting.')}</h1>
        <p className="hero-sub">
          {t(lang,
            'Upvote 为营销人和创始人提供数据分析、智能排期和社区洞察，让你在 Reddit 上实现增长 — 告别盲目发帖。',
            'Upvote gives marketers and founders the analytics, scheduling, and community intelligence to grow on Reddit — without the guesswork.'
          )}
        </p>
        <div className="hero-actions">
          <button className="btn-accent">{t(lang, '免费开始', 'Start for Free')}</button>
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
