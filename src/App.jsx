import { useState, useEffect, useRef } from "react";
import { LIGHT, DARK, TRANSITION } from "./theme";
import { ThemeToggle, WavyDivider } from "./components";
import { Hero, Challenge, Solution, Comparison, Persona, Roadmap, Metrics, Conclusion, Footer } from "./sections";

const snapChild = { scrollSnapAlign: "start" };

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [dark, setDark] = useState(false);
  const scrollRef = useRef(null);
  const t = dark ? DARK : LIGHT;

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const el = scrollRef.current;
    const handleScroll = () => setScrollY(el?.scrollTop ?? 0);
    el?.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    maxWidth: 820,
    margin: "0 auto",
    padding: "0 clamp(20px, 5vw, 48px)",
  };

  return (
    <div
      ref={scrollRef}
      style={{
        background: t.cream,
        height: "100vh",
        color: t.charcoal,
        overflowX: "hidden",
        overflowY: "auto",
        scrollSnapType: "y proximity",
        scrollBehavior: "smooth",
        transition: TRANSITION,
      }}
    >
      <ThemeToggle dark={dark} setDark={setDark} t={t} />

      <div style={snapChild}>
        <Hero t={t} dark={dark} scrollY={scrollY} containerStyle={containerStyle} />
        <WavyDivider color={t.warmWhite} />
      </div>

      <div style={snapChild}>
        <Challenge t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.cream} />
      </div>

      <div style={snapChild}>
        <Solution t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.warmWhite} />
      </div>

      <div style={snapChild}>
        <Comparison t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.cream} />
      </div>

      <div style={snapChild}>
        <Persona t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.warmWhite} />
      </div>

      <div style={snapChild}>
        <Roadmap t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.cream} />
      </div>

      <div style={snapChild}>
        <Metrics t={t} containerStyle={containerStyle} />
        <WavyDivider color={t.warmWhite} />
      </div>

      <div style={snapChild}>
        <Conclusion t={t} containerStyle={containerStyle} />
      </div>

      <div style={snapChild}>
        <Footer dark={dark} />
      </div>
    </div>
  );
}
