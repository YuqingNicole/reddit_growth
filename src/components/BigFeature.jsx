import { useLang, t } from '../i18n'
import './BigFeature.css'

const subreddits = [
  { name: 'r/startups', membersZh: '892K 成员', membersEn: '892K members', score: 94 },
  { name: 'r/SaaS', membersZh: '147K 成员', membersEn: '147K members', score: 87 },
  { name: 'r/Entrepreneur', membersZh: '2.1M 成员', membersEn: '2.1M members', score: 82 },
  { name: 'r/growthacking', membersZh: '68K 成员', membersEn: '68K members', score: 79 },
  { name: 'r/marketing', membersZh: '1.3M 成员', membersEn: '1.3M members', score: 75 },
]

const listZh = ['按天和小时维度的最佳发帖时间', '高表现内容格式排行', '版主活跃规律', '各标签的互动基准', '社区情感趋势']
const listEn = ['Best posting times by day and hour', 'Top-performing content formats', 'Moderator activity patterns', 'Engagement benchmarks per flair', 'Community sentiment trends']

export default function BigFeature() {
  const { lang } = useLang()
  const list = lang === 'zh' ? listZh : listEn
  return (
    <section className="big-feature">
      <div className="big-feature-inner">
        <div>
          <div className="bf-overline">{t(lang, 'Subreddit情报', 'Subreddit Intelligence')}</div>
          <h3 className="bf-title">{t(lang, <>发帖之前，<br />先摸透每个社区。</>, <>Know every community<br />before you post.</>)}</h3>
          <p className="bf-desc">
            {t(lang,
              'OpenClaw Agent 持续索引 14,000+ 活跃Subreddit，让你在动笔之前就掌握完整画像 — 从发帖规律到版主行为，一览无余。',
              'OpenClaw agents continuously index 14,000+ active subreddits. Get a complete picture of any community — from posting patterns to mod behavior — before you write a single word.'
            )}
          </p>
          <ul className="bf-list">
            {list.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="bf-visual">
          {subreddits.map(sub => (
            <div className="bf-visual-row" key={sub.name}>
              <div className="bf-sub">
                <div className="bf-sub-name">{sub.name}</div>
                <div className="bf-sub-members">{t(lang, sub.membersZh, sub.membersEn)}</div>
              </div>
              <div className="bf-sub-score">{sub.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
