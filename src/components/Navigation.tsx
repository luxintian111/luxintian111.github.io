const navItems = [
  { label: '首页', href: '#home', active: true },
  { label: '关于', href: '#about', active: false },
  { label: '日常', href: '#interests', active: false },
  { label: '联系', href: '#contact', active: false },
]

export default function Navigation() {
  return (
    <nav className="relative z-10 mx-auto w-full max-w-7xl px-8 py-6">
      <ul className="grid w-full grid-cols-5 items-center justify-items-center gap-2">
        {navItems.map((item) => (
          <li key={item.href} className="flex justify-center">
            <a
              href={item.href}
              className={`whitespace-nowrap text-sm transition-colors duration-300 hover:text-[#000000] ${
                item.active ? 'font-medium text-[#000000]' : 'text-[#6F6F6F]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}

        <li className="flex justify-center">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-[#000000] px-5 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            一起畅聊
          </a>
        </li>
      </ul>
    </nav>
  )
}
