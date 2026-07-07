import SectionPanel from './SectionPanel'

export default function AboutSection() {
  return (
    <SectionPanel id="about" label="关于" title="关于我" variant="sage">
      <div className="space-y-4 text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
        <p>我这个人在 I 人和 E 人之间徘徊</p>
        <p>
          主要是 I 在我的性格里占了百分之五十一，E 的部分略逊一筹，只占了百分之四十九
        </p>
        <p>从这里可以看出来，我不知道怎么介绍自己</p>
        <p className="text-[#000000]">所以只要记得我是一个学设计的就可以了</p>
      </div>

      <div className="mt-10">
        <div className="mb-3 flex justify-between text-xs text-[#6F6F6F]">
          <span>I 人 · 51%</span>
          <span>E 人 · 49%</span>
        </div>
        <div className="flex h-2 overflow-hidden rounded-full bg-[#000000]/5">
          <div className="rounded-l-full bg-gradient-to-r from-[#4a5568] to-[#718096]" style={{ width: '51%' }} />
          <div className="rounded-r-full bg-gradient-to-r from-[#a0aec0] to-[#cbd5e0]" style={{ width: '49%' }} />
        </div>
      </div>
    </SectionPanel>
  )
}
