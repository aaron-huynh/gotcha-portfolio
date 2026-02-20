export function WavyDivider({ color, flip = false }) {
  return (
    <div style={{ transform: flip ? "scaleY(-1)" : "none", marginTop: -2, marginBottom: -2, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" fill="none" style={{ width: "100%", display: "block" }}>
        <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill={color} />
      </svg>
    </div>
  );
}

export function SketchUnderline({ color, width = 120 }) {
  return (
    <svg width={width} height="12" viewBox={`0 0 ${width} 12`} fill="none" style={{ display: "block", margin: "8px auto 0" }}>
      <path
        d={`M2 8C${width * 0.15} 3 ${width * 0.35} 10 ${width * 0.5} 6C${width * 0.65} 2 ${width * 0.85} 9 ${width - 2} 5`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ opacity: 0.7 }}
      />
    </svg>
  );
}

export function LeafDecoration({ style = {}, size = 60, flip = false, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ ...style, transform: flip ? "scaleX(-1)" : "none", opacity: 0.35 }}
    >
      <path d="M30 55C30 55 10 40 10 25C10 15 20 8 30 5C40 8 50 15 50 25C50 40 30 55 30 55Z" stroke={color} strokeWidth="1.5" />
      <path d="M30 5V55" stroke={color} strokeWidth="1" />
      <path d="M30 20C22 18 15 22 15 28" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M30 30C38 28 45 32 45 38" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M30 40C24 38 18 42 20 47" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
