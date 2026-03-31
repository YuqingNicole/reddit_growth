import { useLang, t } from '../i18n'
import './Features.css'

const features = [
  { icon: '⏱', zh: '智能排期', en: 'Smart Scheduling', descZh: '基于 847K+ 帖子数据，精准定位每个Subreddit的最佳发布时段。一次设定，次次命中流量高峰。', descEn: 'ML-optimized post timing based on 847K+ posts. Hit the peak window in every subreddit, every time.' },
  { icon: '📈', zh: 'Subreddit分析', en: 'Subreddit Analytics', descZh: '深度解析任意社区：哪些标签表现最好、什么格式最受欢迎、版主何时最活跃。', descEn: 'Deep dive into any community. See what flairs perform, which formats win, and when mods are most active.' },
  { icon: '⚡', zh: 'Karma 增长服务', en: 'Karma Growth', descZh: '通过合规互动策略快速提升账号 Karma 值，突破Subreddit发帖门槛，建立高可信度账号形象。', descEn: 'Boost account Karma through compliant engagement strategies. Break posting thresholds and build credible profiles.' },
  { icon: '📊', zh: '内容表现', en: 'Content Performance', descZh: '每条帖子自动评分。一目了然地查看点赞曲线、评论情感和跨版块转发效果。', descEn: 'Every post, scored. See upvote curves, comment sentiment, and cross-post performance at a glance.' },
  { icon: '👁', zh: '竞品监控', en: 'Competitor Watch', descZh: '追踪任意 Reddit 账号，洞察他们的发帖节奏、爆款内容和目标社区策略。', descEn: 'Track any Reddit account. See their posting cadence, top content, and which communities they\'re targeting.' },
  { icon: '🔔', zh: '品牌提及', en: 'Brand Mentions', descZh: '当你的品牌、产品或关键词出现在 Reddit 上时即时通知，不再错过任何讨论。', descEn: 'Instant alerts when your brand, product, or keywords appear on Reddit. Never miss a conversation again.' },
]

export default function Features() {
  const { lang } = useLang()
  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>{t(lang, 'OpenClaw 驱动，专为 Reddit 增长打造。', 'Powered by OpenClaw. Built for Reddit growth.')}</h2>
        <p>{t(lang,
          'OpenClaw Agent 自主执行，将数小时的调研与操作压缩到几分钟 — 全天候为你的品牌工作。',
          'OpenClaw agents compress hours of research and action into minutes — working for your brand 24/7.'
        )}</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="f-card" key={i}>
            <div className="f-icon">{f.icon}</div>
            <h3 className="f-title">{t(lang, f.zh, f.en)}</h3>
            <p className="f-desc">{t(lang, f.descZh, f.descEn)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
