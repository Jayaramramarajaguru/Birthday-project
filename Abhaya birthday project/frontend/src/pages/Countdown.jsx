// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"

// export default function Countdown() {
//   const [timeLeft, setTimeLeft] = useState({})
//   const navigate = useNavigate()

//   useEffect(() => {
//     const timer = setInterval(() => {

//       const birthday = new Date(
//         "2026-06-27T00:00:00"
//       )

//       const now = new Date()

//       const diff = birthday - now

//       if (diff <= 0) {
//         clearInterval(timer)
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
//   }, [])

//   return (
//     <div className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 text-center">

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
//         onClick={() => navigate("/story")}
//         className="mt-12 px-8 py-4 romantic-btn"
//       >
//         Continue ❤️
//       </button>

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

import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({})
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.blockedFrom) {
      setShowModal(true)
    }
  }, [location.state])

  useEffect(() => {
    const timer = setInterval(() => {

      const birthday = new Date(
        "2026-06-27T00:00:00"
      )

      const now = new Date()

      const diff = birthday - now

      if (diff <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        navigate("/story", { replace: true })
        return
      }

      const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
      )

      const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
      )

      const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
      )

      const seconds = Math.floor(
        (diff / 1000) % 60
      )

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 text-center relative">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-5xl font-bold"
      >
        ❤️ Birthday Countdown ❤️
      </motion.h1>

      <p className="mt-4 text-xl">
        Until Abhaya Shree's Birthday 🎂
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <TimerCard
          label="Days"
          value={timeLeft.days}
        />

        <TimerCard
          label="Hours"
          value={timeLeft.hours}
        />

        <TimerCard
          label="Minutes"
          value={timeLeft.minutes}
        />

        <TimerCard
          label="Seconds"
          value={timeLeft.seconds}
        />

      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-10 px-6 py-2 romantic-btn rounded-full text-sm opacity-80"
      >
        Try to Peek Early 👀
      </button>

      <AnimatePresence>
        {showModal && (
          <PatienceModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>

    </div>
  )
}

function TimerCard({ label, value }) {
  return (
    <div className="glass-card p-6 rounded-2xl min-w-[120px]">
      <h1 className="romantic-title text-7xl">
        {value ?? 0}
      </h1>

      <p className="mt-2">
        {label}
      </p>
    </div>
  )
}

function PatienceModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 20 }}
        transition={{ type: "spring", damping: 18, stiffness: 220 }}
        className="glass-card max-w-md w-full p-8 text-center border border-red-400/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-4">🔒💗</div>

        <h2 className="romantic-title text-4xl mb-6">
          Not Yet, My Mam
        </h2>

        <p className="romantic-text text-lg leading-9 italic">
          Some gifts are wrapped in ribbon,<br />
          some are wrapped in time —<br />
          this one waits for midnight,<br />
          
          <br /><br />
          The stars haven't aligned just yet,<br />
          the candles haven't met their flame —<br />
          stay a little longer here with me,<br />
          till the 27th calls your name.
        </p>

        <button
          onClick={onClose}
          className="mt-8 px-8 py-3 romantic-btn rounded-full"
        >
          Please Wait ❤️
        </button>
      </motion.div>
    </motion.div>
  )
}