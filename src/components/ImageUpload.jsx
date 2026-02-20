import { useState, useRef } from "react";

export default function ImageUpload({ label, aspect = "16/9", t }) {
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const r = new FileReader();
      r.onload = (ev) => setImage(ev.target.result);
      r.readAsDataURL(file);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      style={{
        aspectRatio: aspect,
        borderRadius: 16,
        border: image ? "none" : `2px dashed ${t.terracottaLight}`,
        background: image ? "transparent" : `${t.blush}66`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
      }}
    >
      <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} style={{ display: "none" }} />
      {image ? (
        <>
          <img src={image} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              background: "rgba(255,255,255,0.9)",
              borderRadius: 8,
              padding: "6px 12px",
              fontSize: 12,
              fontFamily: "'DM Sans', sans-serif",
              color: "#6B6560",
              backdropFilter: "blur(4px)",
            }}
          >
            Click to replace
          </div>
        </>
      ) : (
        <>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="8" width="28" height="20" rx="3" stroke={t.terracottaLight} strokeWidth="1.5" />
            <circle cx="13" cy="16" r="3" stroke={t.terracottaLight} strokeWidth="1.5" />
            <path d="M8 24L14 19L18 22L24 16L28 20" stroke={t.terracottaLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 4V8M18 4L15 6.5M18 4L21 6.5" stroke={t.terracottaLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: t.terracottaLight, marginTop: 8, fontWeight: 500 }}>
            {label}
          </span>
        </>
      )}
    </div>
  );
}
