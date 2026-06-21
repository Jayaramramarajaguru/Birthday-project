import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const reasons = [
  "Your smile makes my day ❤️",
  "You are kind and caring ❤️",
  "Talking to you feels like home ❤️",
  "You inspire me ❤️",
  "You make ordinary days special ❤️",
  "You are beautiful inside and out ❤️",
  "You always stay in my thoughts ❤️",
  "You make me laugh ❤️",
  "You understand me ❤️",
  "You are unique ❤️",
  "You are strong ❤️",
  "You are genuine ❤️",
  "You make life brighter ❤️",
  "You spread positivity ❤️",
  "You are unforgettable ❤️",
  "You are special ❤️",
  "You are my favorite person ❤️",
  "You make me happy ❤️",
  "You deserve the best ❤️",
  "You are precious ❤️",
  "You are amazing ❤️",
  "You are lovely ❤️",
  "You are wonderful ❤️",
  "You are my inspiration ❤️",
  "You are my happiness ❤️",
  "You are my favorite chapter ❤️",
  "Because you are Abahaya Shree ❤️"
]

export default function Reasons() {
  const navigate = useNavigate()

  return (
    <div className="romantic-bg min-h-screen px-6 py-12">

      {/* Title */}

      <h1 className="romantic-title text-7xl text-center mb-14">
        27 Reasons ❤️
      </h1>

      <p className="romantic-text text-center text-xl mb-12">
        27 little reasons why you are so special to me ❤️
      </p>

      {/* Cards Grid */}

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8
            }}
            transition={{
              duration: 0.3
            }}
            className="
              glass-card
              p-6
              text-center
              border
              border-red-500/40
              glow-card
            "
          >

            <h2 className="text-3xl font-bold text-pink-200 mb-4">
              #{index + 1}
            </h2>

            <p className="romantic-text text-lg">
              {reason}
            </p>

          </motion.div>
        ))}

      </div>

      {/* Bottom Button */}

      <div className="text-center mt-14">

        <button
          onClick={() => navigate("/music")}
          className="romantic-btn"
        >
          Continue ❤️
        </button>

      </div>

    </div>
  )
}