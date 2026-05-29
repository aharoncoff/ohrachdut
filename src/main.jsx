import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const donateUrl = 'https://thechesedfund.com/ohrachdut/keep-the-flame-alive';
const email = 'info@ohrachdut.com';

function App() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-top" />
      <div className="ambient ambient-bottom" />

      <header className="header">
        <a className="brand" href="#home" aria-label="Ohr Achdut home">
          <img src="/ohr-achdut-logo.jpg" alt="Ohr Achdut flame logo" />
          <span>
            <strong>Ohr Achdut</strong>
            <small>Phoenix, Arizona</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#minyanim">Minyanim</a>
          <a href="#learning">Learning</a>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">A makom tefillah, Torah, and achdut</p>
          <h1>Keep the flame alive in Phoenix.</h1>
          <p className="lede">
            Ohr Achdut is a welcoming shul in Phoenix, Arizona, built around sincere tefillah,
            meaningful Torah learning, and the quiet strength of a community that stands together.
          </p>
          <div className="button-row">
            <a className="button primary" href="#minyanim">View Minyanim</a>
            <a className="button donate" href={donateUrl} target="_blank" rel="noreferrer">
              <img src="/chesed-fund-logo.jpg" alt="The Chesed Fund" />
              Donate
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Ohr Achdut logo artwork">
          <img src="/ohr-achdut-logo.jpg" alt="Ohr Achdut logo with flame" />
        </div>
      </section>

      <section id="minyanim" className="section panel-section">
        <div className="section-heading">
          <p className="eyebrow">Davening</p>
          <h2>Minyanim</h2>
          <p>
            Post weekday, Shabbos, and Yom Tov times here. This area is designed to be simple to update.
          </p>
        </div>

        <div className="cards three">
          <InfoCard title="Weekday" detail="Shacharis · Mincha · Maariv" text="Add regular weekday times, seasonal changes, and special notes." />
          <InfoCard title="Shabbos" detail="Candle lighting · Kabbalas Shabbos · Shacharis" text="Add Friday night and Shabbos day schedule information." />
          <InfoCard title="Yom Tov" detail="Holiday schedules" text="Add special zmanim, classes, meals, and community announcements." />
        </div>
      </section>

      <section id="learning" className="section split">
        <div>
          <p className="eyebrow">Torah</p>
          <h2>Learning that brings warmth into the room.</h2>
          <p>
            Ohr Achdut offers space for growth through shiurim, chavrusa learning, Chassidus,
            practical halacha, and thoughtful preparation for Shabbos and Yomim Tovim.
          </p>
        </div>
        <div className="cards two">
          <InfoCard title="Shiurim" detail="Weekly learning" text="List regular classes by topic, speaker, and time." />
          <InfoCard title="Chavrusa" detail="Learn together" text="Help members find learning partners and build consistency." />
          <InfoCard title="Chassidus" detail="Inner light" text="Add farbrengens, niggunim, and inspirational learning." />
          <InfoCard title="Youth & Families" detail="Growing together" text="Add family programming, youth events, and age-appropriate learning." />
        </div>
      </section>

      <section id="community" className="section statement">
        <p className="eyebrow">Achdut</p>
        <h2>A shul is more than a place people gather. It is a place where people help hold the light.</h2>
        <p>
          This space can highlight chesed opportunities, newcomer information, community meals,
          sponsorships, simchas, and ways to support one another with dignity and warmth.
        </p>
      </section>

      <section id="contact" className="section contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Visit, ask, sponsor, or connect.</h2>
          <p>
            For questions about davening times, learning opportunities, sponsorships, or visiting Ohr Achdut,
            reach out by email.
          </p>
        </div>
        <aside className="contact-card">
          <p className="label">Email</p>
          <a href={`mailto:${email}`}>{email}</a>
          <p className="label">Location</p>
          <p>Phoenix, Arizona</p>
          <a className="button primary full" href={`mailto:${email}`}>Email Ohr Achdut</a>
          <a className="button donate full" href={donateUrl} target="_blank" rel="noreferrer">
            <img src="/chesed-fund-logo.jpg" alt="The Chesed Fund" />
            Donate through The Chesed Fund
          </a>
        </aside>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ohr Achdut · Phoenix, Arizona</p>
      </footer>
    </main>
  );
}

function InfoCard({ title, detail, text }) {
  return (
    <article className="info-card">
      <span>{detail}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

createRoot(document.getElementById('root')).render(<App />);
