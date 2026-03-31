import './Pricing.css'

const plans = [
  {
    name: '入门版',
    desc: '适合刚起步的独立开发者',
    price: '$0',
    period: '永久免费',
    features: ['3 个Subreddit', '基础排期', '7 天数据分析', '1 个账号'],
    cta: '免费开始',
    featured: false,
  },
  {
    name: '增长版',
    desc: '适合认真做 Reddit 的团队',
    price: '$49',
    period: '按年计费',
    features: ['无限Subreddit', '智能排期', '90 天数据分析', '5 个账号', '竞品追踪', '品牌提及通知'],
    cta: '免费试用',
    featured: true,
  },
  {
    name: '代理版',
    desc: '适合管理多品牌的团队',
    price: '$149',
    period: '按年计费',
    features: ['增长版全部功能', '无限账号', 'API 接入', '自定义报告', '优先支持', '团队协作'],
    cta: '联系销售',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <h2>简单透明的定价。</h2>
        <p>免费起步，按需升级。</p>
      </div>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div className={`price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
            <div className="price-name">{plan.name}</div>
            <p className="price-desc">{plan.desc}</p>
            <div className="price-value">{plan.price}<span>/月</span></div>
            <div className="price-period">{plan.period}</div>
            <ul className="price-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className={`price-btn ${plan.featured ? 'filled' : 'outline'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>试用月度定金：<strong>$200 起</strong>，支持按需定制方案</p>
      </div>
    </section>
  )
}
