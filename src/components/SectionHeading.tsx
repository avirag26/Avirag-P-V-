export function SectionHeading({ id, index, title }: { id: string; index: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
