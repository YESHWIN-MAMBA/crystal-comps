import GlassCard from "../components/GlassCard";

export default function Newsletter({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <GlassCard className="newsletter">
          <div>
            <h2 className="h2 metalTitle">Get in Touch</h2>
            <p className="muted">
              Be first to see new launches, limited runs, and “last tickets
              remaining” alerts.
            </p>
          </div>

          <form
            className="newsletterForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! (dummy submit)");
            }}
          >
            <input
              className="input"
              placeholder="Email address"
              type="email"
              required
            />
            <button className="btn primary" type="submit">
              Sign up
            </button>
          </form>

          <div className="fineprint">
            No spam. Unsubscribe anytime. Privacy policy applies.
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
