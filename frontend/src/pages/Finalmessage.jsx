import { useState } from "react"
import GlassHearts from "../components/GlassHearts"
import Confetti from "react-confetti"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function LightCrackers() {
  const ringColors = [
    ["#ff5c9c", "#ffd23f", "#6fb6ff", "#ff8a3d", "#c084fc", "#4ade80", "#fff", "#ff3366"],
    ["#ffd23f", "#4ade80", "#ff5c9c", "#6fb6ff", "#fff", "#c084fc", "#ff8a3d", "#ff3366"],
    ["#6fb6ff", "#ff3366", "#ffd23f", "#4ade80", "#ff5c9c", "#fff", "#c084fc", "#ff8a3d"],
  ]

  const rings = [
    { cx: "15%",  cy: "12%", r: 55,  delay: 0,    duration: 2.4, colorSet: 0 },
    { cx: "80%",  cy: "10%", r: 60,  delay: 0.5,  duration: 2.6, colorSet: 1 },
    { cx: "50%",  cy: "18%", r: 50,  delay: 1.0,  duration: 2.2, colorSet: 2 },
    { cx: "10%",  cy: "45%", r: 48,  delay: 1.5,  duration: 2.5, colorSet: 0 },
    { cx: "88%",  cy: "40%", r: 52,  delay: 2.0,  duration: 2.3, colorSet: 1 },
    { cx: "30%",  cy: "75%", r: 56,  delay: 2.5,  duration: 2.7, colorSet: 2 },
    { cx: "70%",  cy: "70%", r: 50,  delay: 3.0,  duration: 2.4, colorSet: 0 },
    { cx: "55%",  cy: "88%", r: 45,  delay: 3.5,  duration: 2.2, colorSet: 1 },
    { cx: "22%",  cy: "30%", r: 42,  delay: 0.8,  duration: 2.6, colorSet: 2 },
    { cx: "72%",  cy: "28%", r: 58,  delay: 1.8,  duration: 2.3, colorSet: 0 },
  ]

  const dotsPerRing = 16

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 40, overflow: "hidden" }}>
      {rings.map((ring, rIdx) => {
        const colors = ringColors[ring.colorSet]
        return Array.from({ length: dotsPerRing }).map((_, dIdx) => {
          const angle = (360 / dotsPerRing) * dIdx
          const rad = (angle * Math.PI) / 180
          const dotDelay = ring.delay + (dIdx / dotsPerRing) * 0.05
          return (
            <span
              key={`${rIdx}-${dIdx}`}
              style={{
                position: "absolute",
                left: ring.cx,
                top: ring.cy,
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: colors[dIdx % colors.length],
                boxShadow: `0 0 6px 2px ${colors[dIdx % colors.length]}`,
                animationName: "ringDotFly",
                animationDuration: `${ring.duration}s`,
                animationDelay: `${dotDelay}s`,
                animationTimingFunction: "ease-out",
                animationIterationCount: "infinite",
                opacity: 0,
                "--tx": `${Math.cos(rad) * ring.r}px`,
                "--ty": `${Math.sin(rad) * ring.r}px`,
              }}
            />
          )
        })
      })}

      <style>{`
        @keyframes ringDotFly {
          0%   { opacity: 0;   transform: translate(0, 0)                              scale(0.3); }
          12%  { opacity: 1;   transform: translate(calc(var(--tx)*0.3), calc(var(--ty)*0.3)) scale(1.2); }
          55%  { opacity: 0.9; transform: translate(var(--tx), var(--ty))              scale(0.9); }
          80%  { opacity: 0.4; transform: translate(calc(var(--tx)*1.2), calc(var(--ty)*1.2)) scale(0.5); }
          100% { opacity: 0;   transform: translate(0, 0)                              scale(0.3); }
        }
      `}</style>
    </div>
  )
}

const TAMIL_POEM_LINES = [
  "சிவந்த வானமும் வியந்து பார்க்கும்",
  "செழித்த செந்தாமரை✨🥰,",
  "இவள் சிவந்த கண்ணங்களிலே",
  "கண் சிவந்தது சிகப்பு ரோஜாக்கள்🌹,",
  "இவளின் செவ்விதழ் சிரிப்பை",
  "காணவே செங்கதிரோன் விழித்து கொள்கிறான்⛅,",
  "செந்தமிழினும் இனியவள்🥰,",
  "அழகிற்கே செங்கோல் உடையவள்💕,",
  "அரிதான மலராக அகிலத்தில் பூத்தவள்💝,",
  "அறியாத என்னை அழகாக ஈர்த்தவள்🫰🏻,",
  "விண்மீன்களும் விழித்து கொண்டிருக்கிறது இவள் விழிகளை காண👀,",
  "என் விழிகளும் தவித்து கொண்டிருக்கிறது இவளின் குறுஞ்செய்திகளை காண,",
  "தொடமுடியாத தூரத்தில் இருந்தும்",
  "என் நாளை அழகாக தொடங்கி வைக்கிறாள்🫠,",
  "சொற்களில் அடங்காத அழகியவள்💖,",
  "மதிப்பிட முடியாத செல்வமவள்🥰,",
  "Online என் அற்பத விளக்காய் மாற",
  "அலாவுதின் ஜீனியாக எனக்கு",
  "கிடைத்த தேவதையவள்✨,",
  "எனக்கு வரம் தர கிடைக்கவில்லை,",
  "எனக்கே வரமாக கிடைத்தவள்...🫰🏻💕",
]

function buildSequence(lines, onDone) {
  const sequence = []
  let accumulated = ""
  lines.forEach((line, i) => {
    accumulated = accumulated ? `${accumulated}\n${line}` : line
    sequence.push(accumulated)
    sequence.push(i === lines.length - 1 ? 400 : 500)
  })
  sequence.push(onDone)
  return sequence
}

export default function FinalMessage() {
  const [showBirthday, setShowBirthday] = useState(false)

  return (
    <div
      className="min-h-screen flex flex-col items-center text-center px-6 relative overflow-y-auto overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      <GlassHearts count={8} />
      <Confetti numberOfPieces={180} recycle={true} />

      {/* Light ring crackers — non-stop */}
      <LightCrackers />

      {/* Rose background decorations */}
      <div className="rose-bg-final-left" />
      <div className="rose-bg-final-right" />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      {/* Scrollable content */}
      <div className="w-full flex flex-col items-center pt-20 pb-16 relative z-10 max-w-lg mx-auto">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-red-200 text-lg mb-6 italic"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          For My Dearest Abahaya ❤️
        </motion.p>

        {/* Speaking dots */}
        <div className="flex items-center gap-2 mb-5 justify-center">
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="text-red-300 text-sm ml-2 tracking-wide">இவன் ஜெய் பேசுகிறான்...</span>
        </div>

        {/* Tamil poem with TypeAnimation */}
        <p
          className="text-base leading-10 mb-8 text-red-100"
          style={{
            fontFamily: "'Noto Sans Tamil', 'Latha', 'Arial Unicode MS', sans-serif",
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
        >
          <TypeAnimation
            sequence={buildSequence(TAMIL_POEM_LINES, () => setShowBirthday(true))}
            wrapper="span"
            speed={75}
            style={{ whiteSpace: "pre-line", display: "inline-block" }}
            repeat={0}
            cursor={true}
          />
        </p>

        {/* Shown after poem finishes */}
        {showBirthday && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            <p
              className="text-xl text-red-300 italic mb-8"
              style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
            >
              — இவன் ஜெய் 💕
            </p>

            <div
              className="w-32 h-px mx-auto mb-8"
              style={{ background: "linear-gradient(90deg, transparent, #ff3366, transparent)" }}
            />

            <h1
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                color: "#ff3366",
                textShadow: "0 0 30px rgba(255,50,100,0.6), 0 0 60px rgba(255,50,100,0.3)"
              }}
            >
              Happy Birthday
            </h1>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                color: "#ff3366",
                textShadow: "0 0 30px rgba(255,50,100,0.6)"
              }}
            >
              Abahaya Shree ❤️
            </h2>

            <p
              className="text-2xl text-red-200 italic"
              style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
            >
              Always Yours,
            </p>
            <p
              className="text-3xl font-bold mt-1"
              style={{
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                color: "#ff3366",
                textShadow: "0 0 20px rgba(255,50,80,0.5)"
              }}
            >
              Jai ❤️
            </p>
          </motion.div>
        )}

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Noto+Sans+Tamil:wght@400;600&display=swap');

        .speaking-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #ff7eb0;
          display: inline-block;
          animation: dotBounce 1.2s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(255,120,170,0.8);
        }
        .speaking-dot:nth-child(2) { animation-delay: 0.2s; }
        .speaking-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dotBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 1; }
        }

        .rose-bg-final-left {
          position: fixed; left: -60px; bottom: -30px;
          pointer-events: none; z-index: 1;
        }
        .rose-bg-final-left::before {
          content: '🌹';
          position: absolute; font-size: 160px;
          bottom: 20px; left: 20px; opacity: 0.5;
          transform: rotate(-10deg);
          filter: drop-shadow(0 0 20px rgba(180,0,30,0.5));
        }
        .rose-bg-final-left::after {
          content: '🌹';
          position: absolute; font-size: 100px;
          bottom: 160px; left: 90px; opacity: 0.35;
          transform: rotate(15deg);
        }

        .rose-bg-final-right {
          position: fixed; right: -60px; bottom: -30px;
          pointer-events: none; z-index: 1;
        }
        .rose-bg-final-right::before {
          content: '🌹';
          position: absolute; font-size: 160px;
          bottom: 20px; right: 20px; opacity: 0.5;
          transform: rotate(10deg) scaleX(-1);
          filter: drop-shadow(0 0 20px rgba(180,0,30,0.5));
        }
        .rose-bg-final-right::after {
          content: '🌹';
          position: absolute; font-size: 100px;
          bottom: 160px; right: 90px; opacity: 0.35;
          transform: rotate(-15deg) scaleX(-1);
        }
      `}</style>
    </div>
  )
}