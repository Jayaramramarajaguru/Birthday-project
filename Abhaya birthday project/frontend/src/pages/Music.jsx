import { useNavigate } from "react-router-dom"

import uyireycover from "../../public/music/uyirey-cover.jpg"
 
export default function Music() {

  const navigate = useNavigate()

  return (
 <div
  className="
  romantic-bg
  min-h-screen
  flex
  flex-col
  items-center
  px-6
  pt-5
  pb-1
  "
>

      <h4 className="romantic-title text-8xl mb-10">
        Our Song ❤️
      </h4>

      {/* Rotating Vinyl */}

      <div className="relative">

        <img
          src={uyireycover}
          alt="Uyirey"
          className="
            w-80
            h-80
            rounded-full
            border-[10px]
            border-red-500
            shadow-2xl
            animate-spin
          "
          style={{
            animationDuration: "10s"
          }}
        />

        {/* Vinyl Center */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-24
            h-24
            rounded-full
            bg-black
            border-4
            border-red-500
          "
        />
      </div>

      <p
        className="
        romantic-text
        text-xl
        mt-8
        text-center
        "
      >
        Every heartbeat reminds me of you ❤️
      </p>

      <audio
        controls
        className="mt-8 w-full max-w-md"
      >
        <source
          src="/music/Uyirey.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={() => navigate("/cake")}
        className="romantic-btn mt-10"
      >
        Continue ❤️
      </button>

    </div>
  )
}