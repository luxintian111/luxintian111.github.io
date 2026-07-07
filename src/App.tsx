import VideoBackground from './components/VideoBackground'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import TraitsSection from './components/TraitsSection'
import DailySection from './components/DailySection'
import FishTank from './components/FishTank'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <VideoBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TraitsSection />
      <DailySection />
      <FishTank />
      <ContactSection />

      <footer className="relative z-10 border-t border-[#000000]/5 py-8 text-center text-sm text-[#6F6F6F]">
        <p>&copy; 2026 卢欣恬 | Powered by GitHub Pages</p>
      </footer>
    </div>
  )
}
