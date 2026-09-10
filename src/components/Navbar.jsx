import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Create', to: '/create' },
  { label: 'Studios', to: '/studios' },
  { label: 'Showcase', to: '/showcase' },
  { label: 'Models', to: '/models' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'
        }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled
              ? 'glass border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
              : 'border border-white/[0.06] bg-black/30 backdrop-blur-xl '
            }`}
        >

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.5)]">
              <Sparkles className="h-4 w-4 text-ink-950" />
            </span>

            <span className="font-display text-lg font-semibold tracking-tight text-white">
              NEURALIX
            </span>
          </Link>


          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative flex items-center rounded-lg px-3.5 py-2 text-sm transition-all duration-300 ${isActive
                    ? 'bg-white/[0.08] text-white shadow-[0_0_20px_rgba(139,92,246,0.10)]'
                    : 'text-mist-300 hover:bg-white/[0.04] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>


                    <span
                      className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${isActive
                          ? 'w-5 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-70'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>


          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              to="/login"
              className="rounded-lg px-3 py-2 text-sm text-mist-300 transition-colors hover:text-white"
            >
              Log in
            </Link>

            <Link
              to="/create"
              className="group flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Start Creating
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>


          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist-100 transition-colors hover:bg-white/[0.07] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-px mx-auto max-w-7xl lg:hidden"
          >
            <div className="glass mt-2 rounded-2xl border border-white/[0.08] p-3 shadow-2xl">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all ${isActive
                      ? 'bg-white/[0.08] text-white'
                      : 'text-mist-300 hover:bg-white/[0.04] hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-mist-200 transition-colors hover:bg-white/[0.05]"
                >
                  Log in
                </Link>

                <Link
                  to="/create"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-sm font-medium text-white"
                >
                  Start Creating
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}