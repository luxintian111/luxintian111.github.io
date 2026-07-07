import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '1'
    void video.play()

    return () => {}
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
      style={{ top: '200px' }}
    >
      <video
        ref={videoRef}
        className="hero-video h-full w-full object-cover"
        style={{ objectPosition: 'center 55%' }}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        loop
      />

      {/* 顶部：只淡入标题区，不遮中间和底部风景 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.75) 8%, rgba(255,255,255,0.35) 20%, rgba(255,255,255,0.1) 35%, transparent 55%)',
        }}
      />

      {/* 底部：渐入浅绿色，与内容区无缝衔接 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(242,249,242,0.1) 78%, rgba(242,249,242,0.3) 88%, rgba(242,249,242,0.6) 95%, #f2f9f2 100%)',
        }}
      />
    </div>
  )
}
