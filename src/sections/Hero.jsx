import { FadeIn, LeafDecoration, SketchUnderline } from "../components";

const BTN_BASE = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  fontWeight: 600,
  padding: "12px 24px",
  borderRadius: 12,
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
};

export default function Hero({ t, dark, scrollY, containerStyle }) {
  return (
    <header
      style={{
        background: `linear-gradient(170deg, ${t.blush} 0%, ${t.cream} 50%, ${t.sand}55 100%)`,
        paddingTop: "clamp(60px, 12vh, 100px)",
        paddingBottom: 60,
        position: "relative",
        overflow: "hidden",
        transition: "background 0.4s ease",
      }}
    >
      <LeafDecoration style={{ position: "absolute", top: 30, left: "5%" }} size={70} color={t.sage} />
      <LeafDecoration style={{ position: "absolute", top: 60, right: "8%" }} size={50} flip color={t.sage} />
      <LeafDecoration style={{ position: "absolute", bottom: 20, left: "15%" }} size={40} color={t.sage} />

      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.amberLight}33, transparent 70%)`,
          top: -60,
          right: -80,
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.sage}22, transparent 70%)`,
          bottom: -40,
          left: -40,
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: t.terracotta,
              background: `${t.terracotta}15`,
              padding: "6px 16px",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            Product Case Study
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: t.charcoal,
              margin: "0 0 8px",
              maxWidth: 650,
            }}
          >
            Making Mental Fitness{" "}
            <span style={{ color: t.terracotta, fontStyle: "italic" }}>Accessible Anywhere</span>
          </h1>
          <SketchUnderline width={180} color={t.terracotta} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 19px)",
              lineHeight: 1.6,
              color: t.warmGray,
              maxWidth: 560,
              margin: "24px 0 0",
            }}
          >
            Gotcha4Life "Mental Fitness Gym" — designing interactive learning modules as an additional way for
            users to practise mental fitness, wherever and whenever suits them.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
            {[
              { label: "Role", value: "Junior Product Manager" },
              { label: "Focus", value: "Concept & Strategy" },
              { label: "Outcome", value: "+25% Completion Target" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: t.warmGray }}>{item.label}</span>
                <span
                  style={{
                    fontWeight: 600,
                    color: t.charcoal,
                    background: t.warmWhite,
                    padding: "4px 12px",
                    borderRadius: 8,
                    border: `1px solid ${t.sand}`,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 28 }}>
            <a
              href="https://docs.google.com/document/d/1PYZ08mI5QyFJBjEpzy7sZr8J_-sS_wt6YhR5GeyhEQ8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...BTN_BASE, color: "#fff", background: t.terracotta, boxShadow: `0 4px 12px ${t.terracotta}33` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = dark ? t.sand : "#2D2A26"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = t.terracotta; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M5 9h6M5 11.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Read Full Report
            </a>
            <a
              href="mailto:ahuynhmarist@gmail.com"
              style={{ ...BTN_BASE, color: t.terracotta, background: `${t.terracotta}11`, border: `1.5px solid ${t.terracotta}33` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${t.terracotta}22`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${t.terracotta}11`; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M2 4l6 4.5L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Me
            </a>
            <a
              href="https://docs.google.com/document/d/1orlO4Q3xdVLyPR6BpSJYo7GImisoSZZx2Yz7gXgZEhs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...BTN_BASE, color: t.terracotta, background: `${t.terracotta}11`, border: `1.5px solid ${t.terracotta}33` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${t.terracotta}22`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${t.terracotta}11`; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5a3 3 0 100 6 3 3 0 000-6zM3 13.5c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Résumé
            </a>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
