import { Link } from 'react-router-dom'
import {
  Sparkles,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
} from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Create', to: '/create' },
      { label: 'Studios', to: '/studios' },
      { label: 'Models', to: '/models' },
      { label: 'Showcase', to: '/showcase' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '/about' },
      { label: 'Blog', to: '/about' },
      { label: 'Help Center', to: '/about' },
      { label: 'Community', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: MessageCircle, label: 'X' },
  { icon: Youtube, label: 'YouTube' },
  { icon: MessageCircle, label: 'Discord' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink-900/60">
   
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-violet-600/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

      <div className="container-px relative z-10 mx-auto max-w-6xl py-10 sm:py-12 lg:py-14">
        
       
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          
       
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
                <Sparkles className="h-3.5 w-3.5 text-ink-950" />
              </span>

              <span className="font-display text-base font-semibold tracking-wide text-white">
                NEURALIX
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-[10px] leading-relaxed text-mist-500 sm:text-xs">
              An intelligent creative platform for the next generation of
              creators.
            </p>

          
            <div className="mt-4 flex gap-2">
              {socials.map((social, i) => {
                const Icon = social.icon

                return (
                  <a
                    key={`${social.label}-${i}`}
                    href="#"
                    aria-label={social.label}
                    className="
                      grid h-8 w-8 place-items-center
                      rounded-full
                      border border-white/10
                      bg-white/[0.02]
                      text-mist-500
                      transition-all duration-200
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.05]
                      hover:text-white
                    "
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                )
              })}
            </div>
          </div>

         
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.12em] text-white sm:text-xs">
                {col.title}
              </h4>

              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[10px] text-mist-500 transition-colors hover:text-white sm:text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-[9px] text-mist-600 sm:flex-row sm:text-[10px]">
          <span>© 2026 NEURALIX. All rights reserved.</span>

          <div className="flex gap-4 sm:gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}