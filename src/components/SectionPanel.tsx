import type { ReactNode } from 'react'

type PanelVariant = 'sage' | 'mist' | 'meadow' | 'dawn'

const variants: Record<PanelVariant, string> = {
  sage: 'from-[#f8fbf9]/95 via-[#eef5f1]/90 to-[#e3ece6]/85',
  mist: 'from-[#f6f9fb]/95 via-[#ebf2f5]/90 to-[#dfe9ed]/85',
  meadow: 'from-[#f5faf6]/95 via-[#e9f3eb]/90 to-[#deebdf]/85',
  dawn: 'from-[#faf8f5]/95 via-[#f2eeea]/90 to-[#e8e4df]/85',
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
        className={`mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-gradient-to-br ${variants[variant]} px-8 py-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-12 sm:py-14`}
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
