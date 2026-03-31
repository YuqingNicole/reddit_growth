import { useLang, t } from '../i18n'
import './KarmaChart.css'

const dataPoints = [
  { time: 'Day 1 00:00', karma: 2 },
  { time: 'Day 1 04:00', karma: 5 },
  { time: 'Day 1 08:00', karma: 12 },
  { time: 'Day 1 12:00', karma: 28 },
  { time: 'Day 1 16:00', karma: 47 },
  { time: 'Day 1 20:00', karma: 73 },
  { time: 'Day 2 00:00', karma: 98 },
  { time: 'Day 2 04:00', karma: 112 },
  { time: 'Day 2 08:00', karma: 134 },
  { time: 'Day 2 12:00', karma: 168 },
  { time: 'Day 2 16:00', karma: 197 },
  { time: 'Day 2 20:00', karma: 214 },
  { time: 'Day 2 24:00', karma: 226 },
]

const maxKarma = 226

function buildPath(points) {
  const w = 100, h = 100
  return points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - (p.karma / maxKarma) * h
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ')
}

function buildArea(points) {
  const w = 100, h = 100
  const line = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - (p.karma / maxKarma) * h
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ')
  return `${line} L100,100 L0,100 Z`
}

export default function KarmaChart() {
  const { lang } = useLang()
  const path = buildPath(dataPoints)
  const area = buildArea(dataPoints)

  return (
    <section className="karma-chart-section">
      <div className="karma-chart-inner">
        <div className="karma-chart-text">
          <div className="karma-overline">{t(lang, '真实案例', 'Real Case Study')}</div>
          <h2 className="karma-title">
            {t(lang,
              <>Karma 从 <span className="karma-from">2</span> 到 <span className="karma-to">226</span></>,
              <>Karma from <span className="karma-from">2</span> to <span className="karma-to">226</span></>
            )}
          </h2>
          <p className="karma-subtitle">{t(lang, '仅用 48 小时。', 'In just 48 hours.')}</p>
          <p className="karma-desc">
            {t(lang,
              '通过 OpenClaw Agent 执行精准的社区互动策略，在目标Subreddit持续产出高价值评论与帖子，实现 Karma 指数级增长。',
              'OpenClaw agents executed precise community engagement strategies — high-value comments and posts in target subreddits — driving exponential Karma growth.'
            )}
          </p>

          <div className="karma-milestones">
            <div className="km-item">
              <div className="km-time">{t(lang, '第 0 小时', 'Hour 0')}</div>
              <div className="km-value">2 Karma</div>
              <div className="km-note">{t(lang, '新账号起步', 'Fresh account')}</div>
            </div>
            <div className="km-item">
              <div className="km-time">{t(lang, '第 12 小时', 'Hour 12')}</div>
              <div className="km-value">28 Karma</div>
              <div className="km-note">{t(lang, '首批评论获赞', 'First comments gain traction')}</div>
            </div>
            <div className="km-item">
              <div className="km-time">{t(lang, '第 24 小时', 'Hour 24')}</div>
              <div className="km-value">98 Karma</div>
              <div className="km-note">{t(lang, '帖子开始起量', 'Posts start gaining momentum')}</div>
            </div>
            <div className="km-item highlight">
              <div className="km-time">{t(lang, '第 48 小时', 'Hour 48')}</div>
              <div className="km-value">226 Karma</div>
              <div className="km-note">{t(lang, '突破主流版块门槛', 'Broke major subreddit thresholds')}</div>
            </div>
          </div>
        </div>

        <div className="karma-chart-visual">
          <div className="chart-card">
            <div className="chart-header">
              <span className="chart-label">{t(lang, 'Karma 增长曲线', 'Karma Growth Curve')}</span>
              <span className="chart-badge">48h</span>
            </div>

            <div className="chart-y-axis">
              <span>226</span>
              <span>150</span>
              <span>75</span>
              <span>2</span>
            </div>

            <div className="chart-area">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="chart-svg">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path d={area} fill="url(#areaGrad)" />
                <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                {dataPoints.map((p, i) => {
                  const x = (i / (dataPoints.length - 1)) * 100
                  const y = 100 - (p.karma / maxKarma) * 100
                  return <circle key={i} cx={x} cy={y} r="1.5" fill="var(--accent)" className="chart-dot" />
                })}
              </svg>
            </div>

            <div className="chart-x-axis">
              <span>{t(lang, '第1天 0:00', 'Day 1 0:00')}</span>
              <span>{t(lang, '第1天 12:00', 'Day 1 12:00')}</span>
              <span>{t(lang, '第2天 0:00', 'Day 2 0:00')}</span>
              <span>{t(lang, '第2天 12:00', 'Day 2 12:00')}</span>
              <span>{t(lang, '第2天 24:00', 'Day 2 24:00')}</span>
            </div>

            <div className="chart-result">
              <div className="chart-result-item">
                <span className="cr-label">{t(lang, '起始', 'Start')}</span>
                <span className="cr-value">2</span>
              </div>
              <div className="chart-result-arrow">→</div>
              <div className="chart-result-item">
                <span className="cr-label">{t(lang, '结束', 'End')}</span>
                <span className="cr-value accent">226</span>
              </div>
              <div className="chart-result-item">
                <span className="cr-label">{t(lang, '增幅', 'Growth')}</span>
                <span className="cr-value accent">+11,200%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
