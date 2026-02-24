import { FadeIn, SectionHeading, MetricCard } from "../components";
import { TRANSITION } from "../theme";

export default function Metrics({ t, containerStyle }) {
  return (
    <section style={{ background: t.cream, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading
            number="06"
            title="Measuring Success"
            subtitle="KPIs designed to validate that the interactive format meets user needs and supports habit formation."
            t={t}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <MetricCard
              label="Conversion to Completion"
              value="+25%"
              description="Target completion rate for Action Paths. The primary signal that users find the interactive format engaging and worthwhile."
              accent={t.terracotta}
              t={t}
            />
            <MetricCard
              label="Repeat Usage (L7)"
              value="L7 ↑"
              description="Active days in a 7-day period. Validates that shorter, accessible reps drive habit formation."
              accent={t.sage}
              t={t}
            />
            <MetricCard
              label="Content Heatmaps"
              value="Drop-off"
              description="Tracking exact points where users disengage — enabling continuous optimization of content and interaction design."
              accent={t.amber}
              t={t}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
