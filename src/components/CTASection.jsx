import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030305]
        py-16
        sm:py-20
        lg:py-24
      "
      id="cta"
    >
    
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/[0.12] blur-[120px]" />

        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/[0.10] blur-[110px]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.16em] text-mist-400"
        >
          <Sparkles className="h-3 w-3 text-cyan-300" />
          Start creating
        </motion.div>

        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-3xl
            font-semibold
            leading-tight
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Your next idea
          <br />

          <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
            starts here.
          </span>
        </motion.h2>

       
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="
            mx-auto
            mt-3
            max-w-lg
            text-xs
            leading-relaxed
            text-mist-500
            sm:text-sm
          "
        >
          Turn imagination into production-ready content with one
          intelligent creative workspace.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="
            mt-6
            flex
            flex-col
            items-center
            justify-center
            gap-2.5
            sm:flex-row
          "
        >
          <Link
            to="/create"
            className="
              btn-primary
              px-5
              py-2.5
              text-xs
            "
          >
            Start Creating
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <Link
            to="/studios"
            className="
              btn-secondary
              px-5
              py-2.5
              text-xs
            "
          >
            Explore Platform
          </Link>
        </motion.div>
      </div>
    </section>
  )
}