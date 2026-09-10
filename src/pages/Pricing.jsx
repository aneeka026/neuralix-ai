import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Explore the workspace and generate at low resolution.',
    features: [
      '50 generations / month',
      'Standard models',
      '1080p output',
      'Community showcase access',
    ],
    highlighted: false,
  },
  {
    name: 'Creator',
    price: '$29',
    period: '/month',
    description: 'For individuals shipping creative work regularly.',
    features: [
      'Unlimited generations',
      'All studios unlocked',
      '4K output',
      'Commercial license',
      'Priority render queue',
    ],
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$99',
    period: '/month',
    description: 'For teams producing campaigns at scale.',
    features: [
      'Everything in Creator',
      'Team workspaces',
      'Brand kits & presets',
      'Dedicated support',
      'API access',
    ],
    highlighted: false,
  },
]

export default function Pricing() {

  const [selectedPlan, setSelectedPlan] = useState('Creator')

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing for every creator."
        description="Start free. Upgrade when your workflow outgrows the basics."
      />

      <section className="pb-28">
        <div className="container-px mx-auto max-w-6xl">

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => {

              const isSelected = selectedPlan === plan.name

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -5,
                  }}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`relative flex cursor-pointer flex-col rounded-3xl border p-8 transition-all duration-300 ${isSelected
                      ? 'border-violet-400/50 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 shadow-glow'
                      : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
                    }`}
                >

                  {plan.highlighted && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-1 text-xs font-medium text-ink-950">
                      Most popular
                    </span>
                  )}

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                    >
                      <Check className="h-3.5 w-3.5 text-ink-950" />
                    </motion.div>
                  )}

                  <h3 className="text-lg font-medium text-white">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-display text-4xl font-semibold text-white">
                      {plan.price}
                    </span>

                    <span className="pb-1 text-sm text-mist-400">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-mist-400">
                    {plan.description}
                  </p>

                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-mist-300"
                      >
                        <Check className="h-4 w-4 shrink-0 text-cyan-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/create"
                    onClick={(e) => {
                      setSelectedPlan(plan.name)
                      e.stopPropagation()
                    }}
                    className={`mt-10 rounded-full px-6 py-3 text-center text-sm font-medium transition-all hover:scale-[1.02] ${isSelected
                        ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-ink-950'
                        : 'border border-white/15 text-mist-100 hover:bg-white/[0.06]'
                      }`}
                  >
                    {isSelected ? 'Selected ✓' : 'Get started'}
                  </Link>

                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <CTASection />
    </>
  )
}