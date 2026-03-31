import './Testimonial.css'

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <p className="testimonial-quote">
        "We tried posting on Reddit manually for months. Within two weeks of using Upvote,
        our r/startups posts were consistently hitting 500+ upvotes. The timing data alone is worth 10x the price."
      </p>
      <div className="testimonial-author">
        <div className="ta-avatar">NC</div>
        <div className="ta-info">
          <div className="ta-name">Nicole</div>
          <div className="ta-role">CEO, Stackblitz</div>
        </div>
      </div>
    </section>
  )
}
