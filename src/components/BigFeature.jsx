import './BigFeature.css'

const subreddits = [
  { name: 'r/startups', members: '892K 成员', score: 94 },
  { name: 'r/SaaS', members: '147K 成员', score: 87 },
  { name: 'r/Entrepreneur', members: '2.1M 成员', score: 82 },
  { name: 'r/growthacking', members: '68K 成员', score: 79 },
  { name: 'r/marketing', members: '1.3M 成员', score: 75 },
]

export default function BigFeature() {
  return (
    <section className="big-feature">
      <div className="big-feature-inner">
        <div>
          <div className="bf-overline">子版块情报</div>
          <h3 className="bf-title">发帖之前，<br />先摸透每个社区。</h3>
          <p className="bf-desc">
            我们的引擎持续索引 14,000+ 活跃子版块，
            让你在动笔之前就掌握完整画像 —
            从发帖规律到版主行为，一览无余。
          </p>
          <ul className="bf-list">
            <li>按天和小时维度的最佳发帖时间</li>
            <li>高表现内容格式排行</li>
            <li>版主活跃规律</li>
            <li>各标签的互动基准</li>
            <li>社区情感趋势</li>
          </ul>
        </div>
        <div className="bf-visual">
          {subreddits.map(sub => (
            <div className="bf-visual-row" key={sub.name}>
              <div className="bf-sub">
                <div className="bf-sub-name">{sub.name}</div>
                <div className="bf-sub-members">{sub.members}</div>
              </div>
              <div className="bf-sub-score">{sub.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
