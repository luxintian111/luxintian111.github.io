export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-8 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest text-[#6F6F6F]">
        关于
      </p>
      <h2 className="mb-12 font-serif text-4xl font-normal tracking-tight text-[#000000] md:text-5xl">
        关于我
      </h2>

      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-[#6F6F6F]">
        <p>
          我是 <strong className="font-medium text-[#000000]">卢欣恬</strong>。
        </p>
        <p>
          我的网页和我的性格一样比较随意，因为我是一个经常动不动就
          <span className="border-b border-[#000000]/20 font-medium text-[#000000]">
            放自己一马
          </span>
          的人。
        </p>
        <p>
          主要是 i 在我的性格里占了百分之五十一，e 的部分略逊一筹，只占了百分之四十九——
          所以应该从这里可以看出来，我不知道怎么介绍自己。
        </p>
      </div>
    </section>
  )
}
