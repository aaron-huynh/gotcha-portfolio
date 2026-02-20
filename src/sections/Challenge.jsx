import { FadeIn, SectionHeading } from "../components";
import problemImage from "../images/problemimage.png";
import { TRANSITION } from "../theme";

export default function Challenge({ t, containerStyle }) {
  const cards = [
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke={t.terracotta} strokeWidth="1.5" />
          <path d="M12 8V12L15 15" stroke={t.terracotta} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ),
      title: "Contextual Barriers",
      text: "Users can't engage with audio/video in public spaces, noisy environments, or areas with poor connectivity — exactly where they might need support most.",
    },
    {
      icon: (
        <>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={t.terracotta} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke={t.terracotta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke={t.terracotta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
      title: "Cognitive Load",
      text: "Video is inherently passive. For complex emotional concepts, users exhibit low retention and completion rates as mere observers rather than active participants.",
    },
  ];

  return (
    <section style={{ background: t.warmWhite, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading
            number="01"
            title="The Challenge"
            subtitle="Video-only content creates friction for the users who need mental fitness most."
            t={t}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  flex: "1 1 340px",
                  background: `linear-gradient(135deg, ${t.cream}, ${t.blush}55)`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: `1px solid ${t.sand}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{card.icon}</svg>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, margin: 0, color: t.charcoal }}>
                    {card.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: t.warmGray, margin: 0, lineHeight: 1.6 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <img src={problemImage} alt="Challenge diagram" style={{ width: "100%", borderRadius: 16, objectFit: "contain" }} />
        </FadeIn>
      </div>
    </section>
  );
}
