import { FadeIn, LeafDecoration, SketchUnderline } from "../components";
import { TRANSITION } from "../theme";

export default function Conclusion({ t, containerStyle }) {
  return (
    <section style={{ background: t.warmWhite, padding: "60px 0 80px", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              background: `linear-gradient(135deg, ${t.terracotta}11, ${t.blush}66, ${t.amberLight}22)`,
              borderRadius: 20,
              padding: "clamp(32px, 5vw, 48px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: `1px solid ${t.terracottaLight}33`,
            }}
          >
            <LeafDecoration style={{ position: "absolute", top: 16, left: 20 }} size={40} color={t.sage} />
            <LeafDecoration style={{ position: "absolute", bottom: 16, right: 20 }} size={40} flip color={t.sage} />

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(22px, 4vw, 30px)",
                fontWeight: 700,
                color: t.charcoal,
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              More ways to <span style={{ color: t.terracotta, fontStyle: "italic" }}>practise mental fitness</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(15px, 2.2vw, 17px)",
                color: t.warmGray,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              Action Paths gives Gotcha4Life users an additional, flexible way to engage with mental fitness —
              a convenient option they can choose whenever and wherever it suits them.
            </p>
            <SketchUnderline width={100} color={t.terracottaLight} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
