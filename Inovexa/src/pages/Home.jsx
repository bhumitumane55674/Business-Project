import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data.js";
import heroImage from "../assests/image.jpg";

const steps = [
  { t: "Discover", d: "We learn your goals, users and constraints in a two-day workshop." },
  { t: "Design", d: "You review clickable prototypes before any code is written." },
  { t: "Build", d: "Two-week sprints with a working demo at the end of each one." },
  { t: "Launch and support", d: "We deploy, monitor and keep improving after go-live." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <h1>Software your team can ship, run and trust.</h1>
            <p className="lead">Inovexa designs, builds and maintains web and mobile products for startups and growing companies. Small senior teams, weekly demos, no surprises.</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">Start a project</Link>
              <Link to="/services" className="btn btn--ghost">See our services</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="\src\assests\image.jpg" alt="Team working together" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          <p><strong>120+</strong> products delivered</p>
          <p><strong>9 years</strong> in business</p>
          <p><strong>45</strong> engineers and designers</p>
          <p><strong>4.9/5</strong> average client rating</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we build with you</h2>
          <div className="grid grid--3">
            {services.slice(0, 3).map((s) => <ServiceCard key={s.title} title={s.title} text={s.text} />)}
          </div>
          <p className="center"><Link to="/services" className="textlink">View all six services</Link></p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2>How a project runs</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}><span className="steps__n">{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Have an idea or a stuck project?</h2>
          <p>Tell us about it. We reply within one working day.</p>
          <Link to="/contact" className="btn btn--light">Book a free call</Link>
        </div>
      </section>
    </>
  );
}