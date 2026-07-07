import type { ReactNode } from 'react'

type PanelVariant = 'sage' | 'mist' | 'meadow' | 'dawn'

const variants: Record<PanelVariant, string> = {
  sage: 'from-[#f8fbf9] via-[#f0f7f3] to-[#e9f0eb]',
  mist: 'from-[#f6f9fb] via-[#edf3f6] to-[#e4edf1]',
  meadow: 'from-[#f5faf6] via-[#ecf4ed] to-[#e3edd8]',
  dawn: 'from-[#faf8f5] via-[#f3efe9] to-[#ebe5df]',
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
        className={`mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-gradient-to-br ${variants[variant]} px-8 py-12 shadow-[0_6px_30px_rgba(0,0,0,0.03)] sm:px-12 sm:py-14`}
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
