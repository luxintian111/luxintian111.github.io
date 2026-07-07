export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-8 py-24 pb-32">
      <p className="mb-4 text-sm uppercase tracking-widest text-[#6F6F6F]">
        联系
      </p>
      <h2 className="mb-6 font-serif text-4xl font-normal tracking-tight text-[#000000] md:text-5xl">
        联系方式
      </h2>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-[#6F6F6F]">
        如果平时你也喜欢放自己一马，欢迎和我一起畅聊。
      </p>

      <a
        href="mailto:1399575818@qq.com"
        className="inline-flex rounded-full bg-[#000000] px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        1399575818@qq.com
      </a>
    </section>
  )
}
