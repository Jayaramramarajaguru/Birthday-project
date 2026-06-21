import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function Login() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    const enteredName = name.trim().toLowerCase()

    if (
      enteredName === "abhaya shree" ||
      enteredName === "abhaya"
    ) {
      navigate("/countdown")
    } else {
      setError(
        "Oops ❤️ This surprise is reserved for Abhaya Shree only..."
      )
    }
  }

  return (
    <div className="min-h-screen romantic-bg flex items-center justify-center px-6">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          w-full
          max-w-md
          glass-card
          backdrop-blur-xl
          border
          border-red-500
          rounded-3xl
          p-8
          text-center
          shadow-2xl
        "
      >
        <div className="text-6xl mb-4">
          ❤️
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Secret Entrance
        </h1>

        <p className="text-red-200 mb-8">
          Only one special person can unlock
          this birthday surprise 🎂
        </p>

        <input
          type="text"
          placeholder="Enter Your Name ❤️"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            bg-white
            text-black
            outline-none
          "
        />

        <button
          onClick={handleLogin}
          className="
            mt-6
            w-full
            py-4
            romantic-btn
            hover:romantic-btn
            rounded-xl
            font-bold
            transition
            duration-300
          "
        >
          Unlock My Surprise ❤️
        </button>

        {error && (
          <p className="text-red-300 mt-5">
            {error}
          </p>
        )}

        <p className="mt-8 text-sm text-red-200">
          Made with ❤️ by Jai
        </p>

      </motion.div>

    </div>
  )
}

