const fishList = ['🐟', '🐠', '🐡', '🐟', '🐠', '🐡', '🐟']

export default function FishTank() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-[#6F6F6F]">
            灵感池
          </p>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#000000] md:text-5xl">
            每天我的脑子里也有几条在游
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#6F6F6F]">
            这里有几条小鱼在游。它们和我一样，漫无目的，但自得其乐。
          </p>
        </div>

        <div className="relative h-64 overflow-hidden rounded-2xl border border-[#000000]/5 bg-[#000000]/[0.02] md:h-80">
          {fishList.map((fish, i) => (
            <span
              key={i}
              className="absolute animate-[swim_8s_ease-in-out_infinite] text-2xl opacity-70"
              style={{
                top: `${12 + (i * 11) % 70}%`,
                left: `${8 + (i * 13) % 65}%`,
                animationDuration: `${5 + (i % 4)}s`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              {fish}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes swim {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -12px) rotate(6deg); }
        }
      `}</style>
    </section>
  )
}
