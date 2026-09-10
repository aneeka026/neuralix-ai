import PageHeader from '../components/PageHeader.jsx'
import ShowcaseSection from '../components/ShowcaseSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Showcase() {
  return (
    <>
      <PageHeader
        eyebrow="Showcase"
        title="Made with NEURALIX."
        description="A living gallery of what the community is creating — browse by style and try any look yourself."
      />
      <ShowcaseSection />
      <CTASection />
    </>
  )
}
