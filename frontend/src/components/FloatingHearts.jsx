export default function FloatingHearts() {
  const items = [...Array(22)].map((_, i) => ({
    emoji: i % 3 === 0 ? "🌹" : i % 5 === 0 ? "🌸" : "❤️",
    left: `${(i * 4.7) % 100}%`,
    delay: `${(i * 0.4) % 6}s`,
    duration: `${6 + (i % 5)}s`,
    size: i % 4 === 0 ? "22px" : i % 3 === 0 ? "16px" : "14px",
    opacity: 0.3 + (i % 4) * 0.12,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="float-item"
          style={{
            position: "absolute",
            left: item.left,
            bottom: "-30px",
            fontSize: item.size,
            opacity: item.opacity,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.emoji}
        </span>
      ))}

      <style>{`
        .float-item {
          animation: floatUp linear infinite;
          filter: drop-shadow(0 0 4px rgba(180,0,30,0.4));
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.1);
            opacity: 0.6;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}