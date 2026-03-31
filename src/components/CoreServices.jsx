import { useLang, t } from '../i18n'
import './CoreServices.css'

const services = [
  { num: '01', zh: '账号基础活跃维护', en: 'Account Maintenance', descZh: '系统化养号策略，保持账号活跃度与健康评分，建立可信的 Reddit 身份基础。', descEn: 'Systematic account nurturing to maintain activity and health scores, building a credible Reddit identity.' },
  { num: '02', zh: '社区调研与选题方向梳理', en: 'Community Research & Topic Planning', descZh: '深度分析目标子版块的内容生态，精准锁定高潜力选题方向和内容机会点。', descEn: 'Deep analysis of target subreddit ecosystems to identify high-potential topics and content opportunities.' },
  { num: '03', zh: '评论互动策略与内容优化', en: 'Engagement Strategy & Optimization', descZh: '制定高转化评论模板与互动节奏，通过有价值的参与提升账号影响力。', descEn: 'High-conversion comment templates and engagement cadence to grow account influence through valuable participation.' },
  { num: '04', zh: 'Post 选题与内容优化', en: 'Post Creation & Content Optimization', descZh: '从标题到正文的全链路优化，A/B 测试验证最佳内容框架，提升帖子表现。', descEn: 'End-to-end optimization from titles to body copy. A/B tested frameworks to maximize post performance.' },
  { num: '05', zh: '风险控制与账号管理建议', en: 'Risk Control & Account Safety', descZh: '规避 Reddit 反垃圾机制，提供安全发帖频率与内容合规建议，降低封号风险。', descEn: 'Avoid Reddit anti-spam mechanisms with safe posting frequencies and compliance guidelines to minimize ban risk.' },
  { num: '06', zh: '数据复盘思路与策略迭代建议', en: 'Data Review & Strategy Iteration', descZh: '定期数据回顾与效果分析，基于真实表现持续优化增长策略。', descEn: 'Regular data reviews and performance analysis to continuously refine growth strategies based on real results.' },
  { num: '07', zh: 'Karma 增长服务', en: 'Karma Growth Service', descZh: '通过合规互动策略快速提升账号 Karma 值，突破子版块发帖门槛，建立高可信度账号形象。', descEn: 'Rapidly boost account Karma through compliant engagement. Break subreddit posting thresholds and build credibility.' },
]

export default function CoreServices() {
  const { lang } = useLang()
  return (
    <section className="core-services" id="services">
      <div className="cs-header">
        <div className="cs-overline">{t(lang, '核心服务能力', 'Core Services')}</div>
        <h2>{t(lang, <>从养号到增长，<br />OpenClaw AI 全链路执行。</>, <>From account building to growth,<br />OpenClaw AI handles the execution.</>)}</h2>
        <p>{t(lang,
          '基于 OpenClaw 自主 Agent 驱动的七大服务模块，AI 代替人工执行真实操作，全天候运转。',
          'Seven service modules powered by OpenClaw autonomous agents. AI takes real action on your behalf, running 24/7.'
        )}</p>
      </div>

      <div className="cs-grid">
        {services.map((s) => (
          <div className="cs-card" key={s.num}>
            <div className="cs-num">{s.num}</div>
            <h3 className="cs-title">{t(lang, s.zh, s.en)}</h3>
            <p className="cs-desc">{t(lang, s.descZh, s.descEn)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
