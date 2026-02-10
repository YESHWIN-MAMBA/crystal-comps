import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";

const IconBrowse = () => (
  <svg viewBox="0 0 24 24" className="miniIcon" fill="none">
    <path
      d="M4 7h16M4 12h16M4 17h10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IconQuestion = () => (
  <svg viewBox="0 0 24 24" className="miniIcon" fill="none">
    <path
      d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.7-1.7 1.2-1.7 2.7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 17h.01"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"
      stroke="currentColor"
      strokeWidth="1.4"
      opacity=".55"
    />
  </svg>
);
const IconCart = () => (
  <svg viewBox="0 0 24 24" className="miniIcon" fill="none">
    <path
      d="M6 7h15l-1.5 8.5H8L6 4H3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);
const IconTrophy = () => (
  <svg viewBox="0 0 24 24" className="miniIcon" fill="none">
    <path
      d="M8 4h8v3a4 4 0 0 1-8 0V4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M6 6H4a2 2 0 0 0 2 2M18 6h2a2 2 0 0 1-2 2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 11v4M9 21h6M10 15h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const steps = [
  {
    title: "Choose a competition",
    text: "Browse live draws and pick a prize you actually want.",
    Icon: IconBrowse,
  },
  {
    title: "Answer a quick question",
    text: "A simple entry step keeps it fair and compliant.",
    Icon: IconQuestion,
  },
  {
    title: "Buy tickets instantly",
    text: "Checkout in seconds. Track live progress in real time.",
    Icon: IconCart,
  },
  {
    title: "Watch the draw",
    text: "We announce winners transparently and notify you instantly.",
    Icon: IconTrophy,
  },
];

export default function HowToPlay({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionShell side="left">
          <div>
            <h2 className="h2 metalTitle">How to Play</h2>
            <p className="muted">
              Explore simple steps. Clear, fast, and secure for crystal clear
              competitions.
            </p>

            <div className="stepsGrid">
              {steps.map(({ title, text, Icon }) => (
                <GlassCard key={title} className="stepCardV">
                  <div className="stepIconWrap">
                    <Icon />
                  </div>
                  <div className="stepTitle">{title}</div>
                  <div className="muted">{text}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}
