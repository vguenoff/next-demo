'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 150 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

const PageTransitionEffect = ({ children }: { children: ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname()

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransitionEffect
