import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Toast({ message, show }) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="glass flex items-center gap-3 rounded-2xl px-5 py-4 shadow-glow"
          >
            <CheckCircle2 className="h-5 w-5 text-cyan-400" />
            <span className="text-sm text-mist-100">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
