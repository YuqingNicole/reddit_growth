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
      <div className="seed-user-note">
        <span className="seed-icon">&#9889;</span>
        <p>{t(lang,
          '现在加入成为早期种子用户，可免费体验后续上线的全部新功能 — 名额有限，先到先得。',
          'Join now as an early seed user and get free access to all upcoming features — limited spots, first come first served.'
        )}</p>
      </div>
      <form className="cta-form" onSubmit={(e) => { e.preventDefault(); const email = e.target.email.value; if (email) window.location.href = `mailto:yuqingchen02@gmail.com?subject=${encodeURIComponent('申请种子用户席位')}&body=${encodeURIComponent(`Hi Nicole，\n\n我希望申请早期种子用户席位。\n\n我的邮箱：${email}\n\n期待你的回复！`)}` }}>
        <input type="email" name="email" className="cta-input" placeholder={t(lang, '输入你的邮箱', 'Enter your email')} required />
        <button type="submit" className="btn-accent">{t(lang, '锁定种子席位', 'Claim Seed Spot')}</button>
      </form>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">{t(lang, '邮箱', 'Email')}</span>
          <a href="mailto:yuqingchen02@gmail.com">yuqingchen02@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
