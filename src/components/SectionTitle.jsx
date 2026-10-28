import "../styles/SectionTitle.css";

function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}) {
  const classes = ["section-title", `section-title-${align}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      {eyebrow && (
        <span className="section-title-eyebrow">
          <span className="section-title-line" aria-hidden="true"></span>
          {eyebrow}
        </span>
      )}

      <h2>
        {title}
        {highlight && <span>{highlight}</span>}
      </h2>

      {description && <p>{description}</p>}
    </header>
  );
}

export default SectionTitle;