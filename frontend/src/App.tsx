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
      sparkColor="#C8F135"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Global overlays */}
      <div className="fixed inset-0 scanline z-[60] opacity-30" />
      <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] glow-amber opacity-10 z-0" />

      <Navbar />

      <main className="relative z-10 pb-20">
        <Hero />

        {/* ── Spacer ── */}
        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-8">
          <div className="h-[1px] w-full bg-outline-variant" />
        </div>

        <WhoIAm />

        {/* ── Spacer ── */}
        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-8">
          <div className="h-[1px] w-full bg-outline-variant" />
        </div>

        <SelectedWork />

        {/* ── Spacer ── */}
        <div className="max-w-7xl mx-auto px-8 pl-10 md:px-16 md:pl-24 lg:px-20 lg:pl-32 py-8">
          <div className="h-[1px] w-full bg-outline-variant" />
        </div>

        <Timeline />
      </main>

      <SiteFooter />
    </ClickSpark>
  )
}
