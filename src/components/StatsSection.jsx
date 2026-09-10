import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp.js'

const stats = [
  { value: '500+', label: 'AI Models' },
  { value: '120+', label: 'Creative Tools' },
  { value: '4K', label: 'Maximum Output' },
  { value: '1M+', label: 'Creative Assets' },
]

function Stat({ value, label, index }) {
  const { ref, display } = useCountUp(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="text-center"
    >
      <div className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {display}
      </div>

      <div className="mt-1 text-[9px] text-mist-500 sm:text-[10px]">
        {label}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030305]
        py-6
        sm:py-8
      "
      id="stats"
    >
      <div className="container-px mx-auto max-w-6xl">

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-gradient-to-br
            from-violet-500/[0.07]
            via-white/[0.015]
            to-cyan-500/[0.07]
            px-4
            py-5
            sm:px-6
            sm:py-6
          "
        >
 
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[70px]" />

   
          <div className="relative mb-5 text-center">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Creativity never stops.
            </h2>

            <p className="mt-1 text-[9px] text-mist-500 sm:text-[10px]">
              Everything you need to bring your ideas to life.
            </p>
          </div>

    
          <div className="relative grid grid-cols-2 divide-x divide-y divide-white/[0.07] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="px-3 py-3 sm:px-4 sm:py-2"
              >
                <Stat
                  {...stat}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}