export default function SectionShell({
  side = "left",
  children,
  className = "",
}) {
  const isRight = side === "right";

  return (
    <div className={`sectionShell ${className}`}>
      {/* If content should be right aligned, render the void FIRST */}
      {isRight && <div className="sectionVoid" aria-hidden="true" />}

      <div className="sectionContent">{children}</div>

      {/* If content should be left aligned, render the void LAST */}
      {!isRight && <div className="sectionVoid" aria-hidden="true" />}
    </div>
  );
}
