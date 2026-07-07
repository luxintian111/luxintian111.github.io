export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-1 flex-col items-center justify-center px-6 pb-28 pt-4 text-center"
    >
      <h1 className="animate-fade-rise max-w-7xl font-serif text-4xl font-normal leading-[0.95] tracking-[-1.5px] text-[#000000] sm:text-5xl md:text-6xl">
        欢迎参观我的世界
      </h1>

      <div className="animate-fade-rise-delay mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
        <p>我是卢欣恬</p>
        <p>我的网页和我的性格一样比较随意</p>
        <p>因为我是一个经常动不动就 放自己一马的人</p>
        <p>如果你也喜欢这样，欢迎和我聊聊</p>
      </div>

      <a
        href="#contact"
        className="animate-fade-rise-delay-2 mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        一起畅聊
      </a>
    </section>
  )
}
