import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { features } from '../data/features.js'

export default function FeatureGrid() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeFeature = features[activeIndex]

  const ActiveIcon =
    Icons[activeFeature?.icon] ?? Icons.Sparkles

  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#030305]
        py-6
        sm:py-8
        lg:h-[calc(100vh-80px)]
        lg:min-h-[560px]
        lg:max-h-[700px]
        lg:py-5
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-48
            top-1/3
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[130px]
          "
        />

      </div>

      <div
        className="
          container-px
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-6xl
          flex-col
          pt-20
          sm:pt-8
          lg:pt-20
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >

          <div
            className="
              mb-2
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-3
              py-1.5
              text-[9px]
              font-medium
              tracking-[0.12em]
              text-mist-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            POWERED BY AI
          </div>

          <h2
            className="
              text-2xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-3xl
              lg:text-[36px]
            "
          >
            One AI workspace.

            <br />

            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-white
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Infinite creative possibilities.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-xl
              text-[11px]
              leading-relaxed
              text-mist-400
              sm:text-xs
            "
          >
            Create images, videos, music and more with powerful AI tools
            designed to turn your ideas into reality.
          </p>

        </motion.div>

        <div
          className="
            mt-5
            flex
            min-h-0
            flex-1
            items-center
            lg:mt-6
          "
        >

          <div
            className="
              grid
              w-full
              items-center
              gap-4
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-6
            "
          >

            <div>

              <p
                className="
                  mb-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300/70
                "
              >
                Explore Features
              </p>

              <div className="space-y-1">

                {features.map((feature, index) => {

                  const Icon =
                    Icons[feature.icon] ?? Icons.Sparkles

                  const isActive =
                    activeIndex === index

                  return (
                    <button
                      key={feature.title}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-2
                        rounded-xl
                        border
                        px-3
                        py-1
                        text-left
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              border-violet-400/60
                              bg-white/[0.055]
                              shadow-[0_8px_30px_rgba(124,58,237,0.12)]
                            `
                            : `
                              border-transparent
                              hover:border-white/10
                              hover:bg-white/[0.025]
                            `
                        }
                      `}
                    >

                      {isActive && (
                        <motion.div
                          layoutId="activeFeature"
                          className="
                            absolute
                            inset-0
                            rounded-xl
                            bg-gradient-to-r
                            from-violet-500/[0.08]
                            to-cyan-500/[0.03]
                          "
                          transition={{
                            duration: 0.3,
                          }}
                        />
                      )}

                      <span
                        className={`
                          relative
                          z-10
                          w-5
                          text-[9px]
                          font-semibold
                          ${
                            isActive
                              ? 'text-cyan-300'
                              : 'text-mist-600'
                          }
                        `}
                      >
                        {feature.number}
                      </span>

                      <span
                        className={`
                          relative
                          z-10
                          grid
                          h-7
                          w-7
                          shrink-0
                          place-items-center
                          rounded-lg
                          border
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? `
                                border-violet-400/30
                                bg-gradient-to-br
                                from-violet-500/20
                                to-cyan-500/10
                              `
                              : `
                                border-white/10
                                bg-white/[0.025]
                              `
                          }
                        `}
                      >
                        <Icon
                          className={`
                            h-3.5
                            w-3.5
                            transition-colors
                            ${
                              isActive
                                ? 'text-cyan-300'
                                : 'text-mist-500'
                            }
                          `}
                        />
                      </span>

                      <div className="relative z-10 min-w-0 flex-1">

                        <p
                          className={`
                            truncate
                            text-xs
                            font-medium
                            transition-colors
                            ${
                              isActive
                                ? 'text-white'
                                : 'text-mist-400'
                            }
                          `}
                        >
                          {feature.title}
                        </p>

                        <p
                          className={`
                            mt-0.5
                            truncate
                            text-[9px]
                            ${
                              isActive
                                ? 'text-mist-400'
                                : 'text-mist-600'
                            }
                          `}
                        >
                        </p>

                      </div>

                      <ChevronRight
                        className={`
                          relative
                          z-10
                          h-3.5
                          w-3.5
                          shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? `
                                translate-x-0
                                text-cyan-300
                              `
                              : `
                                -translate-x-1
                                text-mist-600
                              `
                          }
                        `}
                      />

                    </button>
                  )
                })}

              </div>

              <p
                className="
                  mt-2
                  text-[9px]
                  text-mist-600
                "
              >
                Select a feature to explore
              </p>

            </div>

            <div
              className="
                relative
                h-[280px]
                sm:h-[250px]
                lg:h-[270px]
                xl:h-[280px]
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-8
                  rounded-[40px]
                  bg-violet-500/[0.07]
                  blur-[70px]
                "
              />

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.09]
                  bg-white/[0.025]
                  p-2
                  shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                "
              >

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[18px]
                  "
                >

                  <AnimatePresence mode="wait">

                    <motion.img
                      key={activeFeature.image}
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: 'easeOut',
                      }}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                      "
                    />

                  </AnimatePresence>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/20
                      to-black/10
                    "
                  />

                  <div
                    className="
                      absolute
                      left-4
                      right-4
                      top-4
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <AnimatePresence mode="wait">

                      <motion.span
                        key={activeFeature.number}
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 5,
                        }}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-black/40
                          px-2.5
                          py-1
                          text-[9px]
                          font-medium
                          tracking-[0.12em]
                          text-white/80
                          backdrop-blur-md
                        "
                      >
                        {activeFeature.number}
                      </motion.span>

                    </AnimatePresence>

                    <motion.div
                      key={activeFeature.icon}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        backdrop-blur-md
                      "
                    >
                      <ActiveIcon
                        className="
                          h-4
                          w-4
                          text-cyan-300
                        "
                      />
                    </motion.div>

                  </div>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-4
                      sm:p-5
                    "
                  >

                    <AnimatePresence mode="wait">

                      <motion.div
                        key={activeFeature.title}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -8,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >

                        <p
                          className="
                            mb-1.5
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-cyan-300
                          "
                        >
                          Neuralix AI
                        </p>

                        <h3
                          className="
                            text-xl
                            font-semibold
                            leading-tight
                            text-white
                            sm:text-2xl
                          "
                        >
                          {activeFeature.title}
                        </h3>

                        <p
                          className="
                            mt-2
                            max-w-lg
                            text-[10px]
                            leading-relaxed
                            text-white/60
                            sm:text-xs
                          "
                        >
                          {activeFeature.description}
                        </p>

                        <button
                          className="
                            mt-3
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.06]
                            px-3
                            py-1.5
                            text-[9px]
                            font-medium
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:border-cyan-400/30
                            hover:bg-cyan-400/10
                          "
                        >
                          Explore feature

                          <ArrowUpRight
                            className="h-3 w-3"
                          />
                        </button>

                      </motion.div>

                    </AnimatePresence>

                  </div>

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      items-center
                      gap-1.5
                    "
                  >

                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setActiveIndex(index)
                        }
                        aria-label={`Show feature ${index + 1}`}
                      >
                        <motion.span
                          animate={{
                            width:
                              index === activeIndex
                                ? 18
                                : 5,
                            opacity:
                              index === activeIndex
                                ? 1
                                : 0.35,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            block
                            h-1
                            rounded-full
                            bg-white
                          "
                        />
                      </button>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}