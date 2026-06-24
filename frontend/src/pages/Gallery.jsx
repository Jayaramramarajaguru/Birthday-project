// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Pagination, Autoplay } from "swiper/modules"
// import { useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"
// import GlassHearts from "../components/GlassHearts"

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// const avatars = [
//   {
//     image: "/avatars/avatar1.png",
//     caption: "My Favorite Smile ❤️",
//   },
//   {
//     image: "/avatars/avatar2.png",
//     caption: "Birthday Girl 🎂❤️",
//   },
//   {
//     image: "/avatars/avatar3.png",
//     caption: "My Happiness ❤️",
//   },
//   {
//     image: "/avatars/avatar4.png",
//     caption: "Princess Abhaya 👑❤️",
//   },
// ]

// export default function Gallery() {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-screen romantic-bg flex flex-col items-center justify-center px-6 py-10 relative">
//       <GlassHearts count={8} />

//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-10 relative z-10"
//       >
//         📸 Our Memories ❤️
//       </motion.h1>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="w-full max-w-2xl relative z-10"
//       >
//         <Swiper
//           modules={[
//             Navigation,
//             Pagination,
//             Autoplay,
//           ]}
//           navigation
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//         >
//           {avatars.map((avatar, index) => (
//             <SwiperSlide key={index}>
//               <div className="text-center">

//                 <img
//                   src={avatar.image}
//                   alt={avatar.caption}
//                   className="
//                     w-72
//                     h-72
//                     md:w-80
//                     md:h-80
//                     object-cover
//                     rounded-3xl
//                     mx-auto
//                     border-4
//                     border-red-500
//                     shadow-2xl
//                   "
//                 />

//                 <h2 className="mt-6 text-2xl font-semibold">
//                   {avatar.caption}
//                 </h2>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>

      // {/* Premium Memory Message */}
      // <div className="mt-10 text-center max-w-xl relative z-10">
      //   <p className="text-red-200 text-lg leading-8">
      //     Every moment may not be captured,
      //     <br />
      //     but every memory is stored in my heart ❤️
      //   </p>
      // </div>

//       <button
//         onClick={() => navigate("/reasons")}
//         className="
//           mt-10
//           px-8
//           py-3
//           romantic-btn
//           hover:romantic-btn
//           rounded-full
//           text-lg
//           font-semibold
//           transition
//           duration-300
//           relative
//           z-10
//         "
//       >
//         Continue ❤️
//       </button>

//     </div>
//   )
// }

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import GlassHearts from "../components/GlassHearts"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const avatars = [
  { image: "/avatars/avatar1.png", caption: "My Favorite Smile ❤️" },
  { image: "/avatars/avatar2.png", caption: "Birthday Girl 🎂❤️" },
  { image: "/avatars/avatar3.png", caption: "My Happiness ❤️" },
  { image: "/avatars/avatar4.png", caption: "Princess Abhaya 👑❤️" },
]

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a0000 0%, #0d0000 60%, #000000 100%)" }}
    >
      <GlassHearts count={8} />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
        <div className="flex items-center gap-2">
          <span className="text-red-400 text-lg">≡</span>
          <span className="text-white text-sm font-light tracking-widest">For Abahaya Shree</span>
          <span className="text-red-500 text-sm">❤</span>
        </div>
        <span className="text-white text-lg">♪</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-10 relative z-10"
        style={{ textShadow: "0 0 20px rgba(255,50,80,0.4)" }}
      >
        My Favorite Moments ❤️
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm relative z-10"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {avatars.map((avatar, index) => (
            <SwiperSlide key={index}>
              <div className="text-center pb-10">
                {/* Framed image */}
                <div
                  className="mx-auto rounded-2xl overflow-hidden"
                  style={{
                    width: "280px",
                    height: "280px",
                    border: "3px solid rgba(180, 0, 30, 0.6)",
                    boxShadow: "0 0 40px rgba(150,0,20,0.5), 0 20px 40px rgba(0,0,0,0.6)",
                    background: "rgba(20,0,0,0.5)"
                  }}
                >
                  <img
                    src={avatar.image}
                    alt={avatar.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">{avatar.caption}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav arrows */}
        <button
          className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white -ml-4"
          style={{ background: "rgba(120,0,20,0.7)", border: "1px solid rgba(255,80,100,0.3)" }}
        >
          ❮
        </button>
        <button
          className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white -mr-4"
          style={{ background: "rgba(120,0,20,0.7)", border: "1px solid rgba(255,80,100,0.3)" }}
        >
          ❯
        </button>
      </motion.div>

            {/* Premium Memory Message */}
      <div className=" text-center max-w-xl relative z-10">
        <p className="text-red-200 text-lg leading-8">
          Every moment may not be captured,
          <br />
          but every memory is stored in my heart ❤️
        </p>
      </div>

      <button
        onClick={() => navigate("/reasons")}
        className="mt-10 px-8 py-3 text-white font-semibold rounded-full text-base tracking-wide relative z-10"
        style={{
          background: "linear-gradient(135deg, #7a0000, #b0001a)",
          border: "1px solid rgba(255,80,100,0.3)",
          boxShadow: "0 4px 20px rgba(120,0,20,0.5)"
        }}
      >
        Continue ❤️
      </button>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255,80,100,0.5) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #ff3366 !important;
        }
      `}</style>
    </div>
  )
}