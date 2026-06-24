import { memo } from "react"

const GlassHearts = memo(function GlassHearts({ count = 8 }) {
  const hearts = [...Array(count)].map((_, i) => {
    const size = 28 + Math.round(Math.random() * 32)
    const left = 2 + (i * 11.5 + Math.random() * 8) % 94
    const delay = Math.random() * 6
    const duration = 8 + Math.random() * 7
    const swayAmount = 12 + Math.random() * 18
    const startY = 20 + Math.random() * 70

    return { size, left, delay, duration, swayAmount, startY, key: i }
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
            left: `${h.left}%`,
            top: `${h.startY}%`,
            width: `${h.size}px`,
            height: `${h.size * 0.9}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            "--sway": `${h.swayAmount}px`,
          }}
        >
          <defs>
            <linearGradient id={`hg${h.key}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.50)" />
              <stop offset="45%"  stopColor="rgba(255,120,170,0.32)" />
              <stop offset="100%" stopColor="rgba(255,60,120,0.22)"  />
            </linearGradient>
          </defs>
          <path
            d="M16 28.5 C 16 28.5 0 18.5 0 8.8 C 0 3.5 4.2 0 8.6 0 C 11.8 0 14.4 1.8 16 4.6 C 17.6 1.8 20.2 0 23.4 0 C 27.8 0 32 3.5 32 8.8 C 32 18.5 16 28.5 16 28.5 Z"
            fill={`url(#hg${h.key})`}
            stroke="rgba(255,255,255,0.38)"
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
        }

        .glass-heart {
          animation-name: balloonFloat, heartSway;
          animation-timing-function: ease-in-out, ease-in-out;
          animation-iteration-count: infinite, infinite;
          animation-direction: normal, alternate;
          filter: drop-shadow(0 4px 10px rgba(255, 60, 120, 0.22));
        }

        @keyframes balloonFloat {
          0%   { transform: translateY(0px);    opacity: 0;   }
          8%   { opacity: 0.75; }
          88%  { opacity: 0.65; }
          100% { transform: translateY(-110vh); opacity: 0;   }
        }

        @keyframes heartSway {
          0%   { margin-left: 0px; }
          25%  { margin-left: calc(var(--sway) * 0.5); }
          50%  { margin-left: var(--sway); }
          75%  { margin-left: calc(var(--sway) * 0.3); }
          100% { margin-left: 0px; }
        }

        @media (max-width: 1024px) {
          .glass-heart { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
})

export default GlassHearts