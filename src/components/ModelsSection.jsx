import { Cpu, Sparkles } from 'lucide-react'
import { models } from '../data/models.js'

export default function ModelsSection() {
  const loop = [...models, ...models]

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
      id="models"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.04] blur-[110px]" />
        <div className="absolute right-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.04] blur-[110px]" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-6xl">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-mist-400">
            <Sparkles className="h-3 w-3 text-cyan-300" />
            AI Models
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
            Access the world's best
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
              AI models.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-[10px] leading-relaxed text-mist-500 sm:text-xs">
            Connect powerful AI models in one creative workspace.
          </p>
        </div>
      </div>


      <div className="relative mt-7 sm:mt-8">


        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030305] to-transparent sm:w-24" />


        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030305] to-transparent sm:w-24" />

        <div
          className="flex w-max gap-3"
          style={{
            animation: 'marquee 34s linear infinite',
          }}
        >
          {loop.map((model, i) => (
            <div
              key={`${model.name}-${i}`}
              className="
                flex
                w-52
                shrink-0
                flex-col
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-4
                transition-colors
                hover:border-violet-400/20
                sm:w-56
                sm:p-5
              "
            >

              <div className="flex items-center justify-between">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                  <Cpu className="h-4 w-4 text-cyan-300" />
                </span>

                <span className="rounded-full border border-white/10 px-2 py-1 text-[8px] text-mist-500">
                  {model.category}
                </span>
              </div>


              <div>
                <h3 className="text-xs font-medium text-white sm:text-sm">
                  {model.name}
                </h3>

                <p className="mt-1 text-[9px] text-mist-500 sm:text-[10px]">
                  {model.speed} · {model.quality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}