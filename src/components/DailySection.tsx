import SectionPanel from './SectionPanel'

export default function DailySection() {
  return (
    <SectionPanel id="interests" label="兴趣" title="我的日常" variant="meadow">
      <div className="max-w-3xl">
        <h3 className="mb-4 font-serif text-xl text-[#000000] sm:text-2xl">
          有时间的时候，不带任何目的性地四处乱逛
        </h3>
        <p className="mb-10 text-base leading-relaxed text-[#6F6F6F]">
          总之是离开电脑，要么是在大自然把力气用完然后疲惫地回来躺下，
          要么是找个安静的地方坐下来把大脑放空——这太幸福了，就这么平淡。
        </p>

        <div className="rounded-2xl border border-white/80 bg-white/40 px-6 py-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-[#6F6F6F]">幸福指数</span>
            <span className="font-serif text-2xl text-[#000000]">95%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#000000]/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#6b9080] via-[#4a7c6f] to-[#2d5a4a]"
              style={{ width: '95%' }}
            />
          </div>
        </div>
      </div>
    </SectionPanel>
  )
}
