import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import GlassHearts from "../components/GlassHearts"

const FULL_LETTER = `Life introduces many people...

But only a few become unforgettable ✨.

For me,
you are one of those rare people 🌹.

Thank you for your smile 😊,
your kindness 💖,
and your presence 🌸.

I once saw you in my dreams —
dressed in a bright yellow chudithar 🌼,
standing gracefully in the soft glow of an early morning sunrise 🌅.
The golden light of dawn spread across the hills ⛰️,
casting long shadows and illuminating the mist in the valleys 🌫️.
The yellow of your attire blended beautifully with the warm hues of the rising sun 🌞,
making your presence feel almost ethereal —
like a symbol of hope and new beginnings 🌈.
The serene hilltop setting, combined with the gentle colors of sunrise,
gave the whole scene a magical, peaceful atmosphere,
as if nature itself was celebrating your presence 💫❣️.

Just like that dream,
your presence in my life feels like a blessing 🙏 —
full of warmth 🔥, care 🤗, and endless joy 💕.
You are the sunrise that brightens my days 🌞,
the smile that calms my heart 💓,
and the kindness that inspires me 🌟.

On your birthday 🎂,
I wish you love ❤️ that never fades,
happiness 😍 that never ends,
and dreams 🌠 that always come true.

Happy Birthday ❤️🎉

With Love 💌,
Jai ❤️`

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

export default function Letter() {

  const navigate = useNavigate()
  const [showButton, setShowButton] = useState(false)

  return (
    <div className="min-h-screen romantic-bg flex items-center justify-center px-6 relative">

      <GlassHearts count={7} />

      <div className="
        max-w-3xl
        glass-card
        backdrop-blur-lg
        rounded-3xl
        p-10
        text-center
        relative
        z-10
      ">

        <h1 className="text-5xl mb-6">
          💌 Dear Abhaya Shree
        </h1>

        <div className="flex items-center gap-2 mb-6 justify-center">
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="speaking-dot" />
          <span className="text-red-200 text-sm ml-2 tracking-wide">
            Jai is talking to you...
          </span>
        </div>

        <p className="text-xl leading-10 text-left romantic-text">
          <TypeAnimation
            sequence={buildSequence(FULL_LETTER, () => setShowButton(true))}
            wrapper="span"
            speed={70}
            style={{ whiteSpace: "pre-line", display: "inline-block" }}
            repeat={0}
            cursor={true}
          />
        </p>

        {showButton && (
          <button
            onClick={() => navigate("/final")}
            className="
              mt-10
              px-8
              py-3
              romantic-btn
              rounded-full
              fade-in
            "
          >
            Final Surprise ❤️
          </button>
        )}

      </div>

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
