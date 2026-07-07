export default function DailySection() {
  return (
    <section id="interests" className="relative z-10 mx-auto max-w-7xl px-8 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest text-[#6F6F6F]">
        兴趣
      </p>
      <h2 className="mb-12 font-serif text-4xl font-normal tracking-tight text-[#000000] md:text-5xl">
        我的日常
      </h2>

      <div className="max-w-3xl">
        <h3 className="mb-4 font-serif text-2xl text-[#000000]">
          有时间的时候，不带任何目的性地四处乱逛
        </h3>
        <p className="mb-8 text-base leading-relaxed text-[#6F6F6F]">
          总之是离开电脑，要么是在大自然把力气用完然后疲惫地回来躺下，
          要么是找个安静的地方坐下来把大脑放空——这太幸福了，就这么平淡。
        </p>

        <div className="h-1 w-full overflow-hidden rounded-full bg-[#000000]/5">
          <div
            className="h-full rounded-full bg-[#000000] transition-all duration-1000"
            style={{ width: '95%' }}
          />
        </div>
        <p className="mt-3 text-xs text-[#6F6F6F]">幸福指数 · 95%</p>
      </div>
    </section>
  )
}
