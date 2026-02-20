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
              From consumption to <span style={{ color: t.terracotta, fontStyle: "italic" }}>active practice</span>
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
              Action Paths transforms Gotcha4Life into an engaged, active learning platform — reducing the barrier to
              mental fitness and making practice as quick and accessible as a game.
            </p>
            <SketchUnderline width={100} color={t.terracottaLight} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
