import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'

const userMessage =
  'Create a cinematic product campaign for a futuristic watch.'

const outputs = [
  {
    label: 'Concept',
    text: 'Moonlit studio, chrome watch face, slow orbital camera move.',
  },
  {
    label: 'Image',
    image: 'https://images.unsplash.com/photo-1578847395078-2c98457bce4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9vbmxpdCUyMHN0dWRpbyUyQyUyMGNocm9tZSUyMHdhdGNoJTIwZmFjZSUyQyUyMHNsb3clMjBvcmJpdGFsJTIwY2FtZXJhJTIwbW92ZS58ZW58MHx8MHx8fDA%3D',
  },
  {
    label: 'Video',
    image: 'https://images.unsplash.com/photo-1626277787166-ab47350c79bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGltZSUyQyUyMHJlaW1hZ2luZWQuJTIyJTIwJUUyJTgwJTk0JTIwaGVhZGxpbmUlMjBmb3IlMjB0aGUlMjBjYW1wYWlnbiUyMGhlcm8lMjBmcmFtZS4nfGVufDB8fDB8fHww',
  },
  {
    label: 'Copy',
    text: '"Time, reimagined." - headline for the campaign hero frame.',
  },
]

export default function AgentSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 900),
      setTimeout(() => setStage(2), 2200),
      setTimeout(() => setStage(3), 3200),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

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
      id="agent"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/[0.05] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-mist-400">
            <Sparkles className="h-3 w-3 text-cyan-300" />
            AI Agent
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
            Meet your creative agent.
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-[10px] leading-relaxed text-mist-500 sm:text-xs">
            Describe a campaign in plain language — your agent plans and
            generates every asset.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="
            mt-7
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.02]
            p-3
            shadow-[0_0_50px_rgba(139,92,246,0.06)]
            sm:p-5
            lg:p-6
          "
        >

          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />

            <span className="text-[9px] text-mist-500">
              Agent online
            </span>

            <span className="ml-auto text-[8px] uppercase tracking-wider text-mist-600">
              Creative workspace
            </span>
          </div>


          <div className="mt-4 flex flex-col gap-3">


            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="
                ml-auto
                max-w-md
                rounded-xl
                rounded-tr-sm
                border
                border-violet-400/10
                bg-gradient-to-br
                from-violet-500/20
                to-cyan-500/10
                px-3
                py-2.5
                text-[10px]
                leading-relaxed
                text-mist-100
                sm:text-xs
              "
            >
              {userMessage}
            </motion.div>


            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex max-w-md items-start gap-2.5"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                  <Bot className="h-3.5 w-3.5 text-cyan-300" />
                </span>

                <div className="rounded-xl rounded-tl-sm border border-white/[0.08] bg-white/[0.025] px-3 py-2.5">
                  {stage === 1 ? (
                    <span className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-mist-300"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </span>
                  ) : (
                    <span className="text-[10px] text-mist-200 sm:text-xs">
                      Generating concept...
                    </span>
                  )}
                </div>
              </motion.div>
            )}


            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="grid gap-2 sm:grid-cols-2"
              >
                {outputs.map((output, index) => (
                  <motion.div
                    key={output.label}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.06,
                    }}
                    className="
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                    "
                  >

                    <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-3 py-2 text-[9px] text-cyan-300">
                      <Sparkles className="h-3 w-3" />
                      {output.label}
                    </div>


                    {output.image ? (
                      <img
                        src={output.image}
                        alt={`${output.label} generated for the watch campaign`}
                        loading="lazy"
                        className="h-24 w-full object-cover sm:h-28"
                      />
                    ) : (
                      <p className="p-3 text-[10px] leading-relaxed text-mist-300 sm:text-xs">
                        {output.text}
                      </p>
                    )}
                  </motion.div>
                ))}


                <div className="col-span-full flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/[0.07] px-3 py-2.5 text-[10px] text-cyan-200 sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  Campaign ready — 4 assets generated.
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}