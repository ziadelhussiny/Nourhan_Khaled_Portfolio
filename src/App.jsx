import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { MarketingField } from './components/MarketingField'
import { Navigation } from './components/Navigation'
import { SelectedWork } from './components/SelectedWork'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <SelectedWork />
        <MarketingField />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
