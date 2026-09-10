import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.email || !form.password) {
      setError('Please fill in both fields.')
      return
    }

    setError('')
    navigate('/create')
  }

  return (
    <div className="container-px mx-auto flex min-h-screen max-w-md flex-col justify-center pb-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 sm:p-10"
      >
        <span className="eyebrow">Welcome back</span>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          Log in to NEURALIX
        </h1>
        <p className="mt-3 text-sm text-mist-400">
          Pick up right where you left off.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-mist-300">
              Email
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-violet-400/50">
              <Mail className="h-4 w-4 shrink-0 text-mist-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-mist-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-mist-300">
              Password
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-violet-400/50">
              <Lock className="h-4 w-4 shrink-0 text-mist-400" />
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-mist-500"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" className="btn-primary mt-2 w-full">
            Log in
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-mist-400">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-white underline-offset-4 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
