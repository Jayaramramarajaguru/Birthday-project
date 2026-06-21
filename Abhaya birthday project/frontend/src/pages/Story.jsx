import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import TypeWriter from "../components/Typewriter"
import PageTransition from "../components/PageTransition"
import GlassHearts from "../components/GlassHearts"

export default function Story() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <div className="min-h-screen romantic-bg flex items-center justify-center px-6 relative">
        <GlassHearts count={8} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#2d0d0d]/70 backdrop-blur-lg p-8 rounded-3xl max-w-3xl text-center border border-red-500 relative z-10"
        >
          <h1 className="romantic-title text-7xl">
            📖 Our Story ❤️
          </h1>

          <div className="min-h-[150px] flex items-center justify-center">
            <TypeWriter />
          </div>

          <p className="mt-10 text-red-100 leading-8">
            Life introduces many people...
            <br />
            But only a few become unforgettable.
            <br /><br />
            For me,
            <br />
            that person is
            <span className="text-red-300 font-bold">
              {" "}Abhaya Shree ❤️
            </span>
          </p>

          <button
            onClick={() => navigate("/gallery")}
            className="mt-10 px-8 py-3 romantic-btn hover:scale-105 duration-300"
          >
            Continue ❤️
          </button>

        </motion.div>

      </div>
    </PageTransition>
  )
}