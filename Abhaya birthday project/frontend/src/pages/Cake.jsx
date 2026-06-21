import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Confetti from "react-confetti"
import GlassHearts from "../components/GlassHearts"

function CrackerBurst() {
  const colors = ["#ff5c9c", "#ffd23f", "#6fb6ff", "#ff8a3d", "#c084fc", "#4ade80"]
  const bursts = [
    { left: "20%", top: "30%", delay: 0 },
    { left: "78%", top: "25%", delay: 0.15 },
    { left: "50%", top: "18%", delay: 0.3 },
    { left: "32%", top: "55%", delay: 0.45 },
    { left: "68%", top: "58%", delay: 0.6 },
  ]

  return (
    <div className="cracker-stage">
      {bursts.map((burst, bIdx) => (
        <div
          key={bIdx}
          className="burst-origin"
          style={{ left: burst.left, top: burst.top, animationDelay: `${burst.delay}s` }}
        >
          {[...Array(16)].map((_, i) => {
            const angle = (360 / 16) * i
            const color = colors[i % colors.length]
            return (
              <span
                key={i}
                className="spark"
                style={{
                  "--angle": `${angle}deg`,
                  background: color,
                  boxShadow: `0 0 6px 1px ${color}`,
                  animationDelay: `${burst.delay}s`,
                }}
              />
            )
          })}
        </div>
      ))}

      <style>{`
        .cracker-stage {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 40;
          overflow: hidden;
        }

        .burst-origin {
          position: absolute;
          width: 0;
          height: 0;
        }

        .spark {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          left: 0;
          top: 0;
          opacity: 0;
          transform: rotate(var(--angle)) translateX(0);
          animation: sparkFly 1.1s ease-out forwards;
        }

        @keyframes sparkFly {
          0% {
            opacity: 1;
            transform: rotate(var(--angle)) translateX(0) scale(1);
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle)) translateX(90px) scale(0.3);
          }
        }
      `}</style>
    </div>
  )
}

export default function Cake() {

  const [blown, setBlown] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="min-h-screen romantic-bg flex flex-col items-center justify-center overflow-hidden relative">

      <GlassHearts count={6} />

      {blown && <Confetti />}
      {blown && <CrackerBurst />}

      <h1 className="text-5xl mb-8 relative z-10">
        🎂 Happy Birthday ❤️
      </h1>

      <div className="cake-scene relative z-10">
        <div className="cake-3d">

          {/* plate */}
          <div className="plate" />

          {/* bottom tier */}
          <div className="tier tier-bottom">
            <div className="tier-top" />
            <div className="tier-side" />
            <div className="drip drip-bottom" />
          </div>

          {/* top tier */}
          <div className="tier tier-top-tier">
            <div className="tier-top" />
            <div className="tier-side" />
            <div className="drip drip-top" />
          </div>

          {/* candles */}
          <div className="candles">
            {[0, 1, 2].map((i) => (
              <div className="candle" key={i}>
                <div className="wick" />
                <div className={`flame ${blown ? "flame-out" : ""}`} />
                <div className="wax" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {!blown ? (
        <button
          onClick={() => setBlown(true)}
          className="
            mt-10
            px-8
            py-3
            romantic-btn
            rounded-full
            relative
            z-10
          "
        >
          Blow Candles ❤️
        </button>
      ) : (
        <>
          <h2 className="mt-8 text-3xl relative z-10">
            Happy Birthday Abhaya ❤️
          </h2>

          <button
            onClick={() => navigate("/gift")}
            className="
              mt-8
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
      )}

      <style>{`
        .cake-scene {
          width: 320px;
          height: 320px;
          perspective: 1000px;
        }

        .cake-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(10deg) rotateY(-18deg);
          animation: cakeSpin 10s ease-in-out infinite alternate;
        }

        @keyframes cakeSpin {
          0% { transform: rotateX(10deg) rotateY(-18deg); }
          100% { transform: rotateX(10deg) rotateY(18deg); }
        }

        .plate {
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 260px;
          height: 26px;
          margin-left: -130px;
          background: linear-gradient(180deg, #f1f1f1, #d8d8d8);
          border-radius: 50%;
          box-shadow:
            0 6px 14px rgba(0,0,0,0.25),
            inset 0 2px 4px rgba(255,255,255,0.6);
          transform: translateZ(-10px);
        }

        .tier {
          position: absolute;
          left: 50%;
        }

        .tier-bottom {
          bottom: 46px;
          width: 200px;
          height: 90px;
          margin-left: -100px;
        }

        .tier-top-tier {
          bottom: 128px;
          width: 140px;
          height: 70px;
          margin-left: -70px;
        }

        .tier-side {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(
            100deg,
            #ffd9e8 0%,
            #ff9bc1 35%,
            #ff7eb0 60%,
            #ff5c9c 100%
          );
          box-shadow:
            inset -10px 0 18px rgba(0,0,0,0.15),
            inset 10px 0 18px rgba(255,255,255,0.25),
            0 14px 24px rgba(0,0,0,0.2);
        }

        .tier-top {
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(180deg, #fff5fa, #ffe3ef);
          box-shadow: inset 0 -4px 8px rgba(255,120,170,0.25);
          transform: translateZ(2px);
        }

        .drip {
          position: absolute;
          top: 8px;
          left: 0;
          right: 0;
          height: 18px;
          background-repeat: repeat-x;
          background-size: 24px 18px;
          opacity: 0.9;
        }

        .drip-bottom {
          background-image: radial-gradient(circle at 50% 0%, #fff 0 6px, transparent 7px);
        }

        .drip-top {
          background-image: radial-gradient(circle at 50% 0%, #ffe066 0 6px, transparent 7px);
        }

        .candles {
          position: absolute;
          bottom: 196px;
          left: 50%;
          width: 90px;
          margin-left: -45px;
          display: flex;
          justify-content: space-between;
          transform: translateZ(6px);
        }

        .candle {
          position: relative;
          width: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wax {
          width: 10px;
          height: 38px;
          background: repeating-linear-gradient(
            180deg,
            #8ecaff 0 6px,
            #6fb6ff 6px 12px
          );
          border-radius: 3px;
          box-shadow: inset -2px 0 4px rgba(0,0,0,0.15);
        }

        .wick {
          width: 2px;
          height: 8px;
          background: #4a3c31;
          order: 2;
          margin-top: -2px;
        }

        .flame {
          width: 11px;
          height: 18px;
          margin-bottom: -2px;
          background: radial-gradient(
            circle at 50% 65%,
            #fff7c2 0%,
            #ffd23f 35%,
            #ff8a3d 70%,
            #ff5b1f 100%
          );
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 0 0 12px 4px rgba(255, 170, 60, 0.7);
          animation: flicker 0.6s ease-in-out infinite alternate;
          transform-origin: bottom center;
          transition: opacity 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        @keyframes flicker {
          0% { transform: scale(1) rotate(-2deg); }
          50% { transform: scale(1.08) rotate(2deg); }
          100% { transform: scale(0.96) rotate(-1deg); }
        }

        .flame-out {
          opacity: 0;
          box-shadow: none;
          animation: none;
          transform: scale(0.3);
        }
      `}</style>

    </div>
  )
}