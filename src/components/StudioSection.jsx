import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { studios, studioFilters } from '../data/studios.js'

export default function StudioSection() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () =>
      filter === 'All'
        ? studios
        : studios.filter((s) => s.category === filter),
    [filter]
  )

  return (
    <section
      id="studios"
      className="
        relative
        overflow-hidden
        bg-[#030305]
        py-16
        sm:py-20
        lg:py-24
      "
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-48
            top-1/3
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-600/[0.055]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.045]
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
          max-w-6xl
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div className="max-w-xl">

            <div
              className="
                mb-4
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
                uppercase
                tracking-[0.15em]
                text-mist-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              Your Creative Workspace
            </div>

            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Create without limits.

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
                Choose your studio.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-relaxed
                text-mist-400
                sm:text-base
              "
            >
              Jump into a specialized AI studio and turn your ideas
              into images, videos, voices and complete creative
              experiences.
            </p>

          </div>

          <div
            className="
              flex
              max-w-full
              flex-wrap
              gap-2
              lg:max-w-md
              lg:justify-end
            "
          >

            {studioFilters.map((f) => {

              const isActive = filter === f

              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`
                    relative
                    rounded-full
                    border
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    ${isActive
                      ? `
                          border-transparent
                          bg-gradient-to-r
                          from-violet-500
                          to-cyan-500
                          text-[#030305]
                          shadow-[0_8px_25px_rgba(124,58,237,0.18)]
                        `
                      : `
                          border-white/10
                          bg-white/[0.02]
                          text-mist-400
                          hover:border-white/20
                          hover:bg-white/[0.05]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {f}
                </button>
              )
            })}

          </div>

        </motion.div>

        <div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-3
          "
        >

          <AnimatePresence mode="popLayout">

            {visible.map((studio, index) => {

              const Icon =
                Icons[studio.icon] ?? Icons.Sparkles

              return (
                <motion.div
                  layout
                  key={studio.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    transition-all
                    duration-300
                    hover:border-violet-400/30
                    hover:bg-white/[0.035]
                    hover:shadow-[0_20px_60px_rgba(124,58,237,0.10)]
                  "
                >

                  <div
                    className="
                      relative
                      h-36
                      overflow-hidden
                      sm:h-40
                    "
                  >

                    <img
                      src={studio.image}
                      alt={studio.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#030305]
                        via-black/20
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-violet-500/10
                        via-transparent
                        to-cyan-500/10
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-2.5
                        py-1
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                        backdrop-blur-md
                      "
                    >
                      {studio.category}
                    </span>

                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        grid
                        h-8
                        w-8
                        place-items-center
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          text-white
                        "
                      />
                    </div>

                  </div>

                  <div className="p-5">

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <div
                          className="
                            grid
                            h-7
                            w-7
                            place-items-center
                            rounded-lg
                            border
                            border-white/10
                            bg-white/[0.025]
                            transition-all
                            duration-300
                            group-hover:border-violet-400/30
                            group-hover:bg-violet-400/10
                          "
                        >
                          <Icon
                            className="
                              h-3.5
                              w-3.5
                              text-mist-400
                              transition-colors
                              duration-300
                              group-hover:text-cyan-300
                            "
                          />
                        </div>


                        <span
                          className="
                            text-[9px]
                            font-medium
                            tracking-[0.15em]
                            text-mist-600
                          "
                        >
                          {studio.number}
                        </span>

                      </div>

                      <span
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-[9px]
                          text-mist-600
                        "
                      >
                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-cyan-400
                          "
                        />

                        AI POWERED
                      </span>

                    </div>



                    <div
                      className="
                        mt-4
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >

                      <h3
                        className="
                          text-base
                          font-medium
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-cyan-100
                        "
                      >
                        {studio.title}
                      </h3>

                      <ArrowUpRight
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-mist-600
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-cyan-300
                        "
                      />

                    </div>


                    <p
                      className="
                        mt-2
                        line-clamp-2
                        text-xs
                        leading-relaxed
                        text-mist-500
                      "
                    >
                      {studio.description}
                    </p>

                    <div
                      className="
                        mt-5
                        h-px
                        w-full
                        bg-white/[0.06]
                      "
                    />

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.15em]
                          text-mist-600
                        "
                      >
                        Open studio
                      </span>


                      <span
                        className="
                          text-[9px]
                          text-mist-600
                          transition-colors
                          duration-300
                          group-hover:text-cyan-300
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      opacity-0
                      shadow-[inset_0_0_40px_rgba(139,92,246,0.06)]
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                </motion.div>
              )
            })}

          </AnimatePresence>

        </div>


        {visible.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              py-16
              text-center
              text-sm
              text-mist-500
            "
          >
            No studios available in this category.
          </motion.div>
        )}

      </div>
    </section>
  )
}