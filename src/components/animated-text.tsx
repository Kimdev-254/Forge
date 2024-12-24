"use client"

import { motion } from "framer-motion"

export function AnimatedText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
            ease: "easeOut",
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
