import './CoreServices.css'

const services = [
  {
    num: '3.1',
    title: '账号基础活跃维护',
    titleEn: 'Account Maintenance',
    desc: '系统化养号策略，保持账号活跃度与健康评分，建立可信的 Reddit 身份基础。',
  },
  {
    num: '3.2',
    title: '社区调研与选题方向梳理',
    titleEn: 'Community Research & Topic Planning',
    desc: '深度分析目标子版块的内容生态，精准锁定高潜力选题方向和内容机会点。',
  },
  {
    num: '3.3',
    title: '评论互动策略与内容优化',
    titleEn: 'Engagement Strategy & Optimization',
    desc: '制定高转化评论模板与互动节奏，通过有价值的参与提升账号影响力。',
  },
  {
    num: '3.4',
    title: 'Post 选题与内容优化',
    titleEn: 'Post Creation & Content Optimization',
    desc: '从标题到正文的全链路优化，A/B 测试验证最佳内容框架，提升帖子表现。',
  },
  {
    num: '3.5',
    title: '风险控制与账号管理建议',
    titleEn: 'Risk Control & Account Safety',
    desc: '规避 Reddit 反垃圾机制，提供安全发帖频率与内容合规建议，降低封号风险。',
  },
  {
    num: '3.6',
    title: '数据复盘思路与策略迭代建议',
    titleEn: 'Data Review & Strategy Iteration',
    desc: '定期数据回顾与效果分析，基于真实表现持续优化增长策略。',
  },
  {
    num: '3.7',
    title: 'Karma 增长服务',
    titleEn: 'Karma Growth Service',
    desc: '通过合规互动策略快速提升账号 Karma 值，突破子版块发帖门槛，建立高可信度账号形象。',
  },
]

export default function CoreServices() {
  return (
    <section className="core-services" id="services">
      <div className="cs-header">
        <div className="cs-overline">核心服务能力</div>
        <h2>从养号到增长，<br />全链路 Reddit 运营服务。</h2>
        <p>六大模块覆盖 Reddit 增长全流程，让每一步都有据可依。</p>
      </div>

      <div className="cs-grid">
        {services.map((s) => (
          <div className="cs-card" key={s.num}>
            <div className="cs-num">{s.num}</div>
            <h3 className="cs-title">{s.title} <span className="cs-title-en">{s.titleEn}</span></h3>
            <p className="cs-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
