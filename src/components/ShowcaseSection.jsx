import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, Sparkles } from 'lucide-react'
import { showcase, showcaseFilters } from '../data/showcase.js'

export default function ShowcaseSection() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible = useMemo(
    () =>
      filter === 'All'
        ? showcase
        : showcase.filter((s) => s.category === filter),
    [filter]
  )

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030305]
        py-12
        sm:py-16
        lg:py-20
      "
      id="showcase"
    >
 
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/[0.05] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-6xl">

       
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
      
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-mist-400">
              <Sparkles className="h-3 w-3 text-cyan-300" />
              AI Showcase
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
              Made with AI.
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Inspired by imagination.
              </span>
            </h2>

            <p className="mt-2 max-w-md text-[10px] leading-relaxed text-mist-500 sm:text-xs">
              Explore creations made with Neuralix AI tools.
            </p>
          </div>

        
          <div className="flex flex-wrap gap-1.5 sm:justify-end">
            {showcaseFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-[9px]
                  transition-all
                  duration-200
                  sm:px-3.5
                  sm:text-[10px]
                  ${
                    filter === f
                      ? 'border-transparent bg-gradient-to-r from-violet-500 to-cyan-500 font-medium text-ink-950'
                      : 'border-white/10 bg-white/[0.02] text-mist-400 hover:border-white/20 hover:text-white'
                  }
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="
            mt-7
            grid
            grid-cols-2
            gap-2.5
            sm:gap-3
            lg:grid-cols-4
          "
        >
          <AnimatePresence mode="popLayout">
            {visible.slice(0, 8).map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                onClick={() => setActive(item)}
                className="
                  group
                  relative
                  block
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-left
                  sm:rounded-2xl
                "
              >
               
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/10
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

               
                <span
                  className="
                    absolute
                    left-2.5
                    top-2.5
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    px-2
                    py-1
                    text-[8px]
                    text-mist-100
                    backdrop-blur-md
                    sm:left-3
                    sm:top-3
                    sm:text-[9px]
                  "
                >
                  {item.category}
                </span>

              
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-3
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    sm:p-4
                  "
                >
                  <span className="text-[8px] text-cyan-300 sm:text-[9px]">
                    {item.model}
                  </span>

                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <span className="truncate text-[10px] font-medium text-white sm:text-xs">
                      {item.title}
                    </span>

                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 bg-black/30">
                      <ArrowUpRight className="h-3 w-3 text-white" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        
        {visible.length > 8 && (
          <div className="mt-5 text-center">
            <span className="text-[9px] text-mist-600">
              Showing 8 creations
            </span>
          </div>
        )}
      </div>

     
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[90]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-sm
              sm:p-6
            "
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[85vh]
                w-full
                max-w-2xl
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#08080b]
                shadow-2xl
                sm:rounded-3xl
              "
            >
            
              <button
                onClick={() => setActive(null)}
                aria-label="Close preview"
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  grid
                  h-8
                  w-8
                  place-items-center
                  rounded-full
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-colors
                  hover:bg-black/70
                  sm:right-4
                  sm:top-4
                  sm:h-9
                  sm:w-9
                "
              >
                <X className="h-4 w-4" />
              </button>

          
              <img
                src={active.image}
                alt={active.title}
                className="
                  max-h-[65vh]
                  w-full
                  object-cover
                "
              />

             
              <div className="p-4 sm:p-6">
                <span className="text-[9px] text-cyan-300 sm:text-xs">
                  {active.category} · {active.model}
                </span>

                <h3 className="mt-1 text-base font-medium text-white sm:text-xl">
                  {active.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}