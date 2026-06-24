// import { useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"

// const reasons = [
//   "Your smile makes my day ❤️",
//   "You are kind and caring ❤️",
//   "Talking to you feels like home ❤️",
//   "You inspire me ❤️",
//   "You make ordinary days special ❤️",
//   "You are beautiful inside and out ❤️",
//   "You always stay in my thoughts ❤️",
//   "You make me laugh ❤️",
//   "You understand me ❤️",
//   "You are unique ❤️",
//   "You are strong ❤️",
//   "You are genuine ❤️",
//   "You make life brighter ❤️",
//   "You spread positivity ❤️",
//   "You are unforgettable ❤️",
//   "You are special ❤️",
//   "You are my favorite person ❤️",
//   "You make me happy ❤️",
//   "You deserve the best ❤️",
//   "You are precious ❤️",
//   "You are amazing ❤️",
//   "You are lovely ❤️",
//   "You are wonderful ❤️",
//   "You are my inspiration ❤️",
//   "You are my happiness ❤️",
//   "You are my favorite chapter ❤️",
//   "Because you are Abahaya Shree ❤️"
// ]

// export default function Reasons() {
//   const navigate = useNavigate()

//   return (
//     <div className="romantic-bg min-h-screen px-6 py-12">

//       {/* Title */}

//       <h1 className="romantic-title text-7xl text-center mb-14">
//         27 Reasons ❤️
//       </h1>

//       <p className="romantic-text text-center text-xl mb-12">
//         27 little reasons why you are so special to me ❤️
//       </p>

//       {/* Cards Grid */}

//       <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

//         {reasons.map((reason, index) => (
//           <motion.div
//             key={index}
//             whileHover={{
//               scale: 1.05,
//               y: -8
//             }}
//             transition={{
//               duration: 0.3
//             }}
//             className="
//               glass-card
//               p-6
//               text-center
//               border
//               border-red-500/40
//               glow-card
//             "
//           >

//             <h2 className="text-3xl font-bold text-pink-200 mb-4">
//               #{index + 1}
//             </h2>

//             <p className="romantic-text text-lg">
//               {reason}
//             </p>

//           </motion.div>
//         ))}

//       </div>

//       {/* Bottom Button */}

//       <div className="text-center mt-14">

//         <button
//           onClick={() => navigate("/music")}
//           className="romantic-btn"
//         >
//           Continue ❤️
//         </button>

//       </div>

//     </div>
//   )
// }

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import GlassHearts from "../components/GlassHearts"

const reasons = [
  "Because your smile can fix my worst day.",
  "Because you care more than you show.",
  "Because talking to you feels like home.",
  "Because you inspire me without even trying.",
  "Because you make ordinary days feel magical.",
  "Because you are beautiful inside and out.",
  "Because you always stay in my thoughts.",
  "Because your laughter is contagious.",
  "Because you understand without words.",
  "Because you are one of a kind.",
  "Because you are stronger than you know.",
  "Because your kindness is genuine.",
  "Because you make life so much brighter.",
  "Because your positivity is contagious.",
  "Because you are truly unforgettable.",
  "Because you make everything feel special.",
  "Because you are my favorite person.",
  "Because you bring so much joy.",
  "Because you deserve nothing but the best.",
  "Because you are irreplaceable.",
  "Because you are absolutely amazing.",
  "Because your presence is a gift.",
  "Because everything about you is wonderful.",
  "Because you inspire me endlessly.",
  "Because you are my greatest happiness.",
  "Because you are my favorite chapter.",
  "Because you are Abahaya Shree ❤️",
]

export default function Reasons() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen px-6 py-16 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      <GlassHearts count={6} />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold text-center text-white mb-3 relative z-10"
        style={{ textShadow: "0 0 20px rgba(255,50,80,0.4)" }}
      >
        27 Reasons Why
      </h1>
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-3 relative z-10"
        style={{ color: "#ff3366", textShadow: "0 0 20px rgba(255,50,80,0.5)" }}
      >
        You're Special ❤️
      </h2>
      <p className="text-red-300 text-center text-base mb-10 relative z-10">
        27 little reasons why you matter so much ❤️
      </p>

      {/* Cards - show first few, scroll for more */}
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="flex items-start gap-4 p-5 rounded-2xl"
            style={{
              background: "rgba(25, 0, 0, 0.8)",
              border: "1px solid rgba(140, 0, 20, 0.5)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            <div className="flex-shrink-0 flex flex-col items-center">
              <span className="text-white font-bold text-base">Reason #{index + 1}</span>
              <span className="text-red-500 text-lg mt-1">❤️</span>
            </div>
            <div className="w-px self-stretch" style={{ background: "rgba(180,0,30,0.3)" }} />
            <p className="text-red-100 text-base leading-7 flex-1">{reason}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll dots */}
      <div className="flex justify-center gap-2 mt-8 mb-6 relative z-10">
        {[0,1,2,3,4].map(i => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 0 ? "20px" : "8px",
              height: "8px",
              background: i === 0 ? "#ff3366" : "rgba(255,80,100,0.3)"
            }}
          />
        ))}
      </div>

      <div className="text-center mt-4 relative z-10">
        <button
          onClick={() => navigate("/music")}
          className="px-8 py-3 text-white font-semibold rounded-full text-base tracking-wide"
          style={{
            background: "linear-gradient(135deg, #7a0000, #b0001a)",
            border: "1px solid rgba(255,80,100,0.3)",
            boxShadow: "0 4px 20px rgba(120,0,20,0.5)"
          }}
        >
          Next ❤️
        </button>
      </div>
    </div>
  )
}