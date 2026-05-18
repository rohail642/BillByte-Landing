import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Features from './sections/Features'
import Roles from './sections/Roles'
import HowItWorks from './sections/HowItWorks'
import Compare from './sections/Compare'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Roles />
      <HowItWorks />
      <Compare />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
