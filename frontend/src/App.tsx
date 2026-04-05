import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Timeline from './components/Timeline'
import WhoIAm from './components/WhoIAm'
import SiteFooter from './components/SiteFooter'
import ClickSpark from './components/selectspark'

export default function App() {
  return (
    <ClickSpark
      sparkColor="#6366F1"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      {/* Ambient background layers */}
      <div className="mesh-gradient" />
      <div className="dot-grid" />
      <div className="grain" />

      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />

      <main className="relative z-10 pb-20">
        <Hero />

        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-4">
          <div className="h-px w-full bg-gradient-to-r from-accent/20 via-accent-cyan/20 to-transparent" />
        </div>

        <WhoIAm />

        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-4">
          <div className="h-px w-full bg-gradient-to-r from-accent-cyan/20 via-accent-emerald/20 to-transparent" />
        </div>

        <SelectedWork />

        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-4">
          <div className="h-px w-full bg-gradient-to-r from-accent-emerald/20 via-accent/20 to-transparent" />
        </div>

        <Timeline />
      </main>

      <SiteFooter />
    </ClickSpark>
  )
}
