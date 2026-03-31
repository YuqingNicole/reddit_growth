import { useLang, t } from '../i18n'
import './Page.css'

export default function Terms() {
  const { lang } = useLang()
  return (
    <div className="page-container">
      <h1>{t(lang, '服务条款', 'Terms of Service')}</h1>
      <p className="page-updated">{t(lang, '最后更新：2026 年 3 月', 'Last updated: March 2026')}</p>

      <section>
        <h2>{t(lang, '1. 服务说明', '1. Service Description')}</h2>
        <p>{t(lang,
          'Upvote 是一个基于 OpenClaw 的 Reddit 增长服务平台，提供智能排期、社区分析、Karma 增长、内容优化和竞品监控等功能。',
          'Upvote is a Reddit growth service platform powered by OpenClaw, providing smart scheduling, community analytics, Karma growth, content optimization, and competitor monitoring.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '2. 使用规范', '2. Acceptable Use')}</h2>
        <p>{t(lang, '使用我们的服务时，你同意：', 'By using our services, you agree to:')}</p>
        <ul>
          <li>{t(lang, '遵守 Reddit 的使用条款和社区规范', 'Comply with Reddit\'s Terms of Service and community guidelines')}</li>
          <li>{t(lang, '不使用服务进行垃圾信息发布或操纵行为', 'Not use the service for spam or manipulation')}</li>
          <li>{t(lang, '对你账号下的所有活动负责', 'Be responsible for all activity under your account')}</li>
          <li>{t(lang, '不尝试对服务进行逆向工程或未授权访问', 'Not attempt to reverse-engineer or gain unauthorized access to the service')}</li>
        </ul>
      </section>

      <section>
        <h2>{t(lang, '3. 付款条款', '3. Payment Terms')}</h2>
        <p>{t(lang,
          '试用月度定金 $200 起。具体价格根据服务内容和规模确定，在开始服务前双方书面确认。',
          'Trial monthly deposit starts at $200. Specific pricing is determined by service scope and confirmed in writing before service begins.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '4. 免责声明', '4. Disclaimer')}</h2>
        <p>{t(lang,
          'Upvote 不保证特定的 Karma 增长数值或帖子表现结果。Reddit 平台规则可能变化，我们将尽力调整策略以适应变化，但无法保证特定结果。',
          'Upvote does not guarantee specific Karma growth numbers or post performance results. Reddit platform rules may change, and while we will adjust strategies accordingly, we cannot guarantee specific outcomes.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '5. 终止服务', '5. Termination')}</h2>
        <p>{t(lang,
          '任何一方均可提前 7 天书面通知终止服务。终止后，未使用的预付费用将按比例退还。',
          'Either party may terminate the service with 7 days written notice. After termination, unused prepaid fees will be refunded proportionally.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '6. 联系方式', '6. Contact')}</h2>
        <p>{t(lang,
          '如有疑问请联系：yuqingchen02@gmail.com',
          'For questions, please contact: yuqingchen02@gmail.com'
        )}</p>
      </section>

      <a href="/" className="page-back">{t(lang, '← 返回首页', '← Back to Home')}</a>
    </div>
  )
}
