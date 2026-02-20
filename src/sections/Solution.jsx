import { FadeIn, SectionHeading, FeaturePill } from "../components";
import screen1 from "../images/screen1.png";
import screen2 from "../images/screen2.png";
import screen3 from "../images/screen3.png";
import { TRANSITION } from "../theme";

export default function Solution({ t, containerStyle }) {
  return (
    <section style={{ background: t.cream, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading
            number="02"
            title="The Solution: Action Paths"
            subtitle="Text-led, interactive learning modules inspired by Brilliant.org — designed to lower barriers and promote active recall."
            t={t}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <FeaturePill icon="⚡" title="Micro-Interactions" desc="Short, scenario-based questions (2 min max) that convert passive watching into immediate decision-making." t={t} />
            <FeaturePill icon="🧩" title="Progressive Disclosure" desc="Information revealed in small, contextual chunks — mitigating overwhelm and maintaining user focus." t={t} />
            <FeaturePill icon="✨" title="Instant Feedback Loops" desc="Immediate, science-backed justification for user choices — reinforcing learning and building confidence." t={t} />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <img src={screen1} alt="Prototype screen 1" style={{ width: "100%", borderRadius: 16, aspectRatio: "9/16", objectFit: "cover" }} />
            <img src={screen2} alt="Prototype screen 2" style={{ width: "100%", borderRadius: 16, aspectRatio: "9/16", objectFit: "cover" }} />
            <img src={screen3} alt="Prototype screen 3" style={{ width: "100%", borderRadius: 16, aspectRatio: "9/16", objectFit: "cover" }} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
