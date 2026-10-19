export function SlsSquarePost() {
  return (
    <main className="sls-art" aria-label="SLS Logistics square promotional artwork">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Noto+Sans+Telugu:wght@400;500;600;700;800&display=swap');
        .sls-art {
          --ink: #102b57;
          --ink-soft: #29456f;
          --cream: #ffffff;
          --paper: #ffffff;
          --orange: #b86600;
          --gold: #f4b400;
          --teal: #1a5da6;
          width: 100vw;
          height: 100vh;
          aspect-ratio: 1;
          margin: 0;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          color: var(--ink);
          background: var(--cream);
          font-family: 'DM Sans', 'Noto Sans Telugu', 'Nirmala UI', Gautami, sans-serif;
          isolation: isolate;
        }
        .sls-art *, .sls-art *::before, .sls-art *::after { box-sizing: border-box; }
        .sls-top {
          min-height: 17%;
          padding: 4.1% 5.4% 3.2%;
          display: flex;
          align-items: center;
          gap: 3%;
          color: var(--paper);
          background: var(--ink);
          position: relative;
        }
        .sls-brand { min-width: 0; }
        .sls-brand-name {
          color: var(--paper);
          font-size: clamp(20px, 4.5vw, 42px);
          line-height: .95;
          letter-spacing: -.055em;
          font-weight: 800;
        }
        .sls-brand-sub {
          margin-top: 1.1%;
          color: #f2c66e;
          font-size: clamp(8px, 1.7vw, 16px);
          line-height: 1.15;
          letter-spacing: .055em;
          font-weight: 700;
          text-transform: uppercase;
        }
        .sls-edition {
          margin-left: auto;
          align-self: flex-start;
          color: #d9e0dc;
          font-size: clamp(7px, 1.25vw, 12px);
          font-weight: 700;
          letter-spacing: .16em;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .sls-hero {
          min-height: 38%;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          position: relative;
          padding: 5.1% 5.4% 2.7%;
          overflow: hidden;
          background: var(--cream);
        }
        .sls-hero-copy { z-index: 1; padding-top: 1.5%; }
        .sls-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--orange);
          font-size: clamp(8px, 1.5vw, 14px);
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .sls-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--orange);
        }
        .sls-headline {
          max-width: 560px;
          margin: 3.5% 0 0;
          color: var(--ink);
          font-size: clamp(18px, 3.55vw, 34px);
          line-height: 1.34;
          letter-spacing: -.045em;
          font-weight: 700;
        }
        .sls-headline strong { color: var(--orange); font-weight: 800; }
        .sls-route-label {
          display: inline-flex;
          align-items: center;
          margin-top: 5%;
          padding: 2.5% 4%;
          gap: 10px;
          border-radius: 999px;
          color: var(--paper);
          background: var(--ink);
          font-size: clamp(10px, 1.8vw, 17px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: .04em;
        }
        .sls-route-label span { color: var(--gold); font-size: 1.25em; }
        .sls-globe {
          position: absolute;
          width: 49%;
          right: -2%;
          top: 2%;
          height: 98%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sls-globe img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .sls-services {
          margin: 0 5.4%;
          padding: 3.1% 0 2.5%;
          border-top: 1px solid rgba(24,43,62,.22);
        }
        .sls-services-heading {
          margin: 0 0 2.3%;
          color: var(--ink-soft);
          font-size: clamp(8px, 1.4vw, 13px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .17em;
        }
        .sls-service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5% 4%;
        }
        .sls-service {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          color: var(--ink);
          font-size: clamp(10px, 1.75vw, 16px);
          line-height: 1.2;
          font-weight: 700;
        }
        .sls-service i {
          width: 18px;
          height: 18px;
          flex: none;
          display: grid;
          place-items: center;
          border: 1.5px solid var(--teal);
          border-radius: 50%;
          color: var(--teal);
          font-style: normal;
          font-size: 11px;
          font-weight: 800;
        }
        .sls-categories {
          margin: 1% 5.4% 0;
          padding: 2.5% 3%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px 10px;
          border-radius: 8px;
          background: #eaf0f8;
          color: var(--ink);
          font-size: clamp(9px, 1.55vw, 14px);
          line-height: 1.25;
          font-weight: 700;
        }
        .sls-categories strong {
          color: var(--orange);
          font-size: clamp(8px, 1.25vw, 12px);
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .sls-categories .dot { color: var(--orange); }
        .sls-door {
          margin: 2.7% 5.4% 0;
          padding: 2.5% 3.2%;
          display: flex;
          align-items: center;
          gap: 13px;
          border-left: 4px solid var(--orange);
          background: rgba(234,240,248,.82);
          color: var(--ink);
          font-size: clamp(11px, 2vw, 18px);
          line-height: 1.2;
          font-weight: 800;
        }
        .sls-door-icon {
          width: 34px;
          height: 34px;
          flex: none;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--gold);
        }
        .sls-door-icon svg { width: 20px; height: 20px; }
        .sls-footer {
          margin-top: auto;
          padding: 3.3% 5.4% 3.8%;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          align-items: center;
          gap: 14px;
          color: var(--paper);
          background: var(--ink);
        }
        .sls-contact-label {
          margin-bottom: 1.3%;
          color: #f2c66e;
          font-size: clamp(8px, 1.3vw, 12px);
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .sls-number {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          font-size: clamp(19px, 4vw, 38px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -.04em;
        }
        .sls-wa {
          width: 30px;
          height: 30px;
          flex: none;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--ink);
          background: #8bc69b;
        }
        .sls-wa svg { width: 18px; height: 18px; }
        .sls-trust {
          border-left: 1px solid rgba(255,249,236,.34);
          padding-left: 10%;
          color: var(--paper);
          font-size: clamp(9px, 1.55vw, 14px);
          line-height: 1.35;
          font-weight: 600;
        }
        .sls-trust b {
          display: block;
          margin-bottom: 4px;
          color: var(--gold);
          font-size: clamp(7px, 1.1vw, 10px);
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        @media (max-width: 540px) {
          .sls-art { width: 100vw; }
          .sls-top { min-height: 16%; }
          .sls-hero { min-height: 39%; }
          .sls-globe { width: 50%; right: -5%; }
          .sls-headline { max-width: 64%; }
          .sls-service { gap: 6px; }
          .sls-service i { width: 15px; height: 15px; font-size: 9px; }
          .sls-footer { gap: 8px; }
          .sls-wa { width: 25px; height: 25px; }
          .sls-wa svg { width: 15px; height: 15px; }
        }
      `}</style>

      <header className="sls-top">
        <div className="sls-brand">
          <div className="sls-brand-name">SLS Logistics</div>
          <div className="sls-brand-sub">Cargo &amp; International Courier Services</div>
        </div>
        <div className="sls-edition">INDIA · WORLDWIDE</div>
      </header>

      <section className="sls-hero">
        <div className="sls-hero-copy">
          <div className="sls-kicker">Send it with care</div>
          <h1 className="sls-headline">
            మీ పార్సెల్స్, లగేజ్ &amp; కార్గోను <strong>India నుండి Worldwide</strong> సురక్షితంగా పంపించండి!
          </h1>
          <div className="sls-route-label">India <span>→</span> Worldwide</div>
        </div>
        <div className="sls-globe" aria-hidden="true">
          <img
            src="/__mockup/images/sls-logistics-logo.png"
            alt="SLS Logistics Cargo and International Courier Services logo"
          />
        </div>
      </section>

      <section className="sls-services" aria-label="Shipping benefits">
        <h2 className="sls-services-heading">Shipping, made simple</h2>
        <div className="sls-service-grid">
          <div className="sls-service"><i>✓</i>Domestic &amp; International Shipping</div>
          <div className="sls-service"><i>✓</i>Worldwide Shipping Network</div>
          <div className="sls-service"><i>✓</i>Fast &amp; Reliable Delivery</div>
          <div className="sls-service"><i>✓</i>Safe &amp; Secure Handling</div>
        </div>
      </section>

      <div className="sls-categories">
        <strong>We carry</strong>
        <span>Food Parcels</span><span className="dot">•</span>
        <span>Luggage</span><span className="dot">•</span>
        <span>Household Items</span><span className="dot">•</span>
        <span>Cargo</span>
      </div>

      <div className="sls-door">
        <span className="sls-door-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 10.5L12 3L21 10.5V21H3V10.5Z" stroke="#182B3E" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 21V13H15V21M7 10H7.01M17 10H17.01" stroke="#182B3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Door-to-Door International Courier Services
      </div>

      <footer className="sls-footer">
        <div>
          <div className="sls-contact-label">WhatsApp us to get started</div>
          <div className="sls-number">
            <span className="sls-wa" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 8.2c.3-.4.6-.3.9-.1l.8 1.4c.1.2.1.4 0 .6l-.5.6c.6 1.2 1.4 2 2.6 2.6l.6-.5c.2-.1.4-.1.6 0l1.4.8c.2.2.3.5.1.8-.4.7-1.1 1-1.8.9-2.5-.4-5.3-3.2-5.7-5.7-.1-.6.3-1.3 1-1.4Z" fill="currentColor" />
              </svg>
            </span>
            +91 80992 61113
          </div>
        </div>
        <div className="sls-trust">
          <b>Here for every journey</b>
          Your Trusted Partner for Worldwide Delivery
        </div>
      </footer>
    </main>
  );
}
