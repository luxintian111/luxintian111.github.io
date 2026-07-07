export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <h1
        className="animate-fade-rise max-w-7xl font-serif text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-[#000000] sm:text-7xl md:text-8xl"
      >
        放慢脚步，<span className="italic text-[#6F6F6F]">享受生活</span>。
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
        我是卢欣恬。我的网页和我的性格一样比较随意——因为我是一个经常动不动就
        放自己一马的人。如果你也喜欢这样，欢迎来我的池塘坐坐。
      </p>

      <a
        href="#about"
        className="animate-fade-rise-delay-2 mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        认识一下
      </a>
    </section>
  )
}
