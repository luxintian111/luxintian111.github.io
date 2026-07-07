import SectionPanel from './SectionPanel'

const traits = [
  '阅读一些文字，思考人生的奥秘',
  '漫无目的的胡乱散步',
  '偶尔看几局激情澎湃的乒乓球赛',
  '或者戴着耳机屏蔽外界的一切',
]

export default function TraitsSection() {
  return (
    <SectionPanel label="日常" title="我一般干些什么" variant="mist">
      <ul className="grid gap-4 sm:grid-cols-2">
        {traits.map((trait, index) => (
          <li
            key={trait}
            className="group rounded-2xl border border-white/80 bg-white/40 px-5 py-5 text-[#6F6F6F] transition-all duration-300 hover:border-[#000000]/10 hover:bg-white/70 hover:text-[#000000]"
          >
            <span className="mb-2 block font-serif text-2xl text-[#000000]/20 transition-colors group-hover:text-[#000000]/40">
              0{index + 1}
            </span>
            {trait}
          </li>
        ))}
      </ul>
    </SectionPanel>
  )
}
