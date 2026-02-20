export function MetricCard({ label, value, description, accent, t }) {
  return (
    <div
      style={{
        background: t.warmWhite,
        borderRadius: 16,
        padding: "28px 24px",
        flex: "1 1 260px",
        border: `1px solid ${t.sand}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: accent, borderRadius: "16px 16px 0 0" }} />
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, color: accent, marginBottom: 4 }}>{value}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: t.charcoal, marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.warmGray, lineHeight: 1.5 }}>{description}</div>
    </div>
  );
}

export function CompareRow({ feature, before, after, index, t }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 1fr",
        gap: 2,
        background: index % 2 === 0 ? `${t.sand}33` : "transparent",
        borderRadius: 8,
        padding: "14px 16px",
        alignItems: "center",
      }}
    >
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: t.charcoal }}>{feature}</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.warmGray, textAlign: "center" }}>{before}</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.sageDark, fontWeight: 600, textAlign: "center" }}>{after}</span>
    </div>
  );
}

export function PhaseCard({ phase, title, description, color, t }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Fraunces', serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {phase}
        </div>
        <div style={{ width: 2, height: 40, background: `${color}33`, marginTop: 4 }} />
      </div>
      <div style={{ paddingTop: 4 }}>
        <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: t.charcoal, margin: "0 0 6px" }}>{title}</h4>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: t.warmGray, margin: 0, lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}

export function FeaturePill({ icon, title, desc, t }) {
  return (
    <div
      style={{
        background: t.warmWhite,
        borderRadius: 16,
        padding: "24px 20px",
        flex: "1 1 220px",
        border: `1px solid ${t.sand}`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 8px 24px ${t.terracotta}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600, color: t.charcoal, margin: "0 0 6px" }}>{title}</h4>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.warmGray, margin: 0, lineHeight: 1.5 }}>{desc}</p>
    </div>
  );
}
