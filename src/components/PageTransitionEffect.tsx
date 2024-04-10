'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import type { PropsWithChildren } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 150 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

const PageTransitionEffect = ({ children }: PropsWithChildren) => {
  const key = usePathname()
  const pageRendered = useRef(false)

  useEffect(() => {
    pageRendered.current = true
  }, [])

  return (
    <>
      {pageRendered.current ? (
        <AnimatePresence mode="popLayout">
          <motion.div
            key={key}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            // className="overflow-hidden"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      ) : (
        children
      )}
    </>
  )
}

export default PageTransitionEffect
