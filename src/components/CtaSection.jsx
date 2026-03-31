import { useState, useEffect } from 'react'
import { useLang, t } from '../i18n'
import './CtaSection.css'

export default function CtaSection() {
  const { lang } = useLang()
  const [status, setStatus] = useState('idle')
  const [seedCount, setSeedCount] = useState(0)

  useEffect(() => {
    fetch('/api/seed-count')
      .then(r => r.json())
      .then(d => { if (d.count) setSeedCount(d.count) })
      .catch(() => {})
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="final-cta" id="cta">
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

      {status === 'success' ? (
        <div className="cta-success">
          {t(lang,
            '🎉 提交成功！我们会尽快联系你。',
            '🎉 Submitted! We\'ll reach out to you soon.'
          )}
        </div>
      ) : (
        <form className="cta-form" onSubmit={handleSubmit}>
          <input type="email" name="email" className="cta-input" placeholder={t(lang, '输入你的邮箱', 'Enter your email')} required />
          <button type="submit" className="btn-accent" disabled={status === 'loading'}>
            {status === 'loading'
              ? t(lang, '提交中...', 'Submitting...')
              : t(lang, '锁定种子席位', 'Claim Seed Spot')
            }
          </button>
        </form>
      )}

      {status === 'error' && (
        <div className="cta-error">
          {t(lang, '提交失败，请稍后重试或直接邮件联系我们。', 'Submission failed. Please try again or email us directly.')}
        </div>
      )}

      {seedCount > 0 && (
        <div className="seed-counter">
          <span className="seed-counter-dot"></span>
          {t(lang,
            `已有 ${seedCount} 人加入成为种子用户`,
            `${seedCount} people have joined as seed users`
          )}
        </div>
      )}

      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">{t(lang, '邮箱', 'Email')}</span>
          <a href="mailto:yuqingchen02@gmail.com">yuqingchen02@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
