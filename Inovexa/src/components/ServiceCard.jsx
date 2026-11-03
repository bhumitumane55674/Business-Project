export default function ServiceCard({ title, text, items }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
      {items && (
        <ul className="card__list">
          {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      )}
    </article>
  );
}
