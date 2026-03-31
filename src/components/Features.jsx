import './Features.css'

const features = [
  { icon: '⏱', title: '智能排期', desc: '基于 847K+ 帖子数据，精准定位每个子版块的最佳发布时段。一次设定，次次命中流量高峰。' },
  { icon: '📈', title: '子版块分析', desc: '深度解析任意社区：哪些标签表现最好、什么格式最受欢迎、版主何时最活跃。' },
  { icon: '⚡', title: 'Karma 追踪', desc: '实时监控所有账号的 Karma 增速。设定增长目标，按周跟踪增长势头。' },
  { icon: '📊', title: '内容表现', desc: '每条帖子自动评分。一目了然地查看点赞曲线、评论情感和跨版块转发效果。' },
  { icon: '👁', title: '竞品监控', desc: '追踪任意 Reddit 账号，洞察他们的发帖节奏、爆款内容和目标社区策略。' },
  { icon: '🔔', title: '品牌提及', desc: '当你的品牌、产品或关键词出现在 Reddit 上时即时通知，不再错过任何讨论。' },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>专为 Reddit 增长打造。</h2>
        <p>洞察社区、精准发帖、衡量关键指标 — 你需要的所有工具，都在这里。</p>
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
