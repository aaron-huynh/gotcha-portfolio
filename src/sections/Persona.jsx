import { FadeIn, SectionHeading, LeafDecoration } from "../components";
import { TRANSITION } from "../theme";

const PERSONA_DATA = [
  {
    pain: 'Only a 5-minute break in a loud lunchroom.',
    solution: 'Completes a mental fitness "rep" discreetly — no headphones needed.',
  },
  {
    pain: "Spotty 4G makes video streaming unreliable.",
    solution: "Text-based interaction loads instantly with minimal data usage.",
  },
];

export default function Persona({ t, containerStyle }) {
  return (
    <section style={{ background: t.cream, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading number="04" title="Designed for Real Lives" t={t} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              background: `linear-gradient(135deg, ${t.warmWhite}, ${t.blush}44)`,
              borderRadius: 20,
              padding: "clamp(24px, 4vw, 40px)",
              border: `1px solid ${t.sand}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LeafDecoration style={{ position: "absolute", top: 12, right: 16 }} size={45} flip color={t.sage} />

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.amber}, ${t.terracottaLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Fraunces', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                B
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 600, margin: 0, color: t.charcoal }}>
                  Meet "Busy Ben"
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.warmGray, margin: 0 }}>
                  32 · Rural Tradesman · Limited time & connectivity
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PERSONA_DATA.map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: t.terracotta, fontSize: 16, lineHeight: "22px", flexShrink: 0 }}>✕</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: t.warmGray, lineHeight: 1.5 }}>{item.pain}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: t.sage, fontSize: 16, lineHeight: "22px", flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: t.sageDark, fontWeight: 500, lineHeight: 1.5 }}>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
