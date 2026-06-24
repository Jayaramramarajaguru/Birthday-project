import { useState } from "react"
import Confetti from "react-confetti"
import { TypeAnimation } from "react-type-animation"
import GlassHearts from "../components/GlassHearts"
import { useNavigate } from "react-router-dom"

const FULL_MESSAGE = `No matter where life takes us 🌍,

I will always be grateful 🙏
that I got to know you 💖.

May your smile 😊 never fade ❤️,
your laughter 🎶 echo forever,
and your dreams 🌠 shine brighter than the stars ✨.

You are the sunrise 🌅 that lights up my world,
the melody 🎵 that makes my heart dance,
and the gentle breeze 🌿 that brings peace to my soul.

On this special day 🎂,
may love ❤️ surround you,
joy 🌈 embrace you,
and every moment become a memory 📸 worth cherishing.

You are not just a wish come true 🌟,
you are the poetry of my heart 💌,
the magic ✨ in my days,
and the blessing 🙌 I'll treasure forever.

Happiest Birthday, my dear English Mam 🌟❤️`

function buildSequence(fullText, onDone) {
  const paragraphs = fullText.split("\n\n")
  const sequence = []
  let accumulated = ""
  paragraphs.forEach((para, i) => {
    accumulated = accumulated ? `${accumulated}\n\n${para}` : para
    sequence.push(accumulated)
    sequence.push(i === paragraphs.length - 1 ? 400 : 700)
  })
  sequence.push(onDone)
  return sequence
}

export default function FinalSurprise() {
  const [clicked, setClicked] = useState(false)
  const [showSignature, setShowSignature] = useState(false)
  const navigate = useNavigate()

  if (!clicked) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
      >
        <GlassHearts count={7} />

        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
          <div className="flex items-center gap-2">
            <span className="text-red-400 text-lg">≡</span>
            <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
            <span className="text-red-500 text-sm">❤</span>
          </div>
          <span className="text-white text-lg">♪</span>
        </div>

        <h1 className="text-3xl text-white mb-10 relative z-10" style={{ fontFamily: "'Georgia', serif" }}>
          One Last Thing...
        </h1>

        <div
          className="neon-heart-btn relative z-10 cursor-pointer"
          onClick={() => setClicked(true)}
        >
          <div className="neon-heart-outer">
            <div className="neon-heart-middle">
              <div className="neon-heart-inner">
                <span className="click-text">Click Here</span>
                <span className="click-heart">❤️</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .neon-heart-btn { margin: 20px auto; }
          .neon-heart-outer {
            width: 260px; height: 240px;
            position: relative;
            display: flex; align-items: center; justify-content: center;
          }
          .neon-heart-outer::before {
            content: '❤';
            position: absolute;
            font-size: 220px;
            color: transparent;
            -webkit-text-stroke: 3px rgba(255, 0, 60, 0.9);
            filter: drop-shadow(0 0 6px #ff003c) drop-shadow(0 0 15px #ff003c) drop-shadow(0 0 30px #ff003c) drop-shadow(0 0 50px #ff003c);
            animation: neonPulse 1.5s ease-in-out infinite alternate;
            line-height: 1;
          }
          @keyframes neonPulse {
            0% { filter: drop-shadow(0 0 4px #ff003c) drop-shadow(0 0 12px #ff003c) drop-shadow(0 0 25px #ff003c); opacity: 0.85; }
            100% { filter: drop-shadow(0 0 8px #ff3366) drop-shadow(0 0 20px #ff3366) drop-shadow(0 0 45px #ff3366) drop-shadow(0 0 70px rgba(255,0,60,0.4)); opacity: 1; }
          }
          .neon-heart-middle { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; }
          .neon-heart-inner { display: flex; flex-direction: column; align-items: center; gap: 4px; }
          .click-text {
            font-size: 28px; font-weight: bold; color: white;
            font-family: 'Dancing Script', 'Brush Script MT', cursive;
            text-shadow: 0 0 15px rgba(255,100,130,0.9), 0 0 30px rgba(255,50,80,0.5);
            letter-spacing: 1px;
          }
          .click-heart { font-size: 20px; }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center text-center px-6 relative overflow-y-auto overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      <GlassHearts count={7} />
      <Confetti />

      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      {/* Scrollable content with top padding for header */}
      <div className="w-full flex flex-col items-center pt-20 pb-16 relative z-10">

        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ textShadow: "0 0 20px rgba(255,50,80,0.5)" }}
        >
          ❤️ Happy Birthday ❤️
        </h1>
        <h2
          className="text-3xl mb-6"
          style={{ color: "#ff3366", textShadow: "0 0 20px rgba(255,50,80,0.5)" }}
        >
          Abahaya Shree 🌸✨
        </h2>

        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="text-red-300 text-sm ml-2 tracking-wide">Jai is talking to you...</span>
        </div>

        <p className="text-xl max-w-2xl text-red-100" style={{ fontFamily: "'Georgia', serif" }}>
          <TypeAnimation
            sequence={buildSequence(FULL_MESSAGE, () => setShowSignature(true))}
            wrapper="span"
            speed={70}
            style={{ whiteSpace: "pre-line", display: "inline-block" }}
            repeat={0}
            cursor={true}
          />
        </p>

        {showSignature && (
          <>
            <h3 className="mt-10 text-3xl text-red-200" style={{ fontFamily: "'Georgia', serif" }}>
              — Jai 💕🌹
            </h3>
            <button
              onClick={() => navigate("/finalmessage")}
              className="mt-8 px-8 py-3 text-white font-semibold rounded-full text-base tracking-wide"
              style={{
                background: "linear-gradient(135deg, #7a0000, #b0001a)",
                border: "1px solid rgba(255,80,100,0.3)",
                boxShadow: "0 4px 20px rgba(120,0,20,0.5)"
              }}
            >
              Next ❤️
            </button>
          </>
        )}

      </div>

      <style>{`
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
      `}</style>
    </div>
  )
}