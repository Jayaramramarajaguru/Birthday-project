

// import { useEffect, useState } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"

// export default function Countdown() {
//   const [timeLeft, setTimeLeft] = useState({})
//   const [showModal, setShowModal] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     if (location.state?.blockedFrom) {
//       setShowModal(true)
//     }
//   }, [location.state])

//   useEffect(() => {
//     const timer = setInterval(() => {

//       const birthday = new Date(
//         "2026-06-27T00:00:00"
//       )

//       const now = new Date()

//       const diff = birthday - now

//       if (diff <= 0) {
//         clearInterval(timer)
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//         navigate("/story", { replace: true })
//         return
//       }

//       const days = Math.floor(
//         diff / (1000 * 60 * 60 * 24)
//       )

//       const hours = Math.floor(
//         (diff / (1000 * 60 * 60)) % 24
//       )

//       const minutes = Math.floor(
//         (diff / (1000 * 60)) % 60
//       )

//       const seconds = Math.floor(
//         (diff / 1000) % 60
//       )

//       setTimeLeft({
//         days,
//         hours,
//         minutes,
//         seconds,
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [navigate])

//   return (
//     <div className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 text-center relative">

//       <motion.h1
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         className="text-5xl font-bold"
//       >
//         ❤️ Birthday Countdown ❤️
//       </motion.h1>

//       <p className="mt-4 text-xl">
//         Until Abhaya Shree's Birthday 🎂
//       </p>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

//         <TimerCard
//           label="Days"
//           value={timeLeft.days}
//         />

//         <TimerCard
//           label="Hours"
//           value={timeLeft.hours}
//         />

//         <TimerCard
//           label="Minutes"
//           value={timeLeft.minutes}
//         />

//         <TimerCard
//           label="Seconds"
//           value={timeLeft.seconds}
//         />

//       </div>

//       <button
//         onClick={() => setShowModal(true)}
//         className="mt-10 px-6 py-2 romantic-btn rounded-full text-sm opacity-80"
//       >
//         Try to Peek Early 👀
//       </button>

//       <AnimatePresence>
//         {showModal && (
//           <PatienceModal onClose={() => setShowModal(false)} />
//         )}
//       </AnimatePresence>

//     </div>
//   )
// }

// function TimerCard({ label, value }) {
//   return (
//     <div className="glass-card p-6 rounded-2xl min-w-[120px]">
//       <h1 className="romantic-title text-7xl">
//         {value ?? 0}
//       </h1>

//       <p className="mt-2">
//         {label}
//       </p>
//     </div>
//   )
// }

// function PatienceModal({ onClose }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.85, y: 20 }}
//         transition={{ type: "spring", damping: 18, stiffness: 220 }}
//         className="glass-card max-w-md w-full p-8 text-center border border-red-400/40"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="text-5xl mb-4">🔒💗</div>

//         <h2 className="romantic-title text-4xl mb-6">
//           Not Yet, My Mam
//         </h2>

//         <p className="romantic-text text-lg leading-9 italic">
//           Some gifts are wrapped in ribbon,<br />
//           some are wrapped in time —<br />
//           this one waits for midnight,<br />
          
//           <br /><br />
//           The stars haven't aligned just yet,<br />
//           the candles haven't met their flame —<br />
//           stay a little longer here with me,<br />
//           till the 27th calls your name.
//         </p>

//         <button
//           onClick={onClose}
//           className="mt-8 px-8 py-3 romantic-btn rounded-full"
//         >
//           Please Wait ❤️
//         </button>
//       </motion.div>
//     </motion.div>
//   )
// }

import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import FloatingHearts from "../components/FloatingHearts"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({})
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.blockedFrom) setShowModal(true)
  }, [location.state])

  useEffect(() => {
    const timer = setInterval(() => {
      const birthday = new Date("2026-06-27T00:00:00")
      const now = new Date()
      const diff = birthday - now

      if (diff <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        navigate("/story", { replace: true })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      <FloatingHearts />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ textShadow: "0 0 20px rgba(255,50,80,0.4)" }}
        >
          Birthday Countdown ❤️
        </motion.h1>

        <p className="text-red-300 text-base mb-8 tracking-wide">
          Until Abahaya Shree's Birthday 🎂
        </p>

        {/* Timer boxes */}
        <div className="grid grid-cols-4 gap-3 mb-10">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center justify-center rounded-2xl min-w-[72px] py-4 px-3"
              style={{
                background: "rgba(30, 0, 0, 0.8)",
                border: "1px solid rgba(180, 0, 30, 0.5)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
              }}
            >
              <span className="text-4xl font-bold text-white" style={{ fontFamily: "monospace" }}>
                {String(value ?? 0).padStart(2, "0")}
              </span>
              <span className="text-red-400 text-xs mt-1 tracking-widest uppercase">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Neon heart icon */}
        <div className="mb-6" style={{ fontSize: "60px", filter: "drop-shadow(0 0 20px rgba(255,50,80,0.9)) drop-shadow(0 0 40px rgba(255,50,80,0.5))" }}>
          💕
        </div>

        <p className="text-red-200 text-lg mb-2">Can't wait for</p>
        <p className="text-white text-xl font-semibold mb-8">27th June 2026 ❤️</p>

        <button
          onClick={() => navigate("/story")}
          className="px-8 py-3 text-white font-semibold rounded-full text-base tracking-wide"
          style={{
            background: "linear-gradient(135deg, #7a0000, #b0001a)",
            border: "1px solid rgba(255,80,100,0.3)",
            boxShadow: "0 4px 20px rgba(120,0,20,0.5)"
          }}
        >
          Next &gt;
        </button>
      </div>

      <AnimatePresence>
        {showModal && <PatienceModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}

function PatienceModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 20 }}
        transition={{ type: "spring", damping: 18, stiffness: 220 }}
        className="max-w-md w-full p-8 text-center rounded-3xl"
        style={{
          background: "rgba(20, 0, 0, 0.9)",
          border: "1px solid rgba(180, 0, 30, 0.4)",
          backdropFilter: "blur(20px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-4">🔒💗</div>
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
          Not Yet, My Mam
        </h2>
        <p className="text-red-200 text-base leading-8 italic">
          Some gifts are wrapped in ribbon,<br />
          some are wrapped in time —<br />
          this one waits for midnight,<br /><br />
          The stars haven't aligned just yet,<br />
          the candles haven't met their flame —<br />
          stay a little longer here with me,<br />
          till the 27th calls your name.
        </p>
        <button
          onClick={onClose}
          className="mt-8 px-8 py-3 text-white font-semibold rounded-full"
          style={{ background: "linear-gradient(135deg, #8b0000, #c0001a)" }}
        >
          Please Wait ❤️
        </button>
      </motion.div>
    </motion.div>
  )
}