const navItems = [
  { label: '首页', href: '#home', active: true },
  { label: '关于', href: '#about', active: false },
  { label: '日常', href: '#interests', active: false },
  { label: '联系', href: '#contact', active: false },
]

export default function Navigation() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <a
        href="#home"
        className="font-serif text-3xl tracking-tight text-[#000000]"
      >
        欣恬<sup className="text-xs">®</sup>
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`text-sm transition-colors duration-300 hover:text-[#000000] ${
                item.active ? 'font-medium text-[#000000]' : 'text-[#6F6F6F]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="rounded-full bg-[#000000] px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        一起畅聊
      </a>
    </nav>
  )
}
