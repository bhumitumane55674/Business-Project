import { useState } from "react";

const empty = { name: "", email: "", service: "Custom software development", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Tell us a little more (at least 10 characters).";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Contact form:", form);
      setSent(true);
      setForm(empty);
    }
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Let's talk about your project.</h1>
          <p className="lead">Share a few details and we will reply within one working day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <form className="form" onSubmit={onSubmit} noValidate>
            {sent && <p className="form__success" role="status">Message sent. We will email you within one working day.</p>}
            <label>Name
              <input name="name" value={form.name} onChange={onChange} autoComplete="name" />
              {errors.name && <span className="form__error">{errors.name}</span>}
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" />
              {errors.email && <span className="form__error">{errors.email}</span>}
            </label>
            <label>Service
              <select name="service" value={form.service} onChange={onChange}>
                <option>Custom software development</option>
                <option>Mobile app development</option>
                <option>Cloud and DevOps</option>
                <option>UI/UX design</option>
                <option>QA and testing</option>
                <option>Support and maintenance</option>
              </select>
            </label>
            <label>Project details
              <textarea name="message" rows="5" value={form.message} onChange={onChange} />
              {errors.message && <span className="form__error">{errors.message}</span>}
            </label>
            <button className="btn btn--primary" type="submit">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
