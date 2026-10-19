export function SlsStoryVariant() {
  return (
    <main className="sls-story-stage" aria-label="SLS Logistics vertical story">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        .sls-story-stage {
          --night: #102b50;
          --night-deep: #0a203d;
          --paper: #f4f0e6;
          --saffron: #f0ad48;
          --leaf: #8bc69b;
          width: 100vw;
          min-height: 100dvh;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #deded5;
          font-family: 'DM Sans', sans-serif;
          color: var(--paper);
        }
        .sls-story-stage *, .sls-story-stage *::before, .sls-story-stage *::after {
          box-sizing: border-box;
        }
        .sls-story-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: min(100vw, 56.25vh);
          height: min(100dvh, 177.7778vw);
          aspect-ratio: 9 / 16;
          padding: 8.3% 8.2% 8%;
          background:
            radial-gradient(ellipse at 90% 46%, rgba(38, 77, 114, .5), transparent 43%),
            linear-gradient(153deg, #17375e 0%, var(--night) 48%, var(--night-deep) 100%);
          box-shadow: 0 20px 70px rgba(22, 37, 48, .2);
        }
        .sls-story-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 88%;
          aspect-ratio: 1;
          right: -49%;
          top: 32%;
          border: 1px solid rgba(244, 240, 230, .14);
          border-radius: 50%;
          box-shadow: 0 0 0 26px rgba(244, 240, 230, .035), 0 0 0 54px rgba(244, 240, 230, .025);
        }
        .sls-story-card::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: .18;
          pointer-events: none;
          background-image: radial-gradient(rgba(244,240,230,.36) .55px, transparent .65px);
          background-size: 5px 5px;
          mask-image: linear-gradient(90deg, transparent 42%, black);
        }
        .sls-story-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: none;
          color: rgba(244,240,230,.76);
          font: 700 clamp(8px, 2.15vw, 11px)/1 'Space Mono', monospace;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .sls-story-index {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .sls-story-index::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--saffron);
        }
        .sls-story-logo {
          width: min(60%, 124px);
          height: auto;
          aspect-ratio: 1;
          min-height: 0;
          max-height: none;
          margin-top: 5%;
          display: grid;
          place-items: center;
          align-self: flex-start;
          flex: none;
          padding: 0;
          overflow: hidden;
          border-radius: 3px;
          background: var(--paper);
        }
        .sls-story-logo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .sls-story-hero {
          position: relative;
          z-index: 1;
          margin-top: auto;
          margin-bottom: 5%;
        }
        .sls-story-kicker {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 5%;
          color: var(--saffron);
          font: 700 clamp(9px, 2.45vw, 12px)/1.2 'Space Mono', monospace;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .sls-story-kicker::before {
          content: "";
          width: 22px;
          height: 1px;
          background: var(--saffron);
        }
        .sls-story-title {
          max-width: 100%;
          margin: 0;
          font-size: clamp(32px, 6.1vh, 48px);
          line-height: .96;
          letter-spacing: -.065em;
          font-weight: 700;
        }
        .sls-story-title span { white-space: nowrap; }
        .sls-story-title em {
          color: var(--saffron);
          font-style: normal;
        }
        .sls-story-copy {
          max-width: 91%;
          margin: 5.5% 0 0;
          color: rgba(244,240,230,.8);
          font-size: clamp(13px, 3.3vw, 16px);
          line-height: 1.5;
          font-weight: 500;
        }
        .sls-story-route {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          margin: 4% 0 7%;
          padding: 10px 12px;
          border: 1px solid rgba(244,240,230,.24);
          border-radius: 2px;
          color: var(--paper);
          font: 700 clamp(9px, 2.4vw, 12px)/1 'Space Mono', monospace;
          letter-spacing: .05em;
        }
        .sls-story-route span {
          color: var(--saffron);
          font-size: 16px;
        }
        .sls-story-stamp {
          position: absolute;
          right: 5%;
          bottom: 34%;
          width: 30%;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          border: 1px solid rgba(240,173,72,.46);
          border-radius: 50%;
          color: var(--saffron);
          transform: rotate(-14deg);
        }
        .sls-story-stamp svg { width: 60%; height: 60%; }
        .sls-story-footer {
          position: relative;
          z-index: 2;
          flex: none;
          padding-top: 5.5%;
          border-top: 1px solid rgba(244,240,230,.22);
        }
        .sls-story-cta-label {
          margin-bottom: 4%;
          color: rgba(244,240,230,.75);
          font: 700 clamp(8px, 2.15vw, 11px)/1.3 'Space Mono', monospace;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .sls-story-cta {
          min-height: 54px;
          padding: 4.2% 5%;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--night-deep);
          background: var(--leaf);
          border-radius: 3px;
          transition: transform .18s ease, opacity .18s ease;
        }
        .sls-story-cta:hover { transform: translateY(-2px); }
        .sls-story-cta:focus-visible {
          outline: 2px solid var(--paper);
          outline-offset: 4px;
        }
        .sls-story-wa {
          width: 29px;
          height: 29px;
          flex: none;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--night-deep);
          color: var(--leaf);
        }
        .sls-story-wa svg { width: 17px; height: 17px; }
        .sls-story-cta-text {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-size: clamp(11px, 3vw, 14px);
          line-height: 1.1;
          font-weight: 800;
        }
        .sls-story-cta-text small {
          font: 700 clamp(9px, 2.5vw, 12px)/1.1 'Space Mono', monospace;
          letter-spacing: .015em;
          white-space: nowrap;
        }
        .sls-story-arrow {
          margin-left: auto;
          font-size: 20px;
          font-weight: 500;
        }
        .sls-story-caption {
          margin-top: 4.5%;
          color: rgba(244,240,230,.64);
          text-align: center;
          font-size: clamp(8px, 2.2vw, 11px);
          line-height: 1.25;
          letter-spacing: .02em;
        }
        @media (max-height: 620px) {
          .sls-story-card { padding-top: 6%; padding-bottom: 6%; }
          .sls-story-logo { margin-top: 4%; }
          .sls-story-title { font-size: clamp(30px, 5.8vh, 42px); }
          .sls-story-footer { padding-top: 4%; }
          .sls-story-cta { min-height: 46px; }
        }
      `}</style>

      <article className="sls-story-card">
        <div className="sls-story-topline">
          <span>SLS Logistics</span>
          <span className="sls-story-index">India · Worldwide</span>
        </div>

        <div className="sls-story-logo">
          <img
            src="/__mockup/images/sls-logistics-logo.png"
            alt="SLS Logistics — Cargo and International Courier Services"
          />
        </div>

        <div className="sls-story-stamp" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.2" />
            <path d="M18 44h64M18 56h64M50 16c-13 10-20 22-20 34s7 24 20 34m0-68c13 10 20 22 20 34s-7 24-20 34" stroke="currentColor" strokeWidth="1" />
            <path d="M27 29c14 8 32 8 46 0M27 71c14-8 32-8 46 0" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <section className="sls-story-hero">
          <div className="sls-story-kicker">Ship with care</div>
          <h1 className="sls-story-title">From India.<br /><span>To <em>anywhere.</em></span></h1>
          <p className="sls-story-copy">
            Parcels, luggage &amp; cargo—sent with care, delivered worldwide.
          </p>
        </section>

        <div className="sls-story-route" aria-label="Shipping from India worldwide">
          INDIA <span>↗</span> WORLDWIDE
        </div>

        <footer className="sls-story-footer">
          <div className="sls-story-cta-label">Need a delivery? Let’s talk.</div>
          <a
            className="sls-story-cta"
            href="https://wa.me/918099261113"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with SLS Logistics on WhatsApp at plus 91 80992 61113"
          >
            <span className="sls-story-wa" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 8.2c.3-.4.6-.3.9-.1l.8 1.4c.1.2.1.4 0 .6l-.5.6c.6 1.2 1.4 2 2.6 2.6l.6-.5c.2-.1.4-.1.6 0l1.4.8c.2.2.3.5.1.8-.4.7-1.1 1-1.8.9-2.5-.4-5.3-3.2-5.7-5.7-.1-.6.3-1.3 1-1.4Z" fill="currentColor" />
              </svg>
            </span>
            <span className="sls-story-cta-text">
              <span>Chat on WhatsApp</span>
              <small>+91 80992 61113</small>
            </span>
            <span className="sls-story-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="sls-story-caption">Door-to-door international courier service</div>
        </footer>
      </article>
    </main>
  );
}
