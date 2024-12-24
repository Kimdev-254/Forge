"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingAnimation() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000) // 4 seconds loading time
    return () => clearTimeout(timer)
  }, [])

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: 2,
        repeatType: "reverse" as const,
      },
    }),
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  }

  const dotVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  }

  const forgeEffect = {
    initial: { filter: "blur(10px) brightness(1.5)", opacity: 0 },
    animate: {
      filter: [
        "blur(10px) brightness(1.5)",
        "blur(0px) brightness(1)",
        "blur(5px) brightness(1.2)",
        "blur(0px) brightness(1)",
      ],
      opacity: 1,
      transition: { duration: 2, times: [0, 0.3, 0.6, 1] },
    },
  }

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50 overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
        >
          {/* Enhanced green lighting effect */}
          <div className="absolute inset-0 bg-gradient-radial from-green-500/30 via-green-700/20 to-transparent animate-pulse" />

          <motion.div
            className="relative"
            variants={forgeEffect}
            initial="initial"
            animate="animate"
          >
            <div className="text-6xl font-bold text-primary flex items-center">
              {"FORGE".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={i}
                  className="relative"
                >
                  {letter}
                  <motion.span
                    className="absolute inset-0 text-green-400 opacity-50 blur-sm"
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={i}
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="flex mt-4">
            {["bg-red-500", "bg-yellow-500", "bg-blue-500"].map((color, i) => (
              <motion.span
                key={i}
                className={`w-3 h-3 ${color} rounded-full mx-2`}
                variants={dotVariants}
                initial="initial"
                animate="animate"
                custom={i}
              />
            ))}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
