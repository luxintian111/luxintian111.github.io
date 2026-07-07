import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasLooped = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId = 0

    const updateOpacity = () => {
      const { currentTime, duration } = video
      if (!duration || Number.isNaN(duration)) {
        rafId = requestAnimationFrame(updateOpacity)
        return
      }

      if (!hasLooped.current) {
        video.style.opacity = '1'
      } else if (currentTime < FADE_DURATION) {
        video.style.opacity = String(currentTime / FADE_DURATION)
      } else if (currentTime > duration - FADE_DURATION) {
        video.style.opacity = String((duration - currentTime) / FADE_DURATION)
      } else {
        video.style.opacity = '1'
      }

      rafId = requestAnimationFrame(updateOpacity)
    }

    const handleEnded = () => {
      hasLooped.current = true
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        void video.play()
      }, 100)
    }

    video.style.opacity = '1'
    void video.play()
    rafId = requestAnimationFrame(updateOpacity)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
      style={{ top: '260px' }}
    >
      <video
        ref={videoRef}
        className="hero-video h-full w-full object-cover"
        style={{ objectPosition: 'center 62%' }}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
      />

      {/* 顶部：只淡入标题区，不遮中间和底部风景 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.88) 6%, rgba(255,255,255,0.65) 14%, rgba(255,255,255,0.4) 22%, rgba(255,255,255,0.18) 32%, rgba(255,255,255,0.06) 45%, transparent 60%)',
        }}
      />

      {/* 底部：仅在最后轻淡入，保留花草清晰度 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(255,255,255,0.08) 78%, rgba(255,255,255,0.25) 88%, rgba(255,255,255,0.55) 95%, #ffffff 100%)',
        }}
      />
    </div>
  )
}
