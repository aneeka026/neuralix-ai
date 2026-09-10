import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import StudioSection from '../components/StudioSection.jsx'
import ComparisonSection from '../components/ComparisonSection.jsx'
import WorkflowSection from '../components/WorkflowSection.jsx'
import ShowcaseSection from '../components/ShowcaseSection.jsx'
import ModelsSection from '../components/ModelsSection.jsx'
import StatsSection from '../components/StatsSection.jsx'
import AgentSection from '../components/AgentSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeatureGrid />
      <StudioSection />
      <ComparisonSection />
      <WorkflowSection />
      <ShowcaseSection />
      <ModelsSection />
      <StatsSection />
      <AgentSection />
      <CTASection />
    </>
  )
}
