import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#fff",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.1,
        animation: `twinkle ${2 + Math.random() * 4}s ${Math.random() * 4}s ease-in-out infinite`,
      });
      container.appendChild(star);
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "4rem 2rem",
      position: "relative",
      overflow: "hidden",
      background: "#0a0a0f",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.5); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes orbit {
          0%, 100% { transform: translate(0,0) rotate(-5deg); }
          25%       { transform: translate(-12px,16px) rotate(5deg); }
          50%       { transform: translate(8px,24px) rotate(-3deg); }
          75%       { transform: translate(-6px,8px) rotate(6deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .nf-btn-primary:hover { opacity: 0.85; transform: translateY(-2px) scale(1.02); }
        .nf-btn-ghost:hover   { background: rgba(255,255,255,0.1) !important; transform: translateY(-2px); }
        .nf-link:hover        { color: rgba(255,255,255,0.7) !important; }
      `}</style>

      {/* Stars */}
      <div ref={starsRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(120,80,255,0.06) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(120,80,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />

      {/* Glow orbs */}
      <div style={{ position:"absolute", width:320, height:320, borderRadius:"50%", background:"#7c3aed", opacity:0.18, top:-80, left:-80, filter:"blur(60px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:240, height:240, borderRadius:"50%", background:"#d85a30", opacity:0.14, bottom:-60, right:-60, filter:"blur(60px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:180, height:180, borderRadius:"50%", background:"#0ea5e9", opacity:0.10, top:"40%", left:"60%", filter:"blur(60px)", pointerEvents:"none" }} />

      {/* Astronaut icon */}
      <div style={{ position:"absolute", right:"8%", top:"12%", opacity:0.55, animation:"orbit 12s ease-in-out infinite", zIndex:1 }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="22" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <circle cx="36" cy="30" r="13" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <rect x="28" y="43" width="16" height="10" rx="5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <circle cx="36" cy="29" r="7" fill="rgba(120,80,255,0.25)" stroke="rgba(160,130,255,0.4)" strokeWidth="0.5"/>
          <circle cx="34" cy="28" r="2" fill="rgba(255,255,255,0.4)"/>
          <line x1="20" y1="36" x2="14" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="52" y1="36" x2="58" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* 404 */}
      <h1 style={{
        fontSize: "clamp(110px, 20vw, 170px)",
        fontWeight: 800,
        lineHeight: 0.9,
        letterSpacing: "-8px",
        color: "transparent",
        WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
        animation: "floatY 5s ease-in-out infinite",
        userSelect: "none",
        position: "relative",
        zIndex: 2,
        margin: 0,
      }}>
        4
        <span style={{
          color: "transparent",
          WebkitTextStroke: 0,
          background: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 28px rgba(249,115,22,0.5))",
        }}>0</span>
        4
      </h1>

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "6px 14px", borderRadius: 999,
        border: "0.5px solid rgba(249,115,22,0.4)",
        background: "rgba(249,115,22,0.08)",
        color: "#fb923c", fontSize: 12, fontWeight: 500,
        letterSpacing: "0.08em", textTransform: "uppercase",
        margin: "1.25rem 0 1rem", position: "relative", zIndex: 2,
      }}>
        <div style={{ width:6, height:6, borderRadius:"50%", background:"#f97316", animation:"blink 1.5s ease-in-out infinite" }} />
        Lạc đường trong vũ trụ
      </div>

      <h2 style={{ fontSize: "clamp(20px, 4vw, 30px)", fontWeight: 700, color: "#fff", textAlign: "center", letterSpacing: "-0.5px", position: "relative", zIndex: 2 }}>
        Trang không tìm thấy
      </h2>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: 340, lineHeight: 1.7, margin: "0.75rem 0 2rem", position: "relative", zIndex: 2 }}>
        Có vẻ như bạn đã lạc vào khoảng không gian trống. Đường dẫn này không tồn tại hoặc đã bị dời đi nơi khác.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 2 }}>
        <button className="nf-btn-primary" onClick={() => navigate("/")} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "13px 26px",
          background: "linear-gradient(135deg, #f97316, #ec4899)",
          color: "#fff", border: "none", borderRadius: 12,
          fontSize: 14, fontWeight: 500, fontFamily: "inherit",
          cursor: "pointer", transition: "opacity 0.18s, transform 0.14s",
        }}>
          🏠 Về trang chủ
        </button>
        <button className="nf-btn-ghost" onClick={() => navigate(-1)} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "13px 26px",
          background: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.7)",
          border: "0.5px solid rgba(255,255,255,0.12)",
          borderRadius: 12, fontSize: 14, fontWeight: 500,
          fontFamily: "inherit", cursor: "pointer",
          transition: "background 0.18s, transform 0.14s",
        }}>
          ← Quay lại
        </button>
      </div>

      {/* Divider + links */}
      <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.1)", margin: "2.5rem auto 1.5rem", position: "relative", zIndex: 2 }} />
      <div style={{ display: "flex", gap: 24, position: "relative", zIndex: 2 }}>
        {["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"].map((label, i) => (
          <span key={i} className="nf-link" onClick={() => navigate("/")} style={{
            fontSize: 13, color: "rgba(255,255,255,0.3)",
            cursor: "pointer", transition: "color 0.15s",
          }}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default NotFound;