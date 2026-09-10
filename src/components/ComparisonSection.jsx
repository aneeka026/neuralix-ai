import { motion } from 'framer-motion'
import {
  Image,
  Video,
  Music,
  Mic,
  Wand2,
  Check,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const traditional = [
  { icon: Image, label: 'Image Tool' },
  { icon: Video, label: 'Video Tool' },
  { icon: Music, label: 'Music Tool' },
  { icon: Mic, label: 'Voice Tool' },
  { icon: Wand2, label: 'Editing Tool' },
]

const unified = [
  'Image',
  'Video',
  'Audio',
  'Voice',
  'Editing',
]

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="            
        relative
        overflow-hidden
        bg-[#030305]
        py-10
        sm:py-12
        lg:h-[calc(100vh-80px)]
        lg:min-h-[560px]
        lg:max-h-[700px]
        lg:py-6
      "
    >
     
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/[0.06] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      <div className="container-px relative z-10 mx-auto flex h-full max-w-6xl flex-col">

       
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.15em] text-mist-400">
            <Sparkles className="h-3 w-3 text-cyan-300" />
            Why Neuralix
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
            Stop switching
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
              between tools.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-[10px] leading-relaxed text-mist-500 sm:text-xs">
            Everything you need to create, edit and transform
            content inside one intelligent workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="
            relative
            mt-6
            min-h-0
            flex-1
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.02]
          "
        >
          <div className="grid h-full lg:grid-cols-[1fr_auto_1fr]">

            <div className="flex flex-col p-4 sm:p-5 lg:p-6">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-mist-500">
                    Before
                  </p>

                  <h3 className="mt-1 text-sm font-medium text-white sm:text-base">
                    Traditional workflow
                  </h3>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[8px] text-mist-500">
                  Multiple tools
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                {traditional.map((tool, index) => {
                  const ToolIcon = tool.icon

                  return (
                    <motion.div
                      key={tool.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        border
                        border-white/[0.06]
                        bg-white/[0.015]
                        px-3
                        py-2
                      "
                    >
                      <div className="flex items-center gap-2.5 text-[10px] text-mist-400 sm:text-xs">
                        <span className="grid h-6 w-6 place-items-center rounded-md bg-white/[0.03]">
                          <ToolIcon className="h-3 w-3 text-mist-500" />
                        </span>

                        {tool.label}
                      </div>

                      <X className="h-3 w-3 text-red-400/60" />
                    </motion.div>
                  )
                })}
              </div>

            </div>

            <div className="relative hidden w-px bg-white/[0.08] lg:block">

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  grid
                  h-8
                  w-8
                  -translate-x-1/2
                  -translate-y-1/2
                  place-items-center
                  rounded-full
                  border
                  border-white/10
                  bg-[#08080b]
                "
              >
                <ArrowRight className="h-3.5 w-3.5 text-violet-300" />
              </div>

            </div>

            <div className="flex items-center justify-center border-y border-white/[0.06] py-1.5 lg:hidden">
              <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                <ArrowRight className="h-3 w-3 rotate-90 text-violet-300" />
              </div>
            </div>

            <div
              className="
                relative
                flex
                flex-col
                overflow-hidden
                bg-gradient-to-br
                from-violet-500/[0.08]
                via-transparent
                to-cyan-500/[0.06]
                p-4
                sm:p-5
                lg:p-6
              "
            >

           
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-[60px]" />

              <div className="relative flex items-center justify-between">

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    After
                  </p>

                  <h3 className="mt-1 text-sm font-medium text-white sm:text-base">
                    Neuralix workspace
                  </h3>
                </div>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-2 py-1 text-[8px] text-cyan-300">
                  One platform
                </div>

              </div>

            
              <div className="relative mt-4 flex flex-col gap-1.5">
                {unified.map((label, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-2
                    "
                  >
                    <div className="flex items-center gap-2.5 text-[10px] text-white sm:text-xs">
                      <span className="grid h-6 w-6 place-items-center rounded-md border border-cyan-400/10 bg-cyan-400/[0.06]">
                        <Check className="h-3 w-3 text-cyan-300" />
                      </span>

                      {label}
                    </div>

                    <span className="text-[8px] text-cyan-300/70">
                      Ready
                    </span>
                  </motion.div>
                ))}
              </div>



            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}