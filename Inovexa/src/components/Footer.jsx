import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="logo"><span className="logo__mark" aria-hidden="true">N</span> Inovexa</p>
          <p className="footer__note">Software built with your team, shipped in weeks, supported for years.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Inovexa Software Pvt. Ltd.</p>
    </footer>
  );
}
