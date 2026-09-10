import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Image,
  Video,
  Music,
  Mic,
  Sparkles,
  Loader2,
} from 'lucide-react'
import Toast from './Toast.jsx'

const tabs = [
  { id: 'image', label: 'Image', icon: Image },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'voice', label: 'Voice', icon: Mic },
]

const previews = {
  image: 'https://plus.unsplash.com/premium_photo-1764702433145-db8f9e0d028b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  video: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=900&h=700&fit=crop&q=80',
  music: 'https://images.unsplash.com/photo-1764557175375-9e2bea91530e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpJTIwdmlkZW8lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
  voice: 'https://media.istockphoto.com/id/2258875361/photo/ai-voice-assistant-interface-with-microphone-icon-and-speech-waveform.webp?a=1&b=1&s=612x612&w=0&k=20&c=0KkPBz_Nkf2iVzOQE0Jkw5jw03Wz6F4uRHoxLYhAen8=',
}

const trust = [
  '500+ AI Models',
  '4K Output',
  'Commercial Ready',
  'No Watermarks',
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState('image')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [generation, setGeneration] = useState(0)
  const [toast, setToast] = useState(false)

  const handleGenerate = () => {
    if (loading) return

    setLoading(true)
    setToast(false)

    setTimeout(() => {
      setLoading(false)
      setGeneration((g) => g + 1)
      setToast(true)

      setTimeout(() => {
        setToast(false)
      }, 2600)
    }, 1400)
  }

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#030305]
        pt-24
        pb-12
        lg:pt-28
        lg:pb-10
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            -left-32
            top-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-600/20
            blur-[140px]
            lg:h-[520px]
            lg:w-[520px]
          "
        />


        <div
          className="
            absolute
            -right-32
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/15
            blur-[150px]
            lg:h-[520px]
            lg:w-[520px]
          "
        />


        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/5
            blur-[140px]
          "
        />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>


      <div
        className="
          container-px
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[0.88fr_1.12fr]
            lg:gap-10
            xl:gap-14
          "
        >


          <div className="text-center lg:text-left">


            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Next-generation creative AI
            </motion.span>


            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mt-5
                text-4xl
                font-semibold
                leading-[1.02]
                text-white
                sm:text-5xl
                lg:text-[54px]
                xl:text-[62px]
              "
            >
              Create Beyond
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
                Imagination.
              </span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-base
                leading-relaxed
                text-mist-300
                sm:text-lg
                lg:mx-0
                lg:max-w-[570px]
              "
            >
              Generate stunning images, videos, audio and creative content
              with one intelligent workspace.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                mt-7
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              <Link
                to="/create"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-500
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:from-violet-600
                  hover:to-cyan-600
                  hover:shadow-lg
                  hover:shadow-violet-500/20
                "
              >
                Start Creating
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/studios"
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-mist-200
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.07]
                "
              >
                Explore Platform
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                mt-7
                flex
                flex-wrap
                justify-center
                gap-x-5
                gap-y-2
                text-[11px]
                text-mist-400
                lg:justify-start
              "
            >
              {trust.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400/80" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative">

            <div
              className="
                pointer-events-none
                absolute
                -inset-10
                -z-10
                rounded-[40px]
                bg-violet-500/10
                blur-[80px]
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="
                glass
                relative
                mx-auto
                w-full
                max-w-[720px]
                rounded-3xl
                border
                border-white/[0.08]
                p-3.5
                shadow-[0_0_70px_rgba(124,58,237,0.14)]
              "
            >
              <div
                className="
                  grid
                  gap-3.5
                  sm:grid-cols-[255px_1fr]
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    gap-3.5
                    rounded-2xl
                    bg-white/[0.025]
                    p-3.5
                  "
                >

                  <div
                    className="
                      flex
                      gap-1
                      rounded-xl
                      bg-ink-900/60
                      p-1
                    "
                  >
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      const active = activeTab === tab.id

                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`
                            relative
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-1.5
                            rounded-lg
                            py-2.5
                            text-[11px]
                            transition-colors
                            ${active
                              ? 'text-white'
                              : 'text-mist-400 hover:text-mist-100'
                            }
                          `}
                        >
                          {active && (
                            <motion.span
                              layoutId="hero-tab-bg"
                              className="
                                absolute
                                inset-0
                                rounded-lg
                                bg-gradient-to-r
                                from-violet-500/80
                                to-cyan-500/80
                                shadow-[0_0_20px_rgba(124,58,237,0.3)]
                              "
                              transition={{
                                type: 'spring',
                                duration: 0.4,
                              }}
                            />
                          )}

                          <Icon className="relative h-3.5 w-3.5" />
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-1">
                    <p className="mb-2 text-xs font-medium text-mist-200">
                      Describe your creation
                    </p>

                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={3}
                      placeholder="Describe what you want to create..."
                      className="
                        h-[96px]
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-white/10
                        bg-black/30
                        p-3.5
                        text-xs
                        leading-relaxed
                        text-mist-100
                        placeholder:text-mist-500
                        outline-none
                        transition
                        focus:border-violet-400/60
                        focus:ring-1
                        focus:ring-violet-400/20
                      "
                    />
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="
                      flex
                      h-12
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-500
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:shadow-lg
                      hover:shadow-violet-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate
                        <Sparkles className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div
                    className="
                      mt-auto
                      rounded-lg
                      border
                      border-white/5
                      bg-white/[0.02]
                      p-3
                    "
                  >
                    <p className="text-[10px] leading-relaxed text-mist-400">
                      No credit card required. Simulated preview — connect a
                      model to go live.
                    </p>
                  </div>
                </div>


                <div
                  className="
                    relative
                    h-[300px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    sm:h-[340px]
                    xl:h-[380px]
                  "
                >
                  <motion.img
                    key={`${activeTab}-${generation}`}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    src={previews[activeTab]}
                    alt={`AI generated ${activeTab} preview`}
                    loading="lazy"
                    className="h-full w-full scale-[1.03] object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/20" />

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      flex
                      items-center
                      gap-1.5
                      sm:left-4
                      sm:top-4
                      sm:gap-2
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-black/50
                        px-2.5
                        py-1
                        text-[10px]
                        text-white
                        backdrop-blur-md
                        sm:px-3
                        sm:text-[0.65rem]
                      "
                    >
                      <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-coral-400" />
                      LIVE
                    </span>

                    <span
                      className="
                        hidden
                        rounded-full
                        bg-black/50
                        px-3
                        py-1
                        text-white
                        backdrop-blur-md
                        sm:block
                        sm:text-[0.65rem]
                      "
                    >
                      AI GENERATED
                    </span>
                  </div>

                  =                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      rounded-full
                      bg-black/50
                      px-2.5
                      py-1
                      text-[10px]
                      text-white
                      backdrop-blur-md
                      sm:right-4
                      sm:top-4
                      sm:px-3
                      sm:text-[0.65rem]
                    "
                  >
                    4K
                  </span>

                  =                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      right-3
                      flex
                      items-end
                      justify-between
                      sm:bottom-4
                      sm:left-4
                      sm:right-4
                    "
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/60">
                        Creative Preview
                      </p>

                      <p className="mt-0.5 text-sm font-medium capitalize text-white">
                        {activeTab} Generation
                      </p>
                    </div>

                    <div className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur-md">
                      Neuralix AI
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Toast
        show={toast}
        message="Your creation is ready to view."
      />
    </section>
  )
}