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

      {/* 内容区：从视频衔接处开始浅绿渐变 */}
      <div className="relative z-10 bg-gradient-to-b from-[#f2f9f2] via-[#eef7ef] via-[#e8f3e9] via-[#e0efe2] to-[#d4ead6]">
        <AboutSection />
        <TraitsSection />
        <DailySection />
        <ContactSection />

        <footer className="border-t border-[#000000]/5 bg-[#d4ead6] py-8 text-center text-sm text-[#4a7c59]">
          <p>&copy; 2026 卢欣恬 | Powered by GitHub Pages</p>
        </footer>
      </div>
    </>
  )
}
