import VideoBackground from './components/VideoBackground'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import TraitsSection from './components/TraitsSection'
import DailySection from './components/DailySection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <>
      {/* 首屏：打开即见视频 + 推进动效 */}
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <VideoBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navigation />
          <HeroSection />
        </div>
      </div>

      {/* 内容区：从白色自然过渡到淡绿渐变 */}
      <div className="relative z-10 bg-gradient-to-b from-white via-[#f8faf9] via-[#f4f8f5] via-[#ebf5ee] via-[#d8f0df] to-[#c8e6c9]">
        <AboutSection />
        <TraitsSection />
        <DailySection />
        <ContactSection />

        <footer className="border-t border-[#000000]/5 bg-[#c8e6c9] py-8 text-center text-sm text-[#4a7c59]">
          <p>&copy; 2026 卢欣恬 | Powered by GitHub Pages</p>
        </footer>
      </div>
    </>
  )
}
