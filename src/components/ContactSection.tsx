import SectionPanel from './SectionPanel'

export default function ContactSection() {
  return (
    <SectionPanel id="contact" label="联系" title="联系方式" variant="dawn">
      <p className="mb-8 max-w-xl text-base leading-relaxed text-[#6F6F6F]">
        如果平时你也喜欢放自己一马，欢迎和我一起畅聊。
      </p>

      <a
        href="https://mail.qq.com/cgi-bin/write?to=1399575818%40qq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-[#000000] px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        1399575818@qq.com
      </a>
    </SectionPanel>
  )
}
