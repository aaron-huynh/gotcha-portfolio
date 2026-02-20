export default function SectionHeading({ number, title, subtitle, t }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            background: t.terracotta,
            borderRadius: 20,
            padding: "4px 14px",
            letterSpacing: "0.02em",
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            color: t.charcoal,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: t.warmGray,
            margin: 0,
            paddingLeft: 52,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
