const items = [
  'AI IMAGE',
  'AI VIDEO',
  'AI MUSIC',
  'AI VOICE',
  'CREATIVE AI',
  '4K OUTPUT',
  'GENERATIVE MEDIA',
  'AI WORKFLOW',
]

export default function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900/40 py-4">
      
    
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />

    
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

     
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="
              flex
              shrink-0
              items-center
              gap-12
              text-xs
              font-medium
              tracking-[0.12em]
              text-mist-400
            "
          >
            {item}

            <span className="h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
          </span>
        ))}
      </div>
    </div>
  )
}