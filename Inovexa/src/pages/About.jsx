const values = [
  { t: "Plain talk", d: "We explain trade-offs in simple language and share bad news early." },
  { t: "Small senior teams", d: "You work with experienced engineers, not a pyramid of juniors." },
  { t: "Own the outcome", d: "We measure success by your results, not by hours logged." },
];
const team = [
];

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>A software team that works like part of yours.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Our story</h2>
            <p>We began after seeing good ideas stall because agencies disappeared after launch. We set out to build a company that stays: </p>
              <p>one that ships quickly, documents everything and keeps supporting what it builds.</p>
        
          </div>
          <div className="panel">
            <h3>Mission</h3>
            <p>Make good software affordable and dependable for every growing business.</p>
            <h3>Vision</h3>
            <p>To be the first team founders call when they need a product built well.</p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2>How we work</h2>
          <div className="grid grid--3">
            {values.map((v) => <article className="card" key={v.t}><h3>{v.t}</h3><p>{v.d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {team.map((p) => (
              <div className="person" key={p.n}>
                <div className="person__avatar" aria-hidden="true">{p.n.split(" ").map((w) => w[0]).join("")}</div>
                <h3>{p.n}</h3>
                <p>{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
