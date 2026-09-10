import PageHeader from '../components/PageHeader.jsx'
import ModelsSection from '../components/ModelsSection.jsx'
import StatsSection from '../components/StatsSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Models() {
  return (
    <>
      <PageHeader
        eyebrow="Models"
        title="One workspace, every model."
        description="NEURALIX routes each prompt to the best available model for the job — no manual switching required."
      />
      <ModelsSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
