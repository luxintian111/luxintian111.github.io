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
            className="group rounded-2xl border border-white/60 bg-[#e8f5e9]/20 px-5 py-5 text-[#6F6F6F] backdrop-blur-md shadow-sm shadow-black/5 transition-all duration-300 hover:border-white/80 hover:bg-[#e8f5e9]/35 hover:text-[#000000]"
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
