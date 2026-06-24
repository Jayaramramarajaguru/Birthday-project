// import { motion } from "framer-motion"
// import { useNavigate } from "react-router-dom"
// import FloatingHearts from "../components/FloatingHearts"

// export default function Welcome() {
//   const navigate = useNavigate()

//   return (
//     <div className="relative min-h-screen romantic-bg flex flex-col items-center justify-center text-center px-6">

//       <FloatingHearts />

//       <motion.h1
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-7xl font-bold z-10"
//       >
//         ❤️
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="text-3xl md:text-5xl font-bold mt-6 z-10"
//       >
//         To My Dearest
//       </motion.h2>

//       <motion.h3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//         className="text-4xl md:text-6xl text-red-300 font-bold mt-4 z-10"
//       >
//        Abhaya Shree ❤️
//       </motion.h3>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 3 }}
//         className="mt-8 text-lg max-w-xl z-10"
//       >
//         This is not just a website...
//         <br />
//         It's a small piece of my heart.
//       </motion.p>

//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => navigate("/login")}
//         className="mt-12 px-8 py-4 romantic-btn text-xl font-bold shadow-xl z-10"
//       >
//         Begin The Journey ❤️
//       </motion.button>

//     </div>
//   )
// }
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import FloatingHearts from "../components/FloatingHearts"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}>

      {/* Rose background images using CSS */}
      <div className="rose-bg-left" />
      <div className="rose-bg-right" />

      {/* Floating rose petals */}
      <FloatingHearts />

      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abhaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-red-200 text-xl font-light tracking-widest mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          To My Dearest
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="text-6xl md:text-7xl font-bold mb-6"
          style={{
            fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
            color: "#ff3366",
            textShadow: "0 0 40px rgba(255,50,100,0.6), 0 0 80px rgba(255,50,100,0.3)",
            lineHeight: 1.2
          }}
        >
          Abhaya Shree
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-40 h-px mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #ff3366, transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-red-200 text-lg leading-8 mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          This is not just a website...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-red-200 text-lg leading-8 mb-10"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          It's a small piece of my heart. 🤍
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(180,0,30,0.7)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/login")}
          className="px-10 py-4 text-white text-lg font-semibold rounded-full tracking-wide"
          style={{
            background: "linear-gradient(135deg, #8b0000, #c0001a, #8b0000)",
            border: "1px solid rgba(255,80,100,0.4)",
            boxShadow: "0 4px 30px rgba(150,0,20,0.5)",
          }}
        >
          Begin The Journey ❤️
        </motion.button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .rose-bg-left {
          position: fixed;
          left: -80px;
          bottom: -40px;
          width: 420px;
          height: 420px;
          background: radial-gradient(ellipse, rgba(120,0,20,0.5) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .rose-bg-left::before {
          content: '🌹';
          position: absolute;
          font-size: 180px;
          bottom: 20px;
          left: 20px;
          opacity: 0.55;
          transform: rotate(-15deg);
          filter: drop-shadow(0 0 20px rgba(180,0,30,0.6));
        }
        .rose-bg-left::after {
          content: '🌹';
          position: absolute;
          font-size: 120px;
          bottom: 180px;
          left: 100px;
          opacity: 0.4;
          transform: rotate(10deg);
        }
        .rose-bg-right {
          position: fixed;
          right: -80px;
          top: -40px;
          width: 420px;
          height: 420px;
          background: radial-gradient(ellipse, rgba(120,0,20,0.5) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .rose-bg-right::before {
          content: '🌹';
          position: absolute;
          font-size: 180px;
          top: 20px;
          right: 20px;
          opacity: 0.55;
          transform: rotate(15deg) scaleX(-1);
          filter: drop-shadow(0 0 20px rgba(180,0,30,0.6));
        }
        .rose-bg-right::after {
          content: '🌹';
          position: absolute;
          font-size: 110px;
          top: 180px;
          right: 110px;
          opacity: 0.4;
          transform: rotate(-10deg) scaleX(-1);
        }
      `}</style>
    </div>
  )
}