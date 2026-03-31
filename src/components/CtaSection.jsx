import { useLang, t } from '../i18n'
import './CtaSection.css'

export default function CtaSection() {
  const { lang } = useLang()
  return (
    <section className="final-cta">
      <h2>{t(lang, '今天就开始在 Reddit 增长。', 'Start growing on Reddit today.')}</h2>
      <p>{t(lang,
        '试用月度定金 $200 起，无隐藏费用，2 分钟内完成设置。',
        'Trial monthly deposit from $200. No hidden fees. Set up in under 2 minutes.'
      )}</p>
      <a href="mailto:yuqingchen02@gmail.com" className="btn-accent">{t(lang, '立即咨询', 'Get in Touch')}</a>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">{t(lang, '邮箱', 'Email')}</span>
          <a href="mailto:yuqingchen02@gmail.com">yuqingchen02@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">{t(lang, '微信', 'WeChat')}</span>
          <span>c1426217526</span>
        </div>
      </div>
    </section>
  )
}
