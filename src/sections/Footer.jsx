import { LIGHT, TRANSITION } from "../theme";

export default function Footer({ dark }) {
  return (
    <footer style={{ background: dark ? "#111" : LIGHT.charcoal, padding: "40px 0 32px", transition: TRANSITION }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", textAlign: "center" }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: LIGHT.sand, margin: "0 0 16px" }}>
          Made by Aaron
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 20, marginBottom: 20 }}>
          <a
            href="mailto:ahuynhmarist@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: `${LIGHT.sand}aa`,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = LIGHT.terracottaLight)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${LIGHT.sand}aa`)}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 4l6 4.5L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ahuynhmarist@gmail.com
          </a>
          <a
            href="https://docs.google.com/document/d/1orlO4Q3xdVLyPR6BpSJYo7GImisoSZZx2Yz7gXgZEhs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: `${LIGHT.sand}aa`,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = LIGHT.terracottaLight)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${LIGHT.sand}aa`)}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M5 9h6M5 11.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Résumé
          </a>
        </div>

        <div style={{ width: 40, height: 1, background: `${LIGHT.sand}33`, margin: "0 auto 16px" }} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: `${LIGHT.sand}55`, margin: 0 }}>
          Product Case Study
        </p>
      </div>
    </footer>
  );
}
