import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import GlassHearts from "../components/GlassHearts"

export default function Gift() {

  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="min-h-screen romantic-bg flex flex-col items-center justify-center relative px-6">

      <GlassHearts count={7} />

      {!open ? (

        <>
          <h1 className="text-5xl mb-10 relative z-10">
            A Little Surprise ❤️
          </h1>

          <div
            className="gift-scene relative z-10"
            onClick={() => setOpen(true)}
          >
            <div className="gift-3d">
              <div className="gift-glow" />

              <div className="box-side box-front" />
              <div className="box-side box-back" />
              <div className="box-side box-left" />
              <div className="box-side box-right" />
              <div className="box-side box-bottom" />

              <div className="ribbon-vertical" />
              <div className="ribbon-horizontal" />

              <div className="lid">
                <div className="lid-top" />
                <div className="lid-front" />
                <div className="lid-left" />
                <div className="lid-right" />
                <div className="bow">
                  <span className="bow-loop bow-loop-left" />
                  <span className="bow-loop bow-loop-right" />
                  <span className="bow-knot" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="
              mt-12
              px-8
              py-3
              romantic-btn
              rounded-full
              relative
              z-10
            "
          >
            Open Gift ❤️
          </button>
        </>

      ) : (

        <>
          <div className="max-w-2xl text-center relative z-10">

            <h1 className="text-5xl mb-6">
              ❤️ Surprise ❤️
            </h1>

            <div className="glass-card px-6 py-8 md:px-10 md:py-10 text-left">

              <div className="flex items-center gap-2 mb-6 justify-center">
                <span className="speaking-dot" />
                <span className="speaking-dot" />
                <span className="speaking-dot" />
                <span className="text-red-200 text-sm ml-2 tracking-wide">
                  Jai is talking to you...
                </span>
              </div>

              <p className="text-xl md:text-2xl leading-10 romantic-text">
                <TypeAnimation
                  sequence={[
                    "Dear Abhaya Shree 🌸,",
                    600,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are.",
                    600,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are. You bring so much light 🌞 and joy 😍 into the lives of everyone around you, and I feel lucky 🍀 to know you.",
                    800,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are. You bring so much light 🌞 and joy 😍 into the lives of everyone around you, and I feel lucky 🍀 to know you.\n\nI hope this year brings you endless laughter 😂, new adventures 🌍, and all the happiness 💖 you deserve.",
                    800,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are. You bring so much light 🌞 and joy 😍 into the lives of everyone around you, and I feel lucky 🍀 to know you.\n\nI hope this year brings you endless laughter 😂, new adventures 🌍, and all the happiness 💖 you deserve. You inspire me 🌟 more than you realize, and I admire the way you make even ordinary moments feel extraordinary 🌈.",
                    800,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are. You bring so much light 🌞 and joy 😍 into the lives of everyone around you, and I feel lucky 🍀 to know you.\n\nI hope this year brings you endless laughter 😂, new adventures 🌍, and all the happiness 💖 you deserve. You inspire me 🌟 more than you realize, and I admire the way you make even ordinary moments feel extraordinary 🌈.\n\nMay today be filled with surprises 🎁, smiles 😊, and memories 📸 you'll cherish forever. And here's a little secret 🤫: one of the best surprises for me has been having you in my life ❤️.",
                    700,
                    "Dear Abhaya Shree 🌸,\n\nOn this special day 🎂, I just wanted to remind you how amazing ✨ you are. You bring so much light 🌞 and joy 😍 into the lives of everyone around you, and I feel lucky 🍀 to know you.\n\nI hope this year brings you endless laughter 😂, new adventures 🌍, and all the happiness 💖 you deserve. You inspire me 🌟 more than you realize, and I admire the way you make even ordinary moments feel extraordinary 🌈.\n\nMay today be filled with surprises 🎁, smiles 😊, and memories 📸 you'll cherish forever. And here's a little secret 🤫: one of the best surprises for me has been having you in my life ❤️.\n\nWishing you the happiest birthday ever 🎉❤️\n\n— Jai 💌❤️",
                    () => setShowButton(true),
                  ]}
                  wrapper="span"
                  speed={70}
                  style={{ whiteSpace: "pre-line", display: "inline-block" }}
                  repeat={0}
                  cursor={true}
                />
              </p>

            </div>

          </div>

          {showButton && (
            <button
              onClick={() => navigate("/letter")}
              className="
                mt-10
                px-8
                py-3
                romantic-btn
                rounded-full
                relative
                z-10
                fade-in
              "
            >
              Final Letter ❤️
            </button>
          )}

        </>
      )}

      <style>{`
        .gift-scene {
          width: 220px;
          height: 220px;
          perspective: 900px;
          cursor: pointer;
        }

        .gift-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(-8deg) rotateY(-25deg);
          animation: giftSpin 9s ease-in-out infinite alternate;
          transition: transform 0.6s ease;
        }

        @keyframes giftSpin {
          0% { transform: rotateX(-8deg) rotateY(-25deg); }
          100% { transform: rotateX(-8deg) rotateY(25deg); }
        }

        .gift-glow {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,92,156,0.35), transparent 70%);
          filter: blur(10px);
          transform: translateZ(-40px);
          animation: glowPulse2 2.4s ease-in-out infinite;
        }

        @keyframes glowPulse2 {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .box-side {
          position: absolute;
          background: linear-gradient(135deg, #e23a6b, #c2185b);
          box-shadow: inset 0 0 25px rgba(0,0,0,0.25);
        }

        .box-front, .box-back {
          width: 160px;
          height: 130px;
          left: 30px;
          top: 60px;
        }
        .box-front { transform: translateZ(80px); }
        .box-back { transform: translateZ(-80px) rotateY(180deg); }

        .box-left, .box-right {
          width: 160px;
          height: 130px;
          left: 30px;
          top: 60px;
        }
        .box-left { transform: rotateY(-90deg) translateZ(80px); }
        .box-right { transform: rotateY(90deg) translateZ(80px); }

        .box-bottom {
          width: 160px;
          height: 160px;
          left: 30px;
          top: 60px;
          transform: rotateX(-90deg) translateZ(65px);
          background: linear-gradient(135deg, #c2185b, #9c1450);
        }

        .ribbon-vertical {
          position: absolute;
          width: 26px;
          height: 130px;
          left: 97px;
          top: 60px;
          background: linear-gradient(180deg, #ffe066, #ffc233);
          transform: translateZ(81px);
          box-shadow: 0 0 10px rgba(255, 220, 100, 0.6);
        }

        .ribbon-horizontal {
          position: absolute;
          width: 160px;
          height: 26px;
          left: 30px;
          top: 112px;
          background: linear-gradient(90deg, #ffe066, #ffc233);
          transform: translateZ(81px);
          box-shadow: 0 0 10px rgba(255, 220, 100, 0.6);
        }

        .lid {
          position: absolute;
          width: 176px;
          height: 40px;
          left: 22px;
          top: 48px;
          transform-style: preserve-3d;
          transform-origin: top center;
          animation: lidBob 2.4s ease-in-out infinite;
        }

        @keyframes lidBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .lid-top {
          position: absolute;
          width: 176px;
          height: 176px;
          top: -68px;
          left: 0;
          transform: rotateX(90deg) translateZ(20px);
          background: linear-gradient(135deg, #ff5c9c, #e23a6b);
          border-radius: 6px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }

        .lid-front, .lid-left, .lid-right {
          position: absolute;
          background: linear-gradient(135deg, #ff7eb0, #e23a6b);
        }
        .lid-front {
          width: 176px;
          height: 22px;
          transform: translateZ(88px);
        }
        .lid-left {
          width: 176px;
          height: 22px;
          transform: rotateY(-90deg) translateZ(88px);
        }
        .lid-right {
          width: 176px;
          height: 22px;
          transform: rotateY(90deg) translateZ(88px);
        }

        .bow {
          position: absolute;
          top: -34px;
          left: 50%;
          margin-left: -28px;
          width: 56px;
          height: 36px;
          transform: translateZ(95px);
        }

        .bow-loop {
          position: absolute;
          width: 26px;
          height: 26px;
          background: linear-gradient(135deg, #ffe066, #ffc233);
          border-radius: 50% 50% 50% 0;
          box-shadow: 0 0 8px rgba(255, 220, 100, 0.7);
        }

        .bow-loop-left {
          left: 0;
          transform: rotate(-45deg);
        }
        .bow-loop-right {
          right: 0;
          transform: rotate(135deg);
        }

        .bow-knot {
          position: absolute;
          left: 50%;
          top: 10px;
          width: 14px;
          height: 14px;
          margin-left: -7px;
          background: #ffd23f;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 220, 100, 0.8);
        }

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
