import PageHeader from '../components/PageHeader.jsx'
import StudioSection from '../components/StudioSection.jsx'
import ComparisonSection from '../components/ComparisonSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Studios() {
  return (
    <>
      <PageHeader
        eyebrow="Studios"
        title="Eleven studios. One workspace."
        description="Every creative discipline lives in the same place, so your ideas never lose momentum switching tabs."
      />
      <StudioSection />
      <ComparisonSection />
      <CTASection />
    </>
  )
}
