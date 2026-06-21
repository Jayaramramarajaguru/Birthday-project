import { useState } from "react"
import Confetti from "react-confetti"
import { TypeAnimation } from "react-type-animation"
import GlassHearts from "../components/GlassHearts"

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

  const [showSignature, setShowSignature] = useState(false)

  return (
    <div className="
      min-h-screen
      romantic-bg
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
      relative
    ">

      <GlassHearts count={7} />

      <Confetti />

      <h1 className="text-7xl font-bold mb-6 relative z-10">
        ❤️ Happy Birthday ❤️
      </h1>

      <h2 className="text-5xl text-red-300 relative z-10">
        Abhaya Shree 🌸✨
      </h2>

      <div className="flex items-center gap-2 mt-8 mb-4 justify-center relative z-10">
        <span className="speaking-dot" />
        <span className="speaking-dot" />
        <span className="speaking-dot" />
        <span className="text-red-200 text-sm ml-2 tracking-wide">
          Jai is talking to you...
        </span>
      </div>

      <p className="text-2xl max-w-3xl relative z-10 romantic-text">
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
        <h3 className="mt-12 text-4xl relative z-10 fade-in">
          — Jai 💕🌹
        </h3>
      )}

      <style>{`
        .speaking-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff7eb0;
          display: inline-block;
          animation: dotBounce 1.2s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(255, 120, 170, 0.8);
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
