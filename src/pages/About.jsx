import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const values = [
  {
    title: 'Built for makers',
    description: 'Every decision starts with what helps a creator finish faster, not what looks impressive in a demo.',
  },
  {
    title: 'One workspace, always',
    description: 'We believe switching tools is the biggest tax on creative momentum — so we removed it.',
  },
  {
    title: 'Quality over noise',
    description: 'More models is only useful if the output is something you would actually ship.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We're building the studio every creator wishes they had."
        description="NEURALIX started as a small team frustrated by how many tabs it took to finish one campaign."
      />

      <section className="pb-28">
        <div className="container-px mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
            <img
              src="https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?w=1400&h=600&fit=crop&q=80"
              alt="The NEURALIX team at work"
              loading="lazy"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
              >
                <h3 className="font-medium text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
