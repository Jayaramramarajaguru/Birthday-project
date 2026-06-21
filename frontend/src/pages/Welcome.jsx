import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import FloatingHearts from "../components/FloatingHearts"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen romantic-bg flex flex-col items-center justify-center text-center px-6">

      <FloatingHearts />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold z-10"
      >
        ❤️
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-3xl md:text-5xl font-bold mt-6 z-10"
      >
        To My Dearest
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-4xl md:text-6xl text-red-300 font-bold mt-4 z-10"
      >
       Abhaya Shree ❤️
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-8 text-lg max-w-xl z-10"
      >
        This is not just a website...
        <br />
        It's a small piece of my heart.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/login")}
        className="mt-12 px-8 py-4 romantic-btn text-xl font-bold shadow-xl z-10"
      >
        Begin The Journey ❤️
      </motion.button>

    </div>
  )
}