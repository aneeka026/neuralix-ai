import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center sm:pt-48">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-4xl font-semibold text-white sm:text-6xl"
      >
        {title}
      </motion.h1>
      {description && (
        <p className="mx-auto mt-5 max-w-xl text-lg text-mist-300">{description}</p>
      )}
    </div>
  )
}
