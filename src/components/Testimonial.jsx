import { useLang, t } from '../i18n'
import './Testimonial.css'

export default function Testimonial() {
  const { lang } = useLang()
  return (
    <section className="testimonial-section">
      <p className="testimonial-quote">
        {t(lang,
          '"我们手动发 Reddit 发了好几个月。用了 Upvote 两周后，我们在 r/startups 的帖子就能稳定拿到 500+ 赞。光是发帖时间优化这一项，就值回 10 倍价格。"',
          '"We tried posting on Reddit manually for months. Within two weeks of using Upvote, our r/startups posts were consistently hitting 500+ upvotes. The timing data alone is worth 10x the price."'
        )}
      </p>
      <div className="testimonial-author">
        <div className="ta-avatar">NC</div>
        <div className="ta-info">
          <div className="ta-name">Nicole</div>
          <div className="ta-role">CEO, Upvote.Reddit</div>
        </div>
      </div>
    </section>
  )
}
