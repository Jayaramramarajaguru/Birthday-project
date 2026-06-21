import { TypeAnimation } from "react-type-animation"

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        "Among millions of people...",
        2000,
        "I found someone who made life brighter...",
        2000,
        "That someone is you ❤️",
        3000,
      ]}
      wrapper="span"
      speed={50}
      repeat={0}
      className="text-2xl md:text-4xl text-red-200"
    />
  )
}   