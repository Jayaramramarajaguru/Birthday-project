import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import GlassHearts from "../components/GlassHearts"
import uyireycover from "../../public/music/uyirey-cover.jpg"

export default function Music() {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration)
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${String(sec).padStart(2, "0")}`
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    if (audioRef.current) audioRef.current.currentTime = ratio * duration
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center overflow-y-auto overflow-x-hidden px-6 relative"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      {/* GlassHearts is rendered OUTSIDE the re-rendering subtree — its own isolated div */}
      <GlassHearts  />

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      <div className="w-full flex flex-col items-center pt-20 pb-10 relative z-10 max-w-sm mx-auto">

        <h1
          className="text-5xl font-bold mb-8 text-white text-center"
          style={{
            fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
            textShadow: "0 0 20px rgba(255,50,80,0.5)"
          }}
        >
          Our Song ❤️
        </h1>

        {/* Vinyl — CSS class controls spin, NOT inline style */}
        <div className="relative mb-6">
          <div
            className={`vinyl-disc w-56 h-56 rounded-full flex items-center justify-center relative ${playing ? "vinyl-spinning" : ""}`}
          >
            {[60, 80, 100, 115].map(size => (
              <div
                key={size}
                className="absolute rounded-full"
                style={{ width: `${size}px`, height: `${size}px`, border: "1px solid rgba(255,255,255,0.06)" }}
              />
            ))}
            <div
              className="w-20 h-20 rounded-full overflow-hidden z-10"
              style={{ border: "3px solid #c0001a", boxShadow: "0 0 20px rgba(180,0,20,0.6)" }}
            >
              <img src={uyireycover} alt="Uyirey" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Needle arm */}
          <div
            className="absolute"
            style={{
              right: "-28px", top: "8px",
              width: "3px", height: "72px",
              background: "linear-gradient(180deg, #888, #555)",
              borderRadius: "2px",
              transformOrigin: "top center",
              transform: "rotate(25deg)",
              boxShadow: "0 0 8px rgba(0,0,0,0.5)"
            }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{ background: "#999", boxShadow: "0 0 6px rgba(0,0,0,0.5)", marginLeft: "-1px" }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">Uyirey ❤️</h2>
        <p className="text-red-300 text-sm mb-5 text-center">Every heartbeat reminds me of you ❤️</p>

        {/* Progress bar — isolated so re-render doesn't touch anything else */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
          formatTime={formatTime}
        />

        {/* Controls */}
        <div className="flex items-center gap-6 mb-6">
          <button
            onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0 }}
            className="text-white text-2xl opacity-70 hover:opacity-100"
          >
            ⏮
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl"
            style={{
              background: "linear-gradient(135deg, #c0001a, #ff3366)",
              boxShadow: "0 0 20px rgba(192,0,26,0.5)"
            }}
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button className="text-white text-2xl opacity-70 hover:opacity-100">⏭</button>
        </div>

        <audio
          ref={audioRef}
          src="/music/Uyirey.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setPlaying(false)}
        />

        <button
          onClick={() => navigate("/cake")}
          className="mt-2 px-8 py-3 text-white font-semibold rounded-full text-base tracking-wide"
          style={{
            background: "linear-gradient(135deg, #7a0000, #b0001a)",
            border: "1px solid rgba(255,80,100,0.3)",
            boxShadow: "0 4px 20px rgba(120,0,20,0.5)"
          }}
        >
          Continue ❤️
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .vinyl-disc {
          background: radial-gradient(circle, #2a2a2a 0%, #111 40%, #1a1a1a 60%, #0a0a0a 100%);
          box-shadow: 0 0 0 3px #333, 0 0 0 6px #1a1a1a, 0 20px 60px rgba(0,0,0,0.8);
          /* animation is purely CSS — React state never touches this property */
          animation: none;
          will-change: transform;
        }

        .vinyl-spinning {
          animation: vinylSpin 3s linear infinite !important;
        }

        @keyframes vinylSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

/* Isolated component — only this re-renders every second, not the whole page */
function ProgressBar({ currentTime, duration, onSeek, formatTime }) {
  return (
    <>
      <div
        className="w-full h-1.5 rounded-full mb-2 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={onSeek}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: duration ? `${(currentTime / duration) * 100}%` : "0%",
            background: "linear-gradient(90deg, #c0001a, #ff3366)"
          }}
        />
      </div>
      <div className="flex justify-between w-full text-xs text-red-300 mb-5">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </>
  )
}