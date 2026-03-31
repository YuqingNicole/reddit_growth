import { useLang, t } from '../i18n'
import './Page.css'

export default function Changelog() {
  const { lang } = useLang()
  return (
    <div className="page-container">
      <h1>{t(lang, '更新日志', 'Changelog')}</h1>

      <div className="changelog-entry">
        <div className="changelog-date">2026-03-31</div>
        <div className="changelog-version">v0.1.0 — {t(lang, '公测发布', 'Public Beta Launch')}</div>
        <ul>
          <li>{t(lang, 'OpenClaw Agent 驱动的智能评论生成与自动发布', 'OpenClaw Agent-powered smart comment generation and auto-publishing')}</li>
          <li>{t(lang, 'Subreddit 情报分析（14,000+ 活跃社区索引）', 'Subreddit intelligence analytics (14,000+ active communities indexed)')}</li>
          <li>{t(lang, 'Karma 增长服务 — 48 小时内从 2 到 226 的真实案例验证', 'Karma Growth Service — verified real case from 2 to 226 in 48 hours')}</li>
          <li>{t(lang, '智能排期系统，基于 847K+ 帖子数据优化发帖时间', 'Smart scheduling system, optimized posting times based on 847K+ post data')}</li>
          <li>{t(lang, '竞品监控 — 追踪目标账号的发帖策略', 'Competitor monitoring — track target account posting strategies')}</li>
          <li>{t(lang, '品牌提及实时通知（< 30s 延迟）', 'Real-time brand mention alerts (< 30s latency)')}</li>
        </ul>
      </div>

      <div className="changelog-entry">
        <div className="changelog-date">{t(lang, '即将推出', 'Coming Soon')}</div>
        <div className="changelog-version">{t(lang, '路线图', 'Roadmap')}</div>
        <ul>
          <li>{t(lang, '多账号批量管理面板', 'Multi-account batch management dashboard')}</li>
          <li>{t(lang, '内容 A/B 测试工具', 'Content A/B testing tools')}</li>
          <li>{t(lang, 'API 开放接口', 'Open API access')}</li>
          <li>{t(lang, '自动化工作流模板', 'Automated workflow templates')}</li>
        </ul>
      </div>

      <a href="/" className="page-back">{t(lang, '← 返回首页', '← Back to Home')}</a>
    </div>
  )
}
