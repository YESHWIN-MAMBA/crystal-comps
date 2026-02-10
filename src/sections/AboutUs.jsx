import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";

export default function AboutUs({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionShell side="right">
          <div className="twoCol" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h2 className="h2 metalTitle">About Us</h2>
              <p className="muted">
                We’re a small team building a premium competition experience:
                transparent, secure, and delightfully designed. We live, breath
                & thrive in the competitions space. Ask our competitors
              </p>

              <div className="bullets">
                <div className="bulletRow">
                  <BulletIcon type="shield" />
                  <span>Secure payments + instant confirmation</span>
                </div>
                <div className="bulletRow">
                  <BulletIcon type="spark" />
                  <span>Transparent draws and clear rules</span>
                </div>
                <div className="bulletRow">
                  <BulletIcon type="support" />
                  <span>Customer-first support with fast replies</span>
                </div>
              </div>
            </div>

            <GlassCard className="aboutCard">
              <div className="aboutKpis">
                <div>
                  <div className="kpi">£1.2K</div>
                  <div className="muted">Prizes awarded</div>
                </div>
                <div>
                  <div className="kpi">98%</div>
                  <div className="muted">Positive feedback</div>
                </div>
                <div>
                  <div className="kpi">24/7</div>
                  <div className="muted">Auto & Live draws</div>
                </div>
              </div>
              <div className="fineprint">
                Dont just take our word. Explore our KPIs, player stats, and{" "}
                reviews with facebook & trustpilot.
              </div>
            </GlassCard>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}

const BulletIcon = ({ type }) => {
  const common = { className: "bulletIcon", fill: "none" };
  if (type === "shield")
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path
          d="M12 3l8 4v6c0 5-3.4 8.7-8 9-4.6-.3-8-4-8-9V7l8-4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity=".7"
        />
        <path
          d="M8.5 12l2.2 2.2L15.8 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "spark")
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path
          d="M12 2l1.2 6.2L20 10l-6.8 1.8L12 18l-1.2-6.2L4 10l6.8-1.8L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity=".75"
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path
        d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity=".7"
      />
      <path
        d="M8 12h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
