export default function ProgressBar({ value = 0.62 }) {
  const pct = Math.round(value * 100);
  return (
    <div className="progressOuter" aria-label={`Progress ${pct}%`}>
      <div className="progressInner" style={{ width: `${pct}%` }} />
    </div>
  );
}
