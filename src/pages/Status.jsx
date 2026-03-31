import { useLang, t } from '../i18n'
import './Page.css'

export default function Status() {
  const { lang } = useLang()
  return (
    <div className="page-container">
      <h1>{t(lang, '服务状态', 'Service Status')}</h1>

      <div className="status-banner operational">
        <span className="status-dot"></span>
        {t(lang, '所有系统运行正常', 'All Systems Operational')}
      </div>

      <div className="status-grid">
        <div className="status-item">
          <div className="status-item-header">
            <span>{t(lang, 'OpenClaw Agent 引擎', 'OpenClaw Agent Engine')}</span>
            <span className="status-tag up">{t(lang, '正常', 'Operational')}</span>
          </div>
          <div className="status-uptime">{t(lang, '99.9% 正常运行时间（过去 30 天）', '99.9% uptime (last 30 days)')}</div>
        </div>

        <div className="status-item">
          <div className="status-item-header">
            <span>{t(lang, 'Subreddit 数据索引', 'Subreddit Data Indexing')}</span>
            <span className="status-tag up">{t(lang, '正常', 'Operational')}</span>
          </div>
          <div className="status-uptime">{t(lang, '14,000+ 社区持续更新中', '14,000+ communities continuously updating')}</div>
        </div>

        <div className="status-item">
          <div className="status-item-header">
            <span>{t(lang, '智能排期系统', 'Smart Scheduling System')}</span>
            <span className="status-tag up">{t(lang, '正常', 'Operational')}</span>
          </div>
          <div className="status-uptime">{t(lang, '平均延迟 < 200ms', 'Average latency < 200ms')}</div>
        </div>

        <div className="status-item">
          <div className="status-item-header">
            <span>{t(lang, '品牌提及监控', 'Brand Mention Monitoring')}</span>
            <span className="status-tag up">{t(lang, '正常', 'Operational')}</span>
          </div>
          <div className="status-uptime">{t(lang, '通知延迟 < 30 秒', 'Alert latency < 30 seconds')}</div>
        </div>
      </div>

      <a href="/" className="page-back">{t(lang, '← 返回首页', '← Back to Home')}</a>
    </div>
  )
}
