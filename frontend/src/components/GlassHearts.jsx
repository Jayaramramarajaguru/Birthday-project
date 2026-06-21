export default function GlassHearts({ count = 8 }) {
  const hearts = [...Array(count)].map((_, i) => {
    const side = i % 2 === 0 ? "left" : "right"
    const size = 32 + Math.round(Math.random() * 36)
    const offset = 2 + Math.random() * 12
    const top = (100 / count) * i + Math.random() * 6
    const delay = Math.random() * 6
    const duration = 7 + Math.random() * 6
    const drift = 14 + Math.random() * 22

    return { side, size, offset, top, delay, duration, drift, key: i }
  })

  return (
    <div className="glass-hearts-field">
      {hearts.map((h) => (
        <svg
          key={h.key}
          className="glass-heart"
          viewBox="0 0 32 29"
          style={{
            position: "absolute",
            [h.side]: `${h.offset}%`,
            top: `${h.top}%`,
            width: `${h.size}px`,
            height: `${h.size * 0.9}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s, ${h.duration * 1.6}s`,
            "--drift": `${h.drift}px`,
          }}
        >
          <defs>
            <linearGradient id={`heartGrad${h.key}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="45%" stopColor="rgba(255,120,170,0.35)" />
              <stop offset="100%" stopColor="rgba(255,60,120,0.25)" />
            </linearGradient>
          </defs>
          <path
            d="M16 28.5 C 16 28.5 0 18.5 0 8.8 C 0 3.5 4.2 0 8.6 0 C 11.8 0 14.4 1.8 16 4.6 C 17.6 1.8 20.2 0 23.4 0 C 27.8 0 32 3.5 32 8.8 C 32 18.5 16 28.5 16 28.5 Z"
            fill={`url(#heartGrad${h.key})`}
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.6"
          />
        </svg>
      ))}

      <style>{`
        .glass-hearts-field {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
          perspective: 800px;
        }

        .glass-heart {
          display: block;
          transform-style: preserve-3d;
          animation-name: heartFloat3D, heartPulseGlow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 6px 14px rgba(255, 60, 120, 0.25));
          backdrop-filter: blur(2px);
        }

        @keyframes heartFloat3D {
          0% {
            transform: translateY(0) translateX(0) rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: translateY(-18px) translateX(calc(var(--drift) * 0.4)) rotateY(15deg) rotateX(8deg);
          }
          50% {
            transform: translateY(-4px) translateX(var(--drift)) rotateY(-10deg) rotateX(-6deg);
          }
          75% {
            transform: translateY(-22px) translateX(calc(var(--drift) * 0.3)) rotateY(8deg) rotateX(10deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotateY(0deg) rotateX(0deg);
          }
        }

        @keyframes heartPulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(255, 90, 150, 0.45)) brightness(1);
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(255, 110, 170, 0.85)) brightness(1.15);
          }
        }

        @media (max-width: 1024px) {
          .glass-heart {
            opacity: 0.55;
            transform: scale(0.75);
          }
        }
      `}</style>
    </div>
  )
}
