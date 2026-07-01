"use client";

import { useEffect, useState } from "react";

const FEATURES = [
  {
    title: "One launch timeline",
    body: "See every task, owner, and deadline for a launch on a single timeline — no more piecing it together across five tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16M4 12h10M4 18h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for small teams",
    body: "No admin overhead, no seat-count anxiety. Navelle is priced and designed for teams of 2–20 people.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14.5 15.2c2.1.3 3.5 1.9 3.5 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Status, without the meeting",
    body: "Every stakeholder gets a live read-only view of progress, so 'what's the status?' stops filling up your calendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v9l6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function Home() {
  const [joined, setJoined] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/api/log").catch(() => {});
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="nav-inner">
          <a className="logo" href="#top">
            Navelle
          </a>

          <nav className={"nav-links" + (menuOpen ? " open" : "")} aria-label="Primary">
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a className="nav-cta" href="#waitlist" onClick={() => setMenuOpen(false)}>
              Join waitlist
            </a>
          </nav>

          <button
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="card">
            <span className="badge">Now onboarding early teams</span>
            <h1>
              Plan launches,
              <br />
              not <span className="grad">chaos</span>.
            </h1>
            <p>
              Navelle is the lightweight launch tracker for small product teams — one
              timeline, one owner per task, zero status-update meetings.
            </p>

            <form
              id="waitlist"
              className="waitlist-form"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <label className="sr-only" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                disabled={joined}
              />
              <button className="btn" type="submit" disabled={joined}>
                {joined ? "You're on the list" : "Join the waitlist"}
              </button>
            </form>

            <div className={"reveal" + (joined ? " show" : "")} role="status">
              ✨ Thanks — we'll email you when your spot opens up.
            </div>
          </div>
        </section>

        <section className="features" id="features" aria-label="Features">
          <div className="section-inner">
            <h2>Why teams switch to Navelle</h2>
            <div className="feature-grid">
              {FEATURES.map((f) => (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq" id="faq" aria-label="Frequently asked questions">
          <div className="section-inner">
            <h2>Good to know</h2>
            <details>
              <summary>Is Navelle free during early access?</summary>
              <p>Yes — every team on the waitlist gets full access free while we're in early access.</p>
            </details>
            <details>
              <summary>Do I need to migrate my existing tasks?</summary>
              <p>No. Navelle imports from CSV and most task tools in a couple of minutes.</p>
            </details>
            <details>
              <summary>Can I invite external collaborators?</summary>
              <p>Yes — guests get a read-only status link with no account required.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <span>© {new Date().getFullYear()} Navelle</span>
          <div className="footer-links">
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
