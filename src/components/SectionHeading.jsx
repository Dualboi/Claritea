export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-moss-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-heading">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}