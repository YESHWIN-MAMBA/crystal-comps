import GlassCard from "../components/GlassCard";
import ProgressBar from "../components/ProgressBar";
import QuantitySelector from "../components/QuantitySelector";
import SectionShell from "../components/SectionShell";

export default function PlayNow({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionShell side="right">
          <div className="twoCol" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h2 className="h2 metalTitle">Play Now</h2>
              <p className="muted">
                This is a once in a month live draw competition, Sign up and buy
                tickets now to have a chance to win this beast of a car.
              </p>
            </div>

            <GlassCard className="playCard">
              <div className="playTop">
                <img
                  className="prizeImg"
                  src={`${import.meta.env.BASE_URL}images/prize.jpg`}
                  alt="Prize"
                />

                <div className="playMeta">
                  <div className="playTitle">Win Renault Capture</div>
                  <div className="muted">
                    Includes MOT + Insurance Credit & Cash Alternative available
                  </div>

                  <div className="metaRow">
                    <div>
                      <div className="metaLabel">Tickets</div>
                      <div className="metaVal">7,842 / 12,000</div>
                    </div>
                    <div>
                      <div className="metaLabel">Entry</div>
                      <div className="metaVal">£2.99</div>
                    </div>
                  </div>

                  <ProgressBar value={0.653} />

                  <div className="buyRow">
                    <QuantitySelector />
                    <button className="btn primary">Add to cart</button>
                  </div>

                  <div className="fineprint">
                    Draw closes when all tickets sell or on{" "}
                    <strong>Friday 8pm</strong>. Terms apply.
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}
