import { FadeIn, SectionHeading, CompareRow } from "../components";
import { TRANSITION } from "../theme";

const ROWS = [
  ["User Role", "Passive Observer", "Active Participant"],
  ["Learning Pace", "Fixed (Video Speed)", "Self-Paced"],
  ["Accessibility", "Needs audio & strong signal", "Silent, low-data friendly"],
  ["Data Usage", "High (streaming)", "Low (text & SVGs)"],
  ["Completion Time", "5–10 min", "2–3 min"],
];

export default function Comparison({ t, containerStyle }) {
  return (
    <section style={{ background: t.warmWhite, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading
            number="03"
            title="Before & After"
            subtitle="How Action Paths shift the user experience from consumption to participation."
            t={t}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: t.cream, borderRadius: 16, overflow: "hidden", border: `1px solid ${t.sand}`, transition: TRANSITION }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "14px 16px", borderBottom: `2px solid ${t.sand}` }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: t.warmGray }}>Feature</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: t.warmGray, textAlign: "center" }}>Video (Before)</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: t.sageDark, textAlign: "center" }}>Action Paths ✓</span>
            </div>
            {ROWS.map((row, i) => (
              <CompareRow key={i} feature={row[0]} before={row[1]} after={row[2]} index={i} t={t} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
