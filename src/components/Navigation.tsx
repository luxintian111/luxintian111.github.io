const navItems = [
  { label: '首页', href: '#home', active: true },
  { label: '关于', href: '#about', active: false },
  { label: '日常', href: '#interests', active: false },
  { label: '联系', href: '#contact', active: false },
]

export default function Navigation() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl justify-center px-8 py-6">
      <ul className="flex items-center gap-5 sm:gap-7">
        {navItems.map((item) => (
          <li key={item.href}>
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

        <li className="ml-1 sm:ml-2">
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
