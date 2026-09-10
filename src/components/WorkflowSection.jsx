import { motion } from 'framer-motion'
import { PenLine, SlidersHorizontal, Download, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PenLine,
    title: 'Describe',
    description: 'Tell the AI what you want.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Refine',
    description: 'Adjust, remix and improve.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Export',
    description: 'Download and share your creation.',
  },
]

export default function WorkflowSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-ink-900/40
        py-12
        sm:py-16
        lg:h-[calc(100vh-80px)]
        lg:min-h-[500px]
        lg:max-h-[650px]
        lg:py-8
      "
      id="workflow"
    >
    
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-600/[0.05] blur-[110px]" />
        <div className="absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.05] blur-[110px]" />
      </div>

      <div className="container-px relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center">
        
       
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-mist-400">
            <Sparkles className="h-3 w-3 text-cyan-300" />
            Simple workflow
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
            From idea to
            <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
              {' '}creation.
            </span>
          </h2>

          <p className="mt-2 max-w-md text-[10px] leading-relaxed text-mist-500 sm:text-xs">
            Create powerful content in three simple steps.
          </p>
        </motion.div>

        
        <div className="relative mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-10">

        
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="
              absolute
              left-[8%]
              right-[8%]
              top-6
              hidden
              h-px
              origin-left
              bg-gradient-to-r
              from-violet-400/50
              via-cyan-400/60
              to-violet-400/50
              sm:block
            "
          />

          {steps.map((step, i) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.12,
                }}
                className="relative"
              >
              
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-ink-950 shadow-glow">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>

             
                <span className="mt-4 block font-display text-[10px] text-mist-500">
                  {step.number}
                </span>

               
                <h3 className="mt-1.5 text-lg font-medium text-white sm:text-xl">
                  {step.title}
                </h3>

               
                <p className="mt-1.5 max-w-xs text-[10px] leading-relaxed text-mist-500 sm:text-xs">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}