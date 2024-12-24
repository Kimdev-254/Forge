"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedNumber({
  value,
  className,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isInView && isMounted) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView, isMounted])

  useEffect(() => {
    if (isMounted) {
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = prefix + latest.toFixed(0) + suffix
        }
      })
    }
  }, [springValue, prefix, suffix, isMounted])

  return <span ref={ref} className={className} />
}
