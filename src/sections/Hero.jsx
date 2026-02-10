import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";

export default function Hero({ id }) {
  return (
    <section id={id} className="section hero">
      <div className="container">
        <SectionShell side="left">
          <div className="heroCopy">
            <div className="badge glass">Live • New drop every hour</div>
            <h1 className="h1 metalTitle">
              Win premium prizes with a single ticket.<br></br>
              <span className="grad"> Crystal clear odds.</span>
            </h1>
            <p className="lead metalTitle">
              A modern, secure competition platform with instant entries,
              real-time progress, and a beautiful 3D experience get ready for
              crystal competitions.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#play">
                Play Now
              </a>
              <a className="btn ghost" href="#how">
                How it works
              </a>
            </div>

            <div className="miniStats">
              <GlassCard className="miniStat">
                <div className="kpi">14,820</div>
                <div className="muted">Tickets sold today</div>
              </GlassCard>
              <GlassCard className="miniStat">
                <div className="kpi">2m 12s</div>
                <div className="muted">Avg checkout time</div>
              </GlassCard>
              <GlassCard className="miniStat">
                <div className="kpi">4.9★</div>
                <div className="muted">Trustpilot-style rating</div>
              </GlassCard>
            </div>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}
