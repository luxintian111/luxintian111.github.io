const traits = [
  '阅读一些文字，思考人生的奥秘',
  '漫无目的的胡乱散步',
  '偶尔看几局激情澎湃的乒乓球赛',
  '或者戴着耳机屏蔽外界的一切',
]

export default function TraitsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-[#6F6F6F]">
            日常
          </p>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#000000] md:text-5xl">
            我一般干些什么
          </h2>
        </div>

        <ul className="flex flex-col gap-4">
          {traits.map((trait) => (
            <li
              key={trait}
              className="border-b border-[#000000]/10 pb-4 text-base text-[#6F6F6F] transition-colors duration-300 hover:text-[#000000]"
            >
              {trait}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
