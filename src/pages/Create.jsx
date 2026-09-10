import PageHeader from '../components/PageHeader.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import AgentSection from '../components/AgentSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Create() {
  return (
    <>
      <PageHeader
        eyebrow="Create"
        title="Everything you make starts here."
        description="Pick a studio, describe your idea, and let NEURALIX handle the rest — from first draft to final export."
      />
      <FeatureGrid />
      <AgentSection />
      <CTASection />
    </>
  )
}
