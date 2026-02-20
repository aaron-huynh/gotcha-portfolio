export default function ThemeToggle({ dark, setDark, t }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1000,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: `1.5px solid ${t.sand}`,
        background: t.warmWhite,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 4px 16px ${dark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}`,
        transition: "all 0.35s ease",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div style={{ position: "relative", width: 22, height: 22 }}>
        {/* Sun icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: dark ? 1 : 0,
            transform: dark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
            transition: "all 0.4s ease",
          }}
        >
          <circle cx="12" cy="12" r="5" stroke={t.amber} strokeWidth="1.8" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"
            stroke={t.amber}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        {/* Moon icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: dark ? 0 : 1,
            transform: dark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
            transition: "all 0.4s ease",
          }}
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke={t.charcoal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}
