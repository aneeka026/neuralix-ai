import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
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
        <span className="eyebrow">Get started</span>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          Create your account
        </h1>
        <p className="mt-3 text-sm text-mist-400">
          Start creating with all eleven studios, free.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-mist-300">
              Full name
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-violet-400/50">
              <User className="h-4 w-4 shrink-0 text-mist-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-mist-500"
              />
            </div>
          </div>

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
                placeholder="At least 6 characters"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-mist-500"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" className="btn-primary mt-2 w-full">
            Create account
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-mist-400">
          Already have an account?{' '}
          <Link to="/login" className="text-white underline-offset-4 hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
