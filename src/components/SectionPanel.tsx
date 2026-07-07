import type { ReactNode } from 'react'

type PanelVariant = 'sage' | 'mist' | 'meadow' | 'dawn'

const variants: Record<PanelVariant, string> = {
  sage: 'bg-[#e8f5e9]/45',
  mist: 'bg-[#f1f8e9]/25',
  meadow: 'bg-[#e0f2f1]/20',
  dawn: 'bg-[#e8f5e9]/35',
}

interface SectionPanelProps {
  id?: string
  label: string
  title: string
  variant?: PanelVariant
  children: ReactNode
}

export default function SectionPanel({
  id,
  label,
  title,
  variant = 'sage',
  children,
}: SectionPanelProps) {
  return (
    <section id={id} className="px-6 py-10 sm:px-8">
      <div
        className={`mx-auto max-w-5xl rounded-[2rem] border border-white/60 ${variants[variant]} px-8 py-12 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-12 sm:py-14`}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6F6F]">
          {label}
        </p>
        <h2 className="mb-10 font-serif text-3xl font-normal tracking-tight text-[#000000] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}