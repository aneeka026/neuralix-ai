import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Zap, Brain } from 'lucide-react'

const blocks = [
  {
    icon: Layers,
    title: 'No Tool Switching',
    description: 'Move between creative workflows without leaving the workspace.',
  },
  {
    icon: Zap,
    title: 'Creative Freedom',
    description: 'Experiment quickly and turn ideas into visual concepts.',
  },
  {
    icon: Brain,
    title: 'One Intelligent Workspace',
    description: 'Keep ideas, generations and workflows together.',
  },
]

export default function FutureSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="section-pad bg-ink-900/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              The future of creation
              <br />
              is already here.
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {blocks.map((block) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <block.icon className="h-5 w-5 text-cyan-300" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{block.title}</h3>
                    <p className="mt-1 text-sm text-mist-400">{block.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div style={{ y }} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] shadow-glow-cyan">
              <img
                src="https://images.unsplash.com/photo-1761888855526-674732099103?w=900&h=1000&fit=crop&q=80"
                alt="Abstract creative visual representing the NEURALIX workspace"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
