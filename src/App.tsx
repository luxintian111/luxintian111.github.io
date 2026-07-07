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

      {/* 向下滚动才看到的内容 */}
      <div className="relative z-10 bg-gradient-to-b from-white via-[#f4f8f5] to-[#e6eee8]">
        <AboutSection />
        <TraitsSection />
        <DailySection />
        <ContactSection />

        <footer className="border-t border-[#000000]/5 bg-[#e6eee8]/50 py-8 text-center text-sm text-[#6F6F6F]">
          <p>&copy; 2026 卢欣恬 | Powered by GitHub Pages</p>
        </footer>
      </div>
    </>
  )
}
