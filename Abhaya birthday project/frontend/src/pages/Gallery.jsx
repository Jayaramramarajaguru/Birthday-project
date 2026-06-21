import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import GlassHearts from "../components/GlassHearts"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const avatars = [
  {
    image: "/avatars/avatar1.png",
    caption: "My Favorite Smile ❤️",
  },
  {
    image: "/avatars/avatar2.png",
    caption: "Birthday Girl 🎂❤️",
  },
  {
    image: "/avatars/avatar3.png",
    caption: "My Happiness ❤️",
  },
  {
    image: "/avatars/avatar4.png",
    caption: "Princess Abhaya 👑❤️",
  },
]

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 py-10 relative">
      <GlassHearts count={8} />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10 relative z-10"
      >
        📸 Our Memories ❤️
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl relative z-10"
      >
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
          ]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {avatars.map((avatar, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">

                <img
                  src={avatar.image}
                  alt={avatar.caption}
                  className="
                    w-72
                    h-72
                    md:w-80
                    md:h-80
                    object-cover
                    rounded-3xl
                    mx-auto
                    border-4
                    border-red-500
                    shadow-2xl
                  "
                />

                <h2 className="mt-6 text-2xl font-semibold">
                  {avatar.caption}
                </h2>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Premium Memory Message */}
      <div className="mt-10 text-center max-w-xl relative z-10">
        <p className="text-red-200 text-lg leading-8">
          Every moment may not be captured,
          <br />
          but every memory is stored in my heart ❤️
        </p>
      </div>

      <button
        onClick={() => navigate("/reasons")}
        className="
          mt-10
          px-8
          py-3
          romantic-btn
          hover:romantic-btn
          rounded-full
          text-lg
          font-semibold
          transition
          duration-300
          relative
          z-10
        "
      >
        Continue ❤️
      </button>

    </div>
  )
}
