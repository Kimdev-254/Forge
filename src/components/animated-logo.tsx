"use client"

import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative w-16 h-16 flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 border-4 border-primary rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <span className="text-2xl font-bold text-primary z-10">F</span>
    </motion.div>
  )
}
