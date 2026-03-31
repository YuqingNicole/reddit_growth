import './CtaSection.css'

export default function CtaSection() {
  return (
    <section className="final-cta">
      <h2>今天就开始在 Reddit 增长。</h2>
      <p>试用月度定金 $200 起，无隐藏费用，2 分钟内完成设置。</p>
      <button className="btn-accent">立即咨询</button>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">邮箱</span>
          <a href="mailto:yuqingchen02@gmail.com">yuqingchen02@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">微信</span>
          <span>c1426217526</span>
        </div>
      </div>
    </section>
  )
}
