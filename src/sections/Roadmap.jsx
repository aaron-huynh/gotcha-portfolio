import { FadeIn, SectionHeading, ImageUpload, PhaseCard } from "../components";
import { TRANSITION } from "../theme";

export default function Roadmap({ t, containerStyle }) {
  return (
    <section style={{ background: t.warmWhite, padding: "60px 0", transition: TRANSITION }}>
      <div style={containerStyle}>
        <FadeIn>
          <SectionHeading
            number="05"
            title="Implementation Roadmap"
            subtitle="A tiered rollout designed to validate fast and scale with confidence."
            t={t}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <PhaseCard
              phase="1"
              title="MVP — Hypothesis Validation"
              description="Convert the top 3 existing video workouts into Interactive Transcripts with simple multiple-choice checks. Prove the core engagement hypothesis quickly."
              color={t.terracotta}
              t={t}
            />
            <PhaseCard
              phase="2"
              title="Iteration — Interaction Engine"
              description="Develop a custom engine supporting advanced formats: swiping, card-sorting, logic-based scenarios. Informed by Phase 1 heatmap data."
              color={t.sage}
              t={t}
            />
            <PhaseCard
              phase="3"
              title="Scale — Human Connection"
              description="Integrate 30-second intro/outro clips from Gym Buddies to maintain warmth while rolling out across the entire content library."
              color={t.amber}
              t={t}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
