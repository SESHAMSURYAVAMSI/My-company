import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Transform from '@/components/Transform'
import Thinkers from '@/components/Thinkers'
import LatestThinking from '@/components/LatestThinking'
import WhatsNew from '@/components/WhatsNew'
import Capabilities from '@/components/Capabilities'
import Industries from '@/components/Industries'
import OnsiteStories from '@/components/OnsiteStories'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Transform />
      <Thinkers />
      <LatestThinking />
      <WhatsNew />
      <Capabilities />
      <Industries />
      <OnsiteStories />
      <CTA />
      <Footer />
    </main>
  )
}
