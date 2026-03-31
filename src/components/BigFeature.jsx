import './BigFeature.css'

const subreddits = [
  { name: 'r/startups', members: '892K members', score: 94 },
  { name: 'r/SaaS', members: '147K members', score: 87 },
  { name: 'r/Entrepreneur', members: '2.1M members', score: 82 },
  { name: 'r/growthacking', members: '68K members', score: 79 },
  { name: 'r/marketing', members: '1.3M members', score: 75 },
]

export default function BigFeature() {
  return (
    <section className="big-feature">
      <div className="big-feature-inner">
        <div>
          <div className="bf-overline">Subreddit Intelligence</div>
          <h3 className="bf-title">Know every community<br />before you post.</h3>
          <p className="bf-desc">
            Our engine indexes 14,000+ active subreddits continuously.
            Get a complete picture of any community — from posting patterns
            to mod behavior — before you write a single word.
          </p>
          <ul className="bf-list">
            <li>Best posting times by day and hour</li>
            <li>Top-performing content formats</li>
            <li>Moderator activity patterns</li>
            <li>Engagement benchmarks per flair</li>
            <li>Community sentiment trends</li>
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
