import { useLang, t } from '../i18n'
import './Page.css'

export default function Privacy() {
  const { lang } = useLang()
  return (
    <div className="page-container">
      <h1>{t(lang, '隐私政策', 'Privacy Policy')}</h1>
      <p className="page-updated">{t(lang, '最后更新：2026 年 3 月', 'Last updated: March 2026')}</p>

      <section>
        <h2>{t(lang, '1. 我们收集的信息', '1. Information We Collect')}</h2>
        <p>{t(lang,
          '当你使用 Upvote 服务时，我们可能收集以下信息：',
          'When you use Upvote services, we may collect the following information:'
        )}</p>
        <ul>
          <li>{t(lang, '你提供的邮箱地址（用于账号注册和沟通）', 'Email address you provide (for registration and communication)')}</li>
          <li>{t(lang, 'Reddit 账号的公开数据（帖子、评论、Karma 等公开信息）', 'Public data from Reddit accounts (posts, comments, Karma, and other public info)')}</li>
          <li>{t(lang, '使用日志和分析数据（用于改进服务）', 'Usage logs and analytics data (to improve our service)')}</li>
        </ul>
      </section>

      <section>
        <h2>{t(lang, '2. 信息的使用', '2. How We Use Information')}</h2>
        <ul>
          <li>{t(lang, '提供和维护我们的服务', 'Provide and maintain our services')}</li>
          <li>{t(lang, '分析 Reddit 社区数据以生成洞察报告', 'Analyze Reddit community data to generate insights')}</li>
          <li>{t(lang, '优化你的发帖时间和内容策略', 'Optimize your posting schedule and content strategy')}</li>
          <li>{t(lang, '发送服务相关通知', 'Send service-related notifications')}</li>
        </ul>
      </section>

      <section>
        <h2>{t(lang, '3. 数据安全', '3. Data Security')}</h2>
        <p>{t(lang,
          '我们采用行业标准的安全措施保护你的数据，包括加密传输、安全存储和访问控制。我们不会出售你的个人信息给第三方。',
          'We use industry-standard security measures to protect your data, including encrypted transmission, secure storage, and access control. We do not sell your personal information to third parties.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '4. 数据保留', '4. Data Retention')}</h2>
        <p>{t(lang,
          '我们会在你使用服务期间保留你的数据。当你删除账号时，我们将在 30 天内删除你的所有个人数据。',
          'We retain your data while you use our service. When you delete your account, we will delete all your personal data within 30 days.'
        )}</p>
      </section>

      <section>
        <h2>{t(lang, '5. 联系我们', '5. Contact Us')}</h2>
        <p>{t(lang,
          '如果你对隐私政策有任何问题，请联系：yuqingchen02@gmail.com',
          'If you have any questions about this privacy policy, please contact: yuqingchen02@gmail.com'
        )}</p>
      </section>

      <a href="/" className="page-back">{t(lang, '← 返回首页', '← Back to Home')}</a>
    </div>
  )
}
