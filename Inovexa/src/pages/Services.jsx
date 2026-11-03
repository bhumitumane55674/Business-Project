import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data.js";

const models = [
  { t: "Fixed scope", d: "A set price for a clearly defined product or feature." },
  { t: "Dedicated team", d: "A monthly team that works only on your roadmap." },
  { t: "Support plan", d: "Ongoing fixes, updates and hosting for a flat monthly fee." },
];

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Services</h1>
          <p className="lead">From first prototype to long-term support, everything your product needs under one roof.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--3">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2>Ways to work with us</h2>
          <div className="grid grid--3">
            {models.map((m) => <article className="card" key={m.t}><h3>{m.t}</h3><p>{m.d}</p></article>)}
          </div>
          <p className="center"><Link to="/contact" className="btn btn--primary">Get a quote</Link></p>
        </div>
      </section>
    </>
  );
}
